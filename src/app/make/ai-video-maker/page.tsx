import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import LinkInfo from "@/app/alternatives/get-munch-ai-clip-editor-alternative/(components)/linkInfo";
import Body from "@/app/alternatives/get-munch-ai-clip-editor-alternative/(components)/body/body";
import IntroductionCard from "@/components/IntroductionCard";
import { prefixed } from "@/utils/media";
import Video from "@/app/alternatives/get-munch-ai-clip-editor-alternative/(components)/video/video";
import LargeCardList from "@/app/alternatives/get-munch-ai-clip-editor-alternative/(components)/card/largeCardList";
import { type Metadata } from "next";
import { cardList, quesAIVideoMaker } from "./config";
import LinkHome from "@/app/alternatives/get-munch-ai-clip-editor-alternative/(components)/button/linkHome";
import QuestionList from "@/app/(components)/question/questionList";

export const metadata: Metadata = {
  title: "TopView AI Video maker: AI makes life easier.",
  description:
    "TopView AI Video maker transforms text into engaging videos for platforms like TikTok and YouTube. It automates scriptwriting, clip selection, voiceovers, and more, simplifying video production. Its editing suite ensures polished content, making it easy for creators to produce viral-ready videos quickly, turning ideas into reality in minutes.",
  keywords:
    "AI video maker, AI video maker, online AI video maker, free AI video maker",
};
export default function page() {
  return (
    <Center h="100%" bg="#101010">
      <Box w="90%" h="100%">
        {/* 1.导航索引信息 */}
        <Center>
          <LinkInfo lv2="Make" lv3="AI Video maker" />
        </Center>
        {/* 2.文本 + 图片 */}
        <Body
          title="TopView AI Video Maker: AI makes life easier."
          subTitle="TopView AI Video Maker revolutionizes video creation for SMB sellers on TikTok, Shopify, and Amazon. This platform simplifies turning your materials or shop links into compelling product videos. Upload footage, and let the AI craft scripts, select clips, add voiceovers and music, ensuring your product shines. Its intuitive editing suite lets sellers tailor content, making standout social media videos easy. TopView transforms product highlights into engaging videos, boosting sales."
          imgSrc="/make/make_body.webp"
          imgAlt="topview_make_body"
          btnText="Make A Video Now"
        />
        {/* 3.表格 */}
        <Center mt="132px" flexDirection="column">
          <Center
            flexDirection="column"
            w="80%"
            justifyContent="center"
            alignItems="center"
          >
            <Heading as="h2" fontSize={{ base: "x-large", xl: "xx-large" }}>
              Three steps to make a video by TopView AI video maker
            </Heading>
            <Flex
              gap="31px"
              mt="50px"
              flexDirection={{ base: "column", xl: "row" }}
            >
              {cardList.map((card) => (
                <IntroductionCard
                  key={crypto.randomUUID()}
                  head={card.head}
                  bodyBold={card.bodyBold}
                  body={card.body}
                />
              ))}
            </Flex>
          </Center>
          <Image
            src={`${prefixed("/make/m2v.webp")}`}
            alt="make_mv2"
            borderRadius="20px"
            mt="50px"
          />
          <Box mt="60px">
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
                    Try AI Video Maker Now
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
          </Box>
        </Center>
        {/* 4.CardList */}
        {/* <SmallCardList /> */}
        {/* 5.视频 */}
        <Video />
        {/* 6.大卡片List */}
        <LargeCardList />
        {/* <LabelContainer /> */}
        <QuestionList mt="132px" questionList={quesAIVideoMaker} />
        {/* <MoreFromTopView /> */}
      </Box>
    </Center>
  );
}
