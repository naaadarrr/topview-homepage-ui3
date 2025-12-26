import {
  FormControl,
  Input,
  FormErrorMessage,
  Button,
  Heading,
  Box,
  Icon,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import {
  Formik,
  Form,
  Field,
  type FieldProps,
  type FormikHelpers,
} from "formik";
import { updateUserInfo } from "@/utils/auth";
import crypto from "crypto";
import CryptoJS from "crypto-js";
import { ViewOffIcon, ViewIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { loginState } from "@/app/store";

const ResetStepThree = ({
  onAlertOpen,
  onAlertClose,
}: {
  onAlertOpen: () => void;
  onAlertClose: () => void;
}) => {
  const [loginInfo, setLoginInfo] = useRecoilState(loginState);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const generateSalt = (length: number) => {
    return crypto
      .randomBytes(Math.ceil(length / 2))
      .toString("hex")
      .slice(0, length);
  };

  function validatePassword(value: string) {
    let error;
    if (!value) {
      error = "Password is required";
    } else if (/\s/i.test(value)) {
      error = "The password cannot contain Spaces";
    } else if (!/.{6,}/i.test(value)) {
      error = "Password must be at least 6 characters";
    }
    return error;
  }

  async function handleSubmit(
    values: { password: string },
    actions: FormikHelpers<{
      password: string;
    }>,
  ) {
    const salt = generateSalt(16);
    const passwordCiphertext = CryptoJS.AES.encrypt(
      values.password,
      salt,
    ).toString();
    await updateUserInfo(loginInfo.email, `${passwordCiphertext},${salt}`)
      .then(() => {
        actions.setSubmitting(false);
        setLoginInfo((state) => {
          return {
            ...state,
            alertInfo: {
              message: "Password modification successfult",
              status: "success",
            },
          };
        });
        onAlertOpen();
        setTimeout(onAlertClose, 1500);
        setLoginInfo((state) => {
          return {
            ...state,
            active: "login",
          };
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        actions.setSubmitting(false);
      });
  }

  return (
    <>
      <Heading fontSize="28px" mb={"30px"}>
        Set new password
      </Heading>
      <Formik
        initialValues={{ password: "" }}
        validateOnChange={false}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <Form>
            <Field name="password" validate={validatePassword}>
              {({ field, form }: FieldProps<any>) => (
                <FormControl
                  isInvalid={
                    form.errors.password && form.touched.password
                      ? true
                      : undefined
                  }
                  mb={"16px"}
                >
                  <InputGroup>
                    <Input
                      {...field}
                      placeholder="Password"
                      type={show ? "text" : "password"}
                      _placeholder={{ fontSize: "14px" }}
                    />
                    <InputRightElement width="4.5rem">
                      <Button
                        bg={"#000"}
                        h="1.75rem"
                        size="sm"
                        onClick={handleClick}
                        _hover={{ bg: "#000" }}
                      >
                        {show ? (
                          <Icon w={"20px"} color={"#fff"} as={ViewOffIcon} />
                        ) : (
                          <Icon w={"20px"} color={"#fff"} as={ViewIcon} />
                        )}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage fontSize={"12px"} fontStyle="italic">
                    {String(form.errors.password)}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              isLoading={props.isSubmitting}
              type="submit"
              w={"full"}
              mb={"16px"}
              bg={"#4E40F3"}
              color={"#fff"}
              _hover={{ bg: "#aaa4f2" }}
            >
              Finish
            </Button>
          </Form>
        )}
      </Formik>
      <Box>
        <Button
          variant="link"
          fontSize={"12px"}
          color={"#fff"}
          onClick={() => {
            setLoginInfo((state) => {
              return {
                ...state,
                active: "login",
              };
            });
          }}
        >
          Back to login
        </Button>
      </Box>
    </>
  );
};

export default ResetStepThree;
