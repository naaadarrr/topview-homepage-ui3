import { useState } from "react";
import SignUpStepOne from "./SignUpStepOne";
import SignUpStepTwo from "./SignUpStepTwo";
import SignUpStepThree from "./SignUpStepThree";
import { Heading } from "@chakra-ui/react";
import QuickLoginForm from "./QuickLoginForm";

const SignUpForm = ({
  onModalClose,
  onAlertClose,
  onAlertOpen,
}: {
  onModalClose: () => void;
  onAlertClose: () => void;
  onAlertOpen: () => void;
}) => {
  const [step, setStep] = useState(1);

  return (
    <>
      <Heading fontSize="28px" mb={"30px"}>
        Sign up for Topview
      </Heading>
      <QuickLoginForm />
      {step === 1 && <SignUpStepOne setStep={setStep} />}
      {step === 2 && (
        <SignUpStepTwo
          setStep={setStep}
          onAlertClose={onAlertClose}
          onAlertOpen={onAlertOpen}
        />
      )}
      {step === 3 && <SignUpStepThree onModalClose={onModalClose} />}
    </>
  );
};

export default SignUpForm;
