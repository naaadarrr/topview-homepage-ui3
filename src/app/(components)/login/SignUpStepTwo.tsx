import {
  Box,
  Text,
  FormControl,
  Input,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
import {
  Formik,
  Form,
  Field,
  type FieldProps,
  type FormikHelpers,
} from "formik";
import { useState, useEffect } from "react";
import {
  sendVerifyCode2Email,
  verifyCodeFromUserInput,
  checkEmailExist,
} from "@/utils/auth";
import { useRecoilState } from "recoil";
import { loginState } from "@/app/store";

const SignUpStepTwo = ({
  setStep,
  onAlertOpen,
  onAlertClose,
}: {
  setStep: (step: number) => void;
  onAlertOpen: () => void;
  onAlertClose: () => void;
}) => {
  const [loginInfo, setLoginInfo] = useRecoilState(loginState);
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    sendVerifyCode2Email(loginInfo.email);
    resetCountdown();
  }, []);

  function resetCountdown() {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown <= 1) {
          clearInterval(timer);
          return 0;
        } else {
          return prevCountdown - 1;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }

  async function validateEmail(value: string) {
    if (!value) {
      return "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      return "Email format is incorrect";
    }
    const bool = await checkEmailExist(value);
    return bool ? "This email is already registered," : undefined;
  }

  function validateVerificationCode(value: string) {
    let error;
    if (!value) {
      error = "Verification code is required";
    }
    return error;
  }

  async function handleSubmit(
    values: { email: string; verificationCode: string },
    actions: FormikHelpers<{ email: string; verificationCode: string }>,
  ) {
    verifyCodeFromUserInput(values.email, values.verificationCode)
      .then(() => {
        setStep(3);
      })
      .catch(() => {
        setLoginInfo((state) => {
          return {
            ...state,
            alertInfo: {
              message: "Verification code is incorrect",
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
  }

  return (
    <>
      <Formik
        initialValues={{ email: loginInfo.email, verificationCode: "" }}
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
                    {form.errors.email ===
                      "This email is already registered," && (
                      <Button
                        variant="link"
                        fontSize={"12px"}
                        color={"#4E40F3"}
                        ml={"4px"}
                        onClick={() => {
                          setLoginInfo((state) => {
                            return {
                              ...state,
                              active: "login",
                            };
                          });
                        }}
                      >
                        Log in with this email
                      </Button>
                    )}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="verificationCode" validate={validateVerificationCode}>
              {({ field, form }: FieldProps<any>) => (
                <FormControl
                  isInvalid={
                    form.errors.verificationCode &&
                    form.touched.verificationCode
                      ? true
                      : undefined
                  }
                  mb={"16px"}
                >
                  <Input
                    {...field}
                    placeholder="Enter verification code sent to your email"
                    _placeholder={{ fontSize: "14px" }}
                    autoComplete="off"
                  />
                  <FormErrorMessage fontSize={"12px"} fontStyle="italic">
                    {String(form.errors.verificationCode)}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Box>
              <Text mr={"10px"} fontSize={"12px"} color={"#B5B5B5"}>
                Didn’t receive a code?
              </Text>
              <Box mb={"8px"}>
                <Text fontSize={"12px"} color={"#B5B5B5"}>
                  It may take a few minutes for the code to arrive in your
                  email, or
                  {countdown > 0 ? (
                    <>
                      <Button
                        mx={"4px"}
                        variant="link"
                        fontSize={"12px"}
                        color={"#fff"}
                        fontWeight={700}
                      >
                        resend
                      </Button>
                      (
                      <Text as={"span"} color={"#4E40F3"}>
                        {countdown}s
                      </Text>
                      )
                    </>
                  ) : (
                    <Button
                      ml={"4px"}
                      variant="link"
                      fontSize={"12px"}
                      color={"#4E40F3"}
                      fontWeight={700}
                      onClick={async () => {
                        setCountdown(60);
                        resetCountdown();
                        await sendVerifyCode2Email(props?.values?.email);
                      }}
                    >
                      resend
                    </Button>
                  )}
                </Text>
              </Box>
            </Box>
            <Button
              isLoading={props.isSubmitting}
              type="submit"
              w={"full"}
              mb={"16px"}
              bg={"#4E40F3"}
              color={"#fff"}
              _hover={{ bg: "#aaa4f2" }}
            >
              Verify
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignUpStepTwo;
