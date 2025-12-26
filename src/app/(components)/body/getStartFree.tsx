"use client";

import { Button, Text, useDisclosure } from "@chakra-ui/react";
import { trackGAEvent } from "@/utils/ga";
import LoginModal from "@/app/(components)/login/LoginModal";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function GetStartFree({ getFree }: { getFree: string }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data } = useSession();
  const router = useRouter();
  return (
    <>
      <Button
        w="189px"
        h="56px"
        mt={{ base: "1rem", xl: "0px" }}
        borderRadius="100px"
        padding="20px 24px"
        border="1px solid hsla(245, 88%, 60%, 1)"
        bg="hsla(245, 88%, 60%, 0.8)"
        _hover={{ bg: "hsla(245, 88%, 80%, 0.8)" }}
        color="#fff"
        zIndex="1"
        onClick={(e) => {
          e.stopPropagation();
          trackGAEvent("offical.home", "getStartFreeBtn.middle.click", "");
          if (data) {
            router.push("/gen/m2v");
          } else {
            onOpen();
          }
        }}
      >
        <Text fontWeight="500" flex={1} lineHeight="19.36px" fontSize="16px">
          {getFree}
        </Text>
        <NextArrow />
      </Button>
      <LoginModal isOpen={isOpen} onClose={onClose} callbackUrl={"/gen/m2v"} />
    </>
  );
}

function NextArrow() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.00375 13.0001L4.00375 11.0001L16.0037 11.0001L10.5037 5.50008L11.9237 4.08008L19.8437 12.0001L11.9237 19.9201L10.5037 18.5001L16.0037 13.0001L4.00375 13.0001Z"
        fill="white"
      />
    </svg>
  );
}
