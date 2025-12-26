import { type NotionPage } from "@/types/notion";
import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

const ThreeColumnCard = ({ dataSource }: { dataSource: NotionPage[] }) => {
  const titleData = dataSource.find((data) => data.title);
  const filteredData = dataSource.filter(
    (data) =>
      !(data.subTitle && data.title && (!data.text || data.text.length === 0)),
  );

  return (
    <>
      {dataSource.length > 0 && (
        <Center flexDirection="column" mt="124px">
          <Stack w={{ base: "90%", xl: "1172px" }}>
            {dataSource.map((data) => {
              if (data?.title === "") return;
              return (
                <Heading
                  as="h2"
                  textAlign="center"
                  key={data.pageId}
                  fontSize={{ base: "2.25rem", xl: "3rem" }}
                >
                  {data?.title}
                </Heading>
              );
            })}
            {dataSource.length > 3 && titleData && (
              <Center>
                <Heading
                  as="h3"
                  mt={4}
                  w={{ base: "60%", xl: "800px" }}
                  textAlign="center"
                  fontWeight="550"
                  fontSize="22px"
                >
                  {titleData?.subTitle[0]?.plain_text}
                </Heading>
              </Center>
            )}
            <SimpleGrid
              columns={{ base: 1, xl: 3 }}
              spacing={10}
              mb={10}
              mt={5}
            >
              {filteredData.map((card) => (
                <Box
                  key={card.pageId}
                  p={5}
                  shadow="md"
                  borderWidth="1px"
                  borderRadius="lg"
                >
                  <Heading as="h3" mb={4} fontSize="1.7rem" display="flex">
                    {card.subTitle?.map((t, subTitleIndex) => {
                      if (t.plain_text.startsWith("<svg")) {
                        return (
                          <Box
                            as="span"
                            key={subTitleIndex}
                            mr={2}
                            verticalAlign="middle"
                            dangerouslySetInnerHTML={{
                              __html: t.plain_text.replace(/'/g, ""),
                            }}
                            display="inline"
                          ></Box>
                        );
                      } else {
                        return (
                          <Box
                            key={subTitleIndex}
                            as="span"
                            mb={4}
                            mr={2}
                            display="inline"
                          >
                            {t.plain_text}
                          </Box>
                        );
                      }
                    })}
                  </Heading>
                  {card.text?.map((t, textIndex) => (
                    <Text key={textIndex} fontSize="18px" lineHeight="26px">
                      {t.plain_text}
                    </Text>
                  ))}
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
        </Center>
      )}
    </>
  );
};

export default ThreeColumnCard;
