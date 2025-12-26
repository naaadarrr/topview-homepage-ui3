import { trackGAEvent } from "@/utils/ga";
import { Divider, AbsoluteCenter, Box } from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import QuickLogin from "./QuickLogin";
import { useRecoilValue } from "recoil";
import { loginState } from "@/app/store";

const QuickLoginForm = () => {
  const { callbackUrl } = useRecoilValue(loginState);
  return (
    <>
      <Box mb={"16px"}>
        <QuickLogin
          mode={"Google"}
          cb={async () => {
            trackGAEvent("account.signin", "signinBtn.google.click", "");
            await signIn("google", {
              redirect: true,
              callbackUrl,
            });
          }}
        />
      </Box>
      <QuickLogin
        mode={"Apple"}
        cb={async () => {
          trackGAEvent("account.signin", "signinBtn.apple.click", "");
          await signIn("apple", {
            redirect: true,
            callbackUrl,
          });
        }}
      />
      <Box position="relative" paddingY="30px">
        <Divider />
        <AbsoluteCenter bg="#000" px="4">
          OR
        </AbsoluteCenter>
      </Box>
    </>
  );
};

export default QuickLoginForm;
