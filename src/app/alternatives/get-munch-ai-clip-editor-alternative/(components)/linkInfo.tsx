import { Center, HStack, Link, Text } from "@chakra-ui/react";
import RightArrow from "./icons/rightArrow";
import { type LinkInfo } from "@/types/make/ai-video-generator";

const textStyles = {
  color: "BDBDBD",
  fontWeight: "450",
  fontSize: "14px",
};

export default function LinkInfo({ lv2, lv3 }: LinkInfo) {
  return (
    <Center display={{ base: "none", xl: "block" }}>
      <HStack w="1172px" mt="29px" spacing="23px">
        <Link
          href="/"
          _hover={{
            borderRadius: "5px",
            textDecoration: "none",
            backgroundColor: "gray.600",
          }}
        >
          <Text {...textStyles}>Home</Text>
        </Link>
        <RightArrow />

        <Text {...textStyles}>{lv2}</Text>
        <RightArrow />

        <Text {...textStyles}>{lv3}</Text>
      </HStack>
    </Center>
  );
}
