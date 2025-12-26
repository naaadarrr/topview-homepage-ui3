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
import { checkEmailExist } from "@/utils/auth";
import { useRecoilState } from "recoil";
import { loginState } from "@/app/store";

const SignUpStepOne = ({ setStep }: { setStep: (step: number) => void }) => {
  const [loginInfo, setLoginInfo] = useRecoilState(loginState);

  async function validateEmail(value: string) {
    if (!value) {
      return "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      return "Email format is incorrect";
    }
    const bool = await checkEmailExist(value);
    return bool ? "This email is already registered," : undefined;
  }

  function handleSubmit(
    values: { email: string },
    actions: FormikHelpers<{ email: string }>,
  ) {
    setStep(2);
    actions.setSubmitting(false);
  }

  return (
    <>
      <Formik
        initialValues={{ email: loginInfo.email }}
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
            <Button
              isLoading={props.isSubmitting}
              type="submit"
              w={"full"}
              mb={"16px"}
              bg={"#4E40F3"}
              color={"#fff"}
              _hover={{ bg: "#aaa4f2" }}
            >
              Sign up
            </Button>
          </Form>
        )}
      </Formik>
      <Box>
        <Box display={"flex"} mb={"8px"}>
          <Text mr={"10px"} fontSize={"12px"} color={"#B5B5B5"}>
            Already have a account?
          </Text>
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
            Log in
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

export default SignUpStepOne;
