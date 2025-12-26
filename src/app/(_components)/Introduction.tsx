import { type NotionPage } from "@/types/notion";
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

export default function Introduction({
  dataSource,
}: {
  dataSource: NotionPage[];
}) {
  const mediaUrl = dataSource[0]?.media[0];
  const isVideo = mediaUrl && /\.(mp4|webm|ogg)$/i.test(mediaUrl);
  return (
    <>
      {dataSource.length > 0 && (
        <Center>
          <Stack
            w={{ base: "90%", xl: "1280px" }}
            mt={dataSource[0]?.media.length === 0 ? "120px" : "92px"}
            textAlign={dataSource[0]?.media.length === 0 ? "center" : undefined}
            justifyContent="center"
            alignItems="center"
          >
            {dataSource.map((data) => {
              if (data?.title === "") return;
              return (
                <Heading
                  key={data.pageId}
                  as="h1"
                  w={dataSource[0]?.media.length === 0 ? "90%" : "100%"}
                  fontSize={{ base: "1.75rem", xl: "55px" }}
                  fontWeight="600"
                  lineHeight={{ base: undefined, xl: "60px" }}
                  alignSelf={
                    dataSource[0]?.media.length === 0 ? "center" : "flex-start"
                  }
                >
                  {data?.title}
                </Heading>
              );
            })}

            {dataSource[0]?.media.length ? (
              <Flex
                w={{ base: undefined, xl: "100%" }}
                gap={{ base: "20px", xl: "100px" }}
                flexDirection={{ base: "column", xl: "row" }}
                mt="30px"
              >
                <Stack flex={1} w={{ base: "100%", xl: undefined }}>
                  {dataSource.map((data) => {
                    if (data?.subTitle.length === 0) return;
                    return (
                      <Heading
                        key={data.pageId}
                        as="h2"
                        w={{ base: "100%", xl: undefined }}
                        lineHeight="1.75rem"
                        marginTop="21px"
                        color="#BDBDBD"
                        fontSize={{ base: "1rem", xl: "1.5rem" }}
                        fontWeight="400"
                        mb="48px"
                        wordBreak="break-all"
                      >
                        {data?.subTitle[0]?.plain_text}
                      </Heading>
                    );
                  })}

                  <Flex
                    w="100%"
                    // justifyContent={index === 0 ? "flex-start" : "center"}
                  >
                    <Link
                      isExternal
                      href={dataSource[0]?.text[0]?.href ?? undefined}
                    >
                      <Button
                        w={{ base: "100%", xl: "266px" }}
                        h={{ base: "1.5rem", xl: "120px" }}
                        color="#fff"
                        padding="24px 15px 24px 24px"
                        borderRadius="9999px"
                        paddingX="40px"
                        bg="linear-gradient(135deg, hsl(270, 50%, 20%), hsl(255, 50%, 40%), hsl(245, 88%, 60%), hsl(240, 50%, 20%))"
                        _hover={{
                          bg: "linear-gradient(135deg, hsl(270, 50%, 10%), hsl(255, 50%, 30%), hsl(245, 88%, 50%), hsl(240, 50%, 10%))",
                        }}
                      >
                        <Text
                          fontWeight="450"
                          fontSize={{ base: ".75rem", xl: "16px" }}
                          whiteSpace="normal"
                          mr="16px"
                        >
                          {dataSource[0]?.text[0]?.plain_text}
                        </Text>
                      </Button>
                    </Link>
                  </Flex>
                </Stack>

                <Box
                  as="figure"
                  // w={{
                  //   base: "100%",
                  //   xl: category === "alternatives" ? "656px" : "840px",
                  // }}
                >
                  {isVideo ? (
                    <video
                      width="840px"
                      style={{
                        borderRadius: "20px",
                      }}
                      controls
                    >
                      <source src={mediaUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <Image
                      w="840px"
                      flex={3}
                      src={mediaUrl}
                      alt="topview-meida"
                      borderRadius="20px"
                      boxShadow="20px 20px 20px hsla(0, 0%, 100%, 0.4)"
                    />
                  )}
                </Box>
              </Flex>
            ) : (
              <Stack
                w={{ base: undefined, xl: "100%" }}
                gap={{ base: "20px", xl: "50px" }}
                mt="30px"
                alignItems="center"
              >
                <Center>
                  {dataSource.map((data) => {
                    if (data?.subTitle.length === 0) return;
                    return (
                      <Heading
                        key={data.pageId}
                        as="h2"
                        w={{ base: "55%", xl: undefined }}
                        lineHeight="1.75rem"
                        marginTop="21px"
                        color="#BDBDBD"
                        fontSize={{ base: "1rem", xl: "1.5rem" }}
                        fontWeight="400"
                        mb="48px"
                        wordBreak="break-all"
                      >
                        {data?.subTitle[0]?.plain_text}
                      </Heading>
                    );
                  })}
                </Center>
                <Link
                  isExternal
                  href={dataSource[0]?.text[0]?.href ?? undefined}
                >
                  <Button
                    w="266px"
                    h="100px"
                    color="#fff"
                    paddingX="40px"
                    borderRadius="9999px"
                    bg="linear-gradient(135deg, hsl(270, 50%, 20%), hsl(255, 50%, 40%), hsl(245, 88%, 60%), hsl(240, 50%, 20%))"
                    _hover={{
                      bg: "linear-gradient(135deg, hsl(270, 50%, 10%), hsl(255, 50%, 30%), hsl(245, 88%, 50%), hsl(240, 50%, 10%))",
                    }}
                    mb="30px"
                  >
                    <Text
                      fontWeight="450"
                      fontSize={{ base: ".75rem", xl: "16px" }}
                      whiteSpace="normal"
                      mr="16px"
                    >
                      {dataSource[0]?.text[0]?.plain_text}
                    </Text>
                  </Button>
                </Link>
              </Stack>
            )}
          </Stack>
        </Center>
      )}
    </>
  );
}
