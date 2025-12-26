import { useState } from "react";
import ResetStepOne from "./ResetStepOne";
import ResetStepTwo from "./ResetStepTwo";
import ResetStepThree from "./ResetStepThree";

const ResetForm = ({
  onAlertClose,
  onAlertOpen,
}: {
  onAlertClose: () => void;
  onAlertOpen: () => void;
}) => {
  const [step, setStep] = useState(1);

  return (
    <>
      {step === 1 && <ResetStepOne setStep={setStep} />}
      {step === 2 && (
        <ResetStepTwo
          setStep={setStep}
          onAlertClose={onAlertClose}
          onAlertOpen={onAlertOpen}
        />
      )}
      {step === 3 && (
        <ResetStepThree onAlertClose={onAlertClose} onAlertOpen={onAlertOpen} />
      )}
    </>
  );
};

export default ResetForm;
