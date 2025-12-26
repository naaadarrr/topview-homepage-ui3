import {
  FormControl,
  Input,
  FormErrorMessage,
  Button,
  InputRightElement,
  Icon,
  InputGroup,
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
import { signIn } from "next-auth/react";
import { ViewOffIcon, ViewIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { loginState } from "@/app/store";

const SignUpStepThree = ({ onModalClose }: { onModalClose: () => void }) => {
  const { callbackUrl, email } = useRecoilValue(loginState);
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

  function validateUsername(value: string) {
    let error;
    if (!value) {
      error = "Name is required";
    }
    return error;
  }

  async function handleSubmit(
    values: { email: string; password: string; username: string },
    actions: FormikHelpers<{
      email: string;
      password: string;
      username: string;
    }>,
  ) {
    const salt = generateSalt(16);
    const passwordCiphertext = CryptoJS.AES.encrypt(
      values.password,
      salt,
    ).toString();
    await updateUserInfo(
      values.email,
      `${passwordCiphertext},${salt}`,
      values.username,
    )
      .then(async () => {
        await signIn("email", {
          email,
          password: `${passwordCiphertext},${salt}`,
          callbackUrl,
        });
        onModalClose();
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
      <Formik
        initialValues={{ email, password: "", username: "" }}
        validateOnChange={false}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <Form>
            <Field name="email">
              {({ field, form }: FieldProps<any>) => (
                <FormControl
                  isInvalid={
                    form.errors.email && form.touched.email ? true : undefined
                  }
                  mb={"16px"}
                >
                  <Input
                    {...field}
                    placeholder="Email address"
                    _placeholder={{ fontSize: "14px" }}
                    disabled
                  />
                </FormControl>
              )}
            </Field>
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
            <Field name="username" validate={validateUsername}>
              {({ field, form }: FieldProps<any>) => (
                <FormControl
                  isInvalid={
                    form.errors.username && form.touched.username
                      ? true
                      : undefined
                  }
                  mb={"16px"}
                >
                  <Input
                    {...field}
                    placeholder="Enter your name"
                    _placeholder={{ fontSize: "14px" }}
                  />
                  <FormErrorMessage fontSize={"12px"} fontStyle="italic">
                    {String(form.errors.username)}
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
    </>
  );
};

export default SignUpStepThree;
