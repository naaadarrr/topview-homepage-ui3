"use client";

import { prefixed } from "@/utils/media";
import { HStack, Image, useMediaQuery } from "@chakra-ui/react";

export default function DoubleFlyCardContainer() {
  const [isMobile] = useMediaQuery("(max-width: 1280px)");
  return (
    <HStack
      justifyContent="space-between"
      flexDirection={isMobile ? "column" : "row"}
      spacing="1rem"
    >
      <figure
        style={{ width: `${isMobile ? "100%" : "calc((100% - 1rem) / 2)"}` }}
      >
        <Image
          w="100%"
          src={prefixed("/add-to-video/double-fly-0.png")}
          alt="double-fly-0"
        />
      </figure>
      <figure
        style={{ width: `${isMobile ? "100%" : "calc((100% - 1rem) / 2)"}` }}
      >
        <Image
          w="100%"
          src={prefixed("/add-to-video/double-fly-1.png")}
          alt="double-fly-1"
        />
      </figure>
    </HStack>
  );
}
