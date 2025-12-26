"use client";

import { type LinkHome } from "@/types/make/ai-video-generator";
import { Button, Flex, Link, Text } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import React from "react";
// import UploadCloud from "../icons/uploadCloud";

export default function LinkHome({ index, btnLink }: LinkHome) {
  const pathname = usePathname();
  console.log("pathname", pathname);
  const btnMap = new Map([
    ["/make/ai-video-maker", "Try AI Video Maker For Free"],
    ["/make/ai-video-generator", "Try AI Video Generator For Free"],
    ["/make/tiktok-video-maker", "Try TikTok Video Maker For Free"],
  ]);
  // 根据index的值计算justifyContent的设置
  return (
    <Flex w="100%" justifyContent={index === 0 ? "flex-start" : "center"}>
      <Link isExternal href={btnLink}>
        <Button
          w="340px"
          h="64px"
          color="#fff"
          padding="24px 15px 24px 24px"
          borderRadius="12px"
          bg="hsl(245, 88%, 60%)"
          _hover={{
            bg: "hsl(245, 88%, 80%)",
          }}
        >
          <Text fontWeight="450" fontSize="16px" whiteSpace="normal" mr="16px">
            {index === 0 && pathname === "/make/ai-video-maker"
              ? "Try AI Video Maker Now"
              : btnMap.get(pathname)}
          </Text>
          {/* <Box
         borderRadius="10px"
         w="40px"
         h="40px"
         bg="#fff"
         display="flex"
         justifyContent="center"
         alignItems="center"
       >
         <UploadCloud />
       </Box> */}
        </Button>
      </Link>
    </Flex>
  );
}
