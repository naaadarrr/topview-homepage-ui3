import {
  Box,
  Card,
  Center,
  HStack,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { type NotionData } from "@/app/layouts/responsiveNavBar";
import { getPage } from "@/utils/notion/notion";

interface HeadingInfo {
  heading: string;
  subHeading: string;
}

interface CardInfo {
  id: number;
  title: string;
  titleSymbol: string;
  text: string;
}

export default async function SmallCardContainerWhite() {
  const page: NotionData = (await getPage({
    name: "smallCardContainerWhite",
  })) as NotionData;

  const [headingInfo, cardListInfo] = translateCardData(page);

  return (
    <Center mt={{ base: "4rem", xl: "104px" }}>
      <Stack w="100%" alignItems="center">
        <Heading
          w={{ base: "100%", xl: "620px" }}
          fontFamily="Eina03-SemiBold"
          fontSize={{ base: "1.75rem", xl: "48px" }}
          lineHeight={{ base: "2rem", xl: "50px" }}
          textAlign="center"
        >
          {headingInfo.heading}
        </Heading>
        <Text
          w={{ base: "22.75rem", xl: "620px" }}
          h={{ base: "4.75rem", xl: "48px" }}
          fontSize={{ base: "1rem", xl: "18px" }}
          fontWeight="300"
          textAlign="center"
          mt={{ base: ".75rem", xl: "16px" }}
          lineHeight={{ base: "1.17rem", xl: "23.54px" }}
        >
          {headingInfo.subHeading}
        </Text>
        <HStack
          // 手机端竖着排，PC端横着排
          flexDirection={{ base: "column", xl: "row" }}
          mt={{ base: "1.8rem", xl: "37px" }}
          spacing="31px"
          gap={{ base: "0.75rem", xl: "31px" }}
        >
          {cardListInfo.map((card) => {
            return (
              <Card
                key={card.id}
                w={{ base: "90vw", xl: "370px" }}
                h={{ base: "12.5rem", xl: "230px" }}
                borderRadius="24px"
                padding={{ base: "0px", xl: "41px 46px" }}
                bg="#fff"
                // 移动端时，垂直水平居中；PC时，自然展示
                display={{ base: "flex", xl: "block" }}
                justifyContent="center"
                alignItems="center"
              >
                <Heading
                  // w="160px"
                  h={{ base: "5.81rem", xl: "93px" }}
                  color="#6F63FF"
                  fontFamily="Eina"
                  fontWeight="400"
                  fontSize="90px"
                  letterSpacing="-4.5px"
                >
                  {card.title}
                  <Box
                    as="span"
                    fontSize={card.titleSymbol === "%" ? "60px" : "80px"}
                  >
                    {card.titleSymbol}
                  </Box>
                </Heading>

                <Text
                  marginTop="11px"
                  fontFamily="Eina01-Bold"
                  fontSize={{ base: "1.375rem", xl: "22px" }}
                  fontWeight="800"
                  color="#000"
                >
                  {card.text}
                </Text>
              </Card>
            );
          })}
        </HStack>
      </Stack>
    </Center>
  );
}

export function translateCardData(page: NotionData): [HeadingInfo, CardInfo[]] {
  const headingInfo = {
    heading: page.titleList[0]!,
    subHeading: page.textList[0]!,
  };
  const cardListInfo = [];
  for (let i = 1; i < page.textList.length; i++) {
    const [title, titleSymbol] = splitNumberAndSymbol(page.titleList[i]!);
    cardListInfo.push({
      id: i,
      title: title!,
      titleSymbol: titleSymbol!,
      text: page.textList[i]!,
    });
  }

  return [headingInfo, cardListInfo];
}

function splitNumberAndSymbol(str: string): string[] {
  const match = str.match(/(\d+(\.\d+)?)(.+)/)!;
  return [match[1] ?? "", match[3] ?? ""];
}
