import { type NotionPage } from "@/types/notion";
import {
  Card,
  Box,
  Flex,
  Text,
  Image,
  Heading,
  Center,
  Stack,
} from "@chakra-ui/react";

export default function RightImgLeftText({
  dataSource,
}: {
  dataSource: NotionPage[];
}) {
  return (
    <>
      {dataSource.length > 0 && (
        <Center>
          <Card
            p={4}
            w="90%"
            maxW="1172px"
            h={{ base: "800px", xl: "480px" }}
            borderRadius="30px"
            bg="#101010"
            mt="50px"
            overflow="hidden"
            padding={0}
          >
            <Flex
              align="center"
              h="100%"
              flexDirection={{ base: "column", xl: "row" }}
            >
              <Stack
                flex="1"
                justifyContent="center"
                padding={{ base: "10px", xl: undefined }}
                pl={{ base: "undefined", xl: "20px" }}
              >
                <Heading
                  as="h3"
                  color="#fff"
                  fontSize="2rem"
                  mt={{ base: "1rem", xl: undefined }}
                >
                  {dataSource[0]?.title}
                </Heading>
                {dataSource.map((data) => (
                  <Text
                    mt={2}
                    key={data.pageId}
                    color="#fff"
                    fontSize="18px"
                    wordBreak="break-all"
                  >
                    {data.text.map((t) => t.plain_text).join(" ")}
                  </Text>
                ))}
              </Stack>
              <Image
                w={{ base: "100%", xl: "550px" }}
                h={{ base: "206", xl: "412" }}
                borderRadius={{
                  base: "20px 20px 0px 0px",
                  xl: "0px 20px 20px 0px",
                }}
                transform={{ base: undefined, xl: "translateY(40px)" }}
                src={dataSource[0]?.media[0]}
                alt="media"
                objectFit="cover"
                ml={{ base: "0", xl: "72px" }}
              />
            </Flex>
          </Card>
        </Center>
      )}
    </>
  );
}
