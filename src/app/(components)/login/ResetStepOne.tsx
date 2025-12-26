import {
  Box,
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
import { checkEmailExist } from "@/utils/auth";
import { useRecoilState } from "recoil";
import { loginState } from "@/app/store";

const ResetStepOne = ({ setStep }: { setStep: (step: number) => void }) => {
  const [loginInfo, setLoginInfo] = useRecoilState(loginState);

  async function validateEmail(value: string) {
    if (!value) {
      return "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      return "Email format is incorrect";
    }
    const bool = await checkEmailExist(value);
    return bool ? undefined : "This email is not registered,";
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
      <Heading fontSize="28px" mb={"30px"}>
        Reset password
      </Heading>
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
            <Button
              isLoading={props.isSubmitting}
              type="submit"
              w={"full"}
              mb={"16px"}
              bg={"#4E40F3"}
              color={"#fff"}
              _hover={{ bg: "#aaa4f2" }}
            >
              Next
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

export default ResetStepOne;
