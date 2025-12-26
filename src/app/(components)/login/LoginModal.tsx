import {
  Alert,
  AlertIcon,
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Reset from "./Reset";
import { useRecoilState } from "recoil";
import { loginState } from "@/app/store";

function LoginModal({
  isOpen,
  onClose,
  callbackUrl,
}: {
  isOpen: boolean;
  onClose: () => void;
  callbackUrl: string;
}) {
  const [loginInfo, setLoginInfo] = useRecoilState(loginState);
  const {
    isOpen: isAlertOpen,
    onClose: onAlertClose,
    onOpen: onAlertOpen,
  } = useDisclosure();

  useEffect(() => {
    if (isOpen) {
      setLoginInfo((state) => {
        return {
          ...state,
          callbackUrl,
          email: "",
          active: "login",
        };
      });
    }
  }, [isOpen]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bg="#000" rounded={"10px"}>
          <ModalCloseButton />
          <ModalBody margin={"auto"} py={"60px"} minH={"633px"}>
            <Box w="309px" position={"relative"}>
              {isAlertOpen && (
                <Alert
                  status={loginInfo.alertInfo.status}
                  position={"absolute"}
                  top={"-40px"}
                  color={"#000"}
                  opacity={1}
                >
                  <AlertIcon />
                  {loginInfo.alertInfo.message}
                </Alert>
              )}
              {loginInfo.active === "login" && (
                <LogIn
                  onModalClose={onClose}
                  onAlertClose={onAlertClose}
                  onAlertOpen={onAlertOpen}
                />
              )}
              {loginInfo.active === "signup" && (
                <SignUp
                  onModalClose={onClose}
                  onAlertClose={onAlertClose}
                  onAlertOpen={onAlertOpen}
                />
              )}
              {loginInfo.active === "reset" && (
                <Reset onAlertClose={onAlertClose} onAlertOpen={onAlertOpen} />
              )}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default LoginModal;
