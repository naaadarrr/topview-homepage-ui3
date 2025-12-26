import { ViewOffIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  FormControl,
  Input,
  FormErrorMessage,
  Button,
  InputGroup,
  InputRightElement,
  Icon,
  Heading,
} from "@chakra-ui/react";
import {
  Formik,
  Form,
  Field,
  type FieldProps,
  type FormikHelpers,
} from "formik";
import { useState } from "react";
import crypto from "crypto";
import CryptoJS from "crypto-js";
import { signIn } from "next-auth/react";
import QuickLoginForm from "./QuickLoginForm";
import { trackGAEvent } from "@/utils/ga";
import { checkEmailExist, signInWithEmail } from "@/utils/auth";
import { useRecoilState } from "recoil";
import { loginState } from "@/app/store";

const LogInForm = ({
  onModalClose,
  onAlertClose,
  onAlertOpen,
}: {
  onModalClose: () => void;
  onAlertClose: () => void;
  onAlertOpen: () => void;
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

  async function validateEmail(value: string) {
    if (!value) {
      return "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      return "Email format is incorrect";
    }
    const bool = await checkEmailExist(value);
    return bool ? undefined : "This email is not registered,";
  }

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
    values: { email: string; password: string },
    actions: FormikHelpers<{ email: string; password: string }>,
  ) {
    const { email, password } = values;
    const salt = generateSalt(16);
    const ciphertext = CryptoJS.AES.encrypt(password, salt).toString();
    const passwordData = `${ciphertext},${salt}`;
    await signInWithEmail(email, passwordData)
      .then(async () => {
        await signIn("email", {
          email: email,
          password: passwordData,
          callbackUrl: loginInfo.callbackUrl,
        });
        onModalClose();
      })
      .catch(() => {
        setLoginInfo((state) => {
          return {
            ...state,
            alertInfo: {
              message: "Password incorrect",
              status: "error",
            },
          };
        });
        onAlertOpen();
        setTimeout(onAlertClose, 1500);
      })
      .finally(() => {
        actions.setSubmitting(false);
      });

    trackGAEvent("account.signin", "signinBtn.click.email", "");
  }

  return (
    <>
      <Heading fontSize="28px" mb={"30px"}>
        Log in to Topview
      </Heading>
      <QuickLoginForm />
      <Formik
        initialValues={{ email: loginInfo.email, password: "" }}
        validateOnChange={false}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <Form>
            <Field name="email" validate={validateEmail}>
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
                    onChange={async (e) => {
                      setLoginInfo((state) => {
                        return {
                          ...state,
                          email: e.target.value,
                        };
                      });
                      await form.setFieldValue("email", e.target.value);
                    }}
                  />
                  <FormErrorMessage fontSize={"12px"} fontStyle="italic">
                    {String(form.errors.email)}
                    {form.errors.email === "This email is not registered," && (
                      <Button
                        variant="link"
                        fontSize={"12px"}
                        color={"#4E40F3"}
                        ml={"4px"}
                        onClick={() => {
                          setLoginInfo((state) => {
                            return {
                              ...state,
                              active: "signup",
                            };
                          });
                        }}
                      >
                        Sign up with this email
                      </Button>
                    )}
                  </FormErrorMessage>
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
                      onChange={async (e) => {
                        await form.setFieldValue("password", e.target.value);
                        await props.validateField("password");
                      }}
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
              Log in
            </Button>
          </Form>
        )}
      </Formik>
      <Box>
        <Box display={"flex"} mb={"8px"}>
          <Text mr={"10px"} fontSize={"12px"} color={"#B5B5B5"}>
            Don’t have a account?
          </Text>
          <Button
            variant="link"
            fontSize={"12px"}
            color={"#fff"}
            onClick={() => {
              setLoginInfo((state) => {
                return {
                  ...state,
                  active: "signup",
                };
              });
            }}
          >
            Sign up
          </Button>
        </Box>
        <Button
          variant="link"
          fontSize={"12px"}
          color={"#fff"}
          onClick={() => {
            setLoginInfo((state) => {
              return {
                ...state,
                active: "reset",
              };
            });
          }}
        >
          Forgot your password?
        </Button>
      </Box>
    </>
  );
};

export default LogInForm;
