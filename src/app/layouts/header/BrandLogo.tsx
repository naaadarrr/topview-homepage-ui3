"use client";

import { prefixedCsr } from "@/app/config";
import { Box, HStack, Image } from "@chakra-ui/react";

export default function BrandLogo() {
  return (
    <Box w="146px" h="26px">
      <HStack>
        <Image
          src={`${prefixedCsr}/tools/topview_logo.png`}
          alt="Topview AI logo"
        />
      </HStack>
    </Box>
  );
}
