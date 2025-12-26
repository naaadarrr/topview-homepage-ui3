import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { prefixed } from "@/utils/media";
import LinkHome from "../button/linkHome";
import { type BodyProps } from "@/types/make/ai-video-generator";

export default function Body({
  category,
  title,
  subTitle,
  imgSrc,
  imgAlt,
  btnText,
}: BodyProps) {
  return (
    <>
      {category === "alternatives" ? (
        <Center>
          <Flex
            w={{ base: "100%", xl: "1280px" }}
            mt="92px"
            flexDirection={{ base: "column", xl: "row" }}
            justifyContent="center"
            alignItems="center"
          >
            {/* 左边-文字标题 */}
            <Stack
              w={{ base: undefined, xl: "700px" }}
              mr={{ base: undefined, xl: "50px" }}
            >
              <Heading
                as="h1"
                fontSize="60px"
                fontWeight="450"
                lineHeight="60px"
              >
                {title}
              </Heading>
              <Heading
                as="h2"
                marginTop="21px"
                color="#BDBDBD"
                fontSize="18px"
                fontWeight="400"
                mb="29px"
                wordBreak="break-all"
              >
                {subTitle}
              </Heading>
              <Flex
                w="100%"
                // justifyContent={index === 0 ? "flex-start" : "center"}
              >
                <Link isExternal href="/gen/m2v">
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
                    <Text
                      fontWeight="450"
                      fontSize="16px"
                      whiteSpace="normal"
                      mr="16px"
                    >
                      {btnText}
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
            </Stack>
            {/* 右边图片 */}
            <figure>
              <Image
                mt={{ base: "60px", xl: undefined }}
                src={prefixed(imgSrc)}
                alt={imgAlt}
                borderRadius="20px"
                boxShadow="20px 20px 20px hsla(0, 0%, 100%, 0.4)"
              />
            </figure>
          </Flex>
        </Center>
      ) : (
        <Center>
          <Stack
            w={{ base: "100%", xl: "1280px" }}
            mt="92px"
            justifyContent="center"
            alignItems="center"
          >
            <Heading
              as="h1"
              fontSize={{ base: "1.75rem", xl: "60px" }}
              fontWeight="450"
              lineHeight={{ base: undefined, xl: "60px" }}
            >
              {title}
            </Heading>
            <Flex
              w={{ base: undefined, xl: "100%" }}
              mr={{ base: undefined, xl: "50px" }}
              gap={{ base: "20px", xl: "100px" }}
              flexDirection={{ base: "column", xl: "row" }}
              mt="30px"
            >
              <Stack flex={1} w={{ base: "100%", xl: undefined }}>
                <Heading
                  as="h2"
                  w={{ base: "100%", xl: undefined }}
                  lineHeight="1.6"
                  marginTop="21px"
                  color="#BDBDBD"
                  fontSize={{ base: "1rem", xl: "18px" }}
                  fontWeight="400"
                  mb="29px"
                  wordBreak="break-all"
                >
                  {subTitle}
                </Heading>
                <Flex
                  w="100%"
                  // justifyContent={index === 0 ? "flex-start" : "center"}
                >
                  <Link isExternal href="/gen/m2v">
                    <Button
                      w={{ base: "100%", xl: "340px" }}
                      h={{ base: "1.5rem", xl: "64px" }}
                      color="#fff"
                      padding="24px 15px 24px 24px"
                      borderRadius="12px"
                      bg="hsl(245, 88%, 60%)"
                      _hover={{
                        bg: "hsl(245, 88%, 80%)",
                      }}
                    >
                      <Text
                        fontWeight="450"
                        fontSize={{ base: ".75rem", xl: "16px" }}
                        whiteSpace="normal"
                        mr="16px"
                      >
                        {btnText}
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
              </Stack>

              <Box
                as="figure"
                w={{
                  base: "100%",
                  xl: category === "alternatives" ? "656px" : "840px",
                }}
              >
                <Image
                  flex={3}
                  src={prefixed(imgSrc)}
                  alt={imgAlt}
                  borderRadius="20px"
                  boxShadow="20px 20px 20px hsla(0, 0%, 100%, 0.4)"
                />
              </Box>
            </Flex>
          </Stack>
        </Center>
      )}
    </>
  );
}
