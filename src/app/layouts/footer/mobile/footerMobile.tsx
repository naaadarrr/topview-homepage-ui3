import { Box, Center, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import TopView from "../../../(components)/icons/nav/topView";
// import Twitter from "../../../components/icons/footer/twitter";
// import Tiktok from "../../../components/icons/footer/tiktok";
// import Youtube from "../../../components/icons/footer/youtube";
// import Email from "../../../components/icons/footer/email";

const headingStyles = {
  fontSize: "1rem",
  fontWeight: "450",
  fontFamily: "Eina03-SemiBold",
  lineHeight: "1.36rem",
  //   marginBottom: "5px",
};
const textStyles = {
  color: "#D4D4D4",
  fontFamily: "Eina03-Regular",
  fontSize: "14px",
  fontWeight: "400",
};
export default function FooterMobile() {
  return (
    <>
      <Center h="100%" pt="5rem">
        <Stack w="90%" h="100%">
          {/* footer-上层 */}
          <Stack>
            {/* footer-上层-左侧 */}
            <Box w="146px" h="26px">
              <HStack>
                <TopView />
                <Text
                  w="96px"
                  h="26px"
                  fontFamily="Eina03-Bold"
                  fontSize="19.2px"
                  fontWeight="600"
                  marginLeft="12px"
                  letterSpacing="0.9px"
                  textAlign="center"
                >
                  TOPVIEW
                </Text>
              </HStack>
            </Box>
            {/* <HStack spacing="11px" mt="1rem">
              <Box
                w="36px"
                h="36px"
                borderRadius="50%"
                bg="#191919"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Twitter />
              </Box>
              <Box
                w="36px"
                h="36px"
                borderRadius="50%"
                bg="#191919"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Tiktok />
              </Box>
              <Box
                w="36px"
                h="36px"
                borderRadius="50%"
                bg="#191919"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Youtube />
              </Box>
              <Box
                w="36px"
                h="36px"
                borderRadius="50%"
                bg="#191919"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Email />
              </Box>
            </HStack> */}

            {/* footer-上层-右侧 */}
            <Box display="none">
              <Stack spacing="0">
                <Stack spacing="22px" h="100%" mt="3rem">
                  <Heading {...headingStyles}>Video Editor</Heading>
                  <Text {...textStyles}>Add Image to Video</Text>
                  <Text {...textStyles}>Add Image to Video</Text>
                  <Text {...textStyles}>Add Image to Video</Text>
                  <Text {...textStyles}>Add Image to Video</Text>
                  <Text {...textStyles}>Add Image to Video</Text>
                </Stack>
                <Stack spacing="22px" h="100%" mt="3rem">
                  <Heading {...headingStyles}>Video Editor</Heading>
                  <Text {...textStyles}>Add Image to Video</Text>
                  <Text {...textStyles}>Add Image to Video</Text>
                  <Text {...textStyles}>Add Image to Video</Text>
                  <Text {...textStyles}>Add Image to Video</Text>
                  <Text {...textStyles}>Add Image to Video</Text>
                </Stack>
                <Stack spacing="22px" h="100%" mt="3rem">
                  <Heading {...headingStyles}>Video Editor</Heading>
                  <Text {...textStyles}>Add Image to Video</Text>
                  <Text {...textStyles}>Add Image to Video</Text>
                  <Text {...textStyles}>Add Image to Video</Text>
                  <Text {...textStyles}>Add Image to Video</Text>
                  <Text {...textStyles}>Add Image to Video</Text>
                </Stack>
                <Stack spacing="22px" h="100%" mt="3rem">
                  <Heading {...headingStyles}>Video Editor</Heading>
                  <Text {...textStyles}>Add Image to Video</Text>
                  <Text {...textStyles}>Add Image to Video</Text>
                  <Text {...textStyles}>Add Image to Video</Text>
                  <Text {...textStyles}>Add Image to Video</Text>
                  <Text {...textStyles}>Add Image to Video</Text>
                </Stack>
                <Stack spacing="22px" h="100%" mt="3rem">
                  <Heading {...headingStyles}>Video Editor</Heading>
                  <Text {...textStyles}>Add Image to Video</Text>
                  <Text {...textStyles}>Add Image to Video</Text>
                  <Text {...textStyles}>Add Image to Video</Text>
                  <Text {...textStyles}>Add Image to Video</Text>
                  <Text {...textStyles}>Add Image to Video</Text>
                </Stack>
              </Stack>
            </Box>
          </Stack>
          {/* footer-下层 */}
          <Text
            mt="2rem"
            mb="1.5rem"
            fontFamily="Eina01-Regular"
            fontSize="0.75rem"
            lineHeight="1.125rem"
            fontWeight="400"
          >
            © <time dateTime="2024">2024</time> TOPVIEW PTE. LTD.(202403218C)
            20 Collyer Quay #20-01 Singapore 049319
          </Text>
          <Text
            mt="2rem"
            mb="1.5rem"
            fontFamily="Eina01-Regular"
            fontSize="0.75rem"
            lineHeight="1.125rem"
            fontWeight="400"
          >
            <Link href="/privacy-policy">Privacy Policy</Link>
          </Text>
        </Stack>
      </Center>
    </>
  );
}
