"use client";

import {
  Box,
  Flex,
  Text,
  Image,
  useClipboard,
  useToast,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import Cookies from "js-cookie";
import { trackGAEvent, trackUserId } from "@/utils/ga";
import { useRouter, usePathname } from "next/navigation";
import { prefixed } from "@/utils/media";

function UserInfoContent({ isHideName }: { isHideName?: boolean }) {
  const { data } = useSession();
  const { onCopy, value, hasCopied } = useClipboard(data?.id || "");
  const toast = useToast();
  const router = useRouter();
  const pathname = usePathname();

  const handleCopy = () => {
    onCopy();
  };

  const handleLogout = () => {
    trackGAEvent("global", "logout", "");

    Cookies.remove("*");
    signOut({ redirect: false });
  };

  useEffect(() => {
    hasCopied &&
      value &&
      toast({
        position: "top",
        status: "success",
        title: "Successfully copied uid",
        duration: 1500,
      });
  }, [hasCopied, toast, value]);

  useEffect(() => {
    if (data?.id) {
      trackUserId(data.id);
    }
  }, [data]);

  return (
    <Box>
      <Popover
        placement="bottom-end"
        trigger="hover"
        {...(!data?.id && { isOpen: false })}
      >
        <PopoverTrigger>
          <Flex
            h="50px"
            alignItems="center"
            cursor="pointer"
            onDoubleClick={() => handleCopy()}
            onClick={() => {
              !data && router.push(`/account/signin?callbackUrl=${pathname}`);
            }}
          >
            <Image
              src={data?.user?.image || prefixed("/login-icon/avatar.jpeg")}
              alt="avatar"
              width="34px"
              height="34px"
              borderRadius="50%"
            />
            {!isHideName && (
              <Flex
                flexDirection="column"
                fontSize="12px"
                justifyContent="center"
                ml="10px"
              >
                {/* <Text>{data?.user?.name}</Text> */}
                <Text color="#B5B5B5">{data?.user?.email}</Text>
                {/* <Text color='#AFAFAF'>Beta</Text> */}
              </Flex>
            )}
          </Flex>
        </PopoverTrigger>
        <PopoverContent w="auto" bg="transparent" border="none">
          <PopoverBody p="0">
            <Box
              p="24px 16px 3px 16px"
              bg="#000"
              borderRadius="6px"
              display="inline-flex"
              flexDirection="column"
            >
              <Flex fontSize="12px" mb="27px" alignItems="center">
                <Image
                  width="50px"
                  height="50px"
                  mr="12px"
                  borderRadius="50%"
                  src={data?.user?.image || prefixed("/login-icon/avatar.jpeg")}
                  alt="avatar"
                />
                <Flex direction="column" justifyContent="center" gap="5px">
                  <Text>{data?.user?.name}</Text>
                  <Text color="#B5B5B5">{data?.user?.email}</Text>
                </Flex>
              </Flex>
              <Flex
                alignItems="center"
                fontSize="14px"
                ml="9.5px"
                mb="23px"
                cursor="pointer"
                onClick={() => {
                  handleLogout();
                }}
              >
                <Image
                  alt="setting"
                  src={prefixed("/login-icon/logout.svg")}
                  w="24px"
                  h="24px"
                />
                <Text ml="11px">Log out</Text>
              </Flex>
            </Box>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
}

export default UserInfoContent;
