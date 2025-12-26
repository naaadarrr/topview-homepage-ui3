import {
  Box,
  Text,
  FormControl,
  Input,
  FormErrorMessage,
  Button,
  Heading,
} from "@chakra-ui/react";
import {
  Formik,
  Form,
  Field,
  type FieldProps,
  type FormikHelpers,
} from "formik";
import { useState, useEffect } from "react";
import { sendVerifyCode2Email, verifyCodeFromUserInput } from "@/utils/auth";
import { useRecoilState } from "recoil";
import { loginState } from "@/app/store";

const ResetStepTwo = ({
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

  function validateVerificationCode(value: string) {
    let error;
    if (!value) {
      error = "Verification code is required";
    }
    return error;
  }

  function handleSubmit(
    values: { verificationCode: string },
    actions: FormikHelpers<{ verificationCode: string }>,
  ) {
    verifyCodeFromUserInput(loginInfo.email, values.verificationCode)
      .then((r: { status: "success" | "error"; data: any }) => {
        if (r.status === "success") {
          setStep(3);
        } else {
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
        }
      })
      .finally(() => {
        actions.setSubmitting(false);
      });
  }

  return (
    <>
      <Heading fontSize="28px" mb={"30px"}>
        Verify your identity
      </Heading>
      <Formik
        initialValues={{ verificationCode: "" }}
        validateOnChange={false}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <Form>
            <Box mb={"20px"} fontSize={"14px"}>
              <Text>Enter the code sent to </Text>
              <Text fontWeight={700}>{loginInfo.email}</Text>
            </Box>
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
                        await sendVerifyCode2Email(loginInfo.email);
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

export default ResetStepTwo;
