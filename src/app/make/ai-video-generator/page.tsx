import CartdItem from "@/app/(components)/card/cartdItem";
import QuestionList from "@/app/(components)/question/questionList";
import FeatureComparisonTable from "@/app/alternatives/get-munch-ai-clip-editor-alternative/(components)/FeatureComparisonTable";
import Body from "@/app/alternatives/get-munch-ai-clip-editor-alternative/(components)/body/body";
import LargeCardList from "@/app/alternatives/get-munch-ai-clip-editor-alternative/(components)/card/largeCardList";
import LinkInfo from "@/app/alternatives/get-munch-ai-clip-editor-alternative/(components)/linkInfo";
import Video from "@/app/alternatives/get-munch-ai-clip-editor-alternative/(components)/video/video";
import IntroductionCard from "@/components/IntroductionCard";
import { prefixed } from "@/utils/media";
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
import { type Metadata } from "next";
import { cardList, quesAIVideoGenerator } from "./config";
import LinkHome from "@/app/alternatives/get-munch-ai-clip-editor-alternative/(components)/button/linkHome";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "TopView AI Video Generator: AI makes life easier.",
  description:
    "TopView AI Video Generator transforms text into engaging videos for platforms like TikTok and YouTube. It automates scriptwriting, clip selection, voiceovers, and more, simplifying video production. Its editing suite ensures polished content, making it easy for creators to produce viral-ready videos quickly, turning ideas into reality in minutes.",
  keywords:
    "AI video Generator, AI video maker, online AI video Generator, free AI video Generator",
};

export default function page() {
  return (
    <Center h="100%" bg="#101010">
      <Box w="90%" h="100%">
        {/* 1.导航索引信息 */}
        <Center>
          <LinkInfo lv2="Make" lv3="AI Video Generator" />
        </Center>
        {/* 2.文本 + 图片 */}
        <Body
          category="make/ai-video-generator"
          title="TopView AI Video Generator: AI makes life easier."
          subTitle="TopView AI Video Generator is an innovative tool that effortlessly converts your product links or materials into captivating videos for platforms like TikTok, YouTube, and Instagram Reels. Users upload their footage, and the AI oversees scriptwriting, selects clips, adds voiceovers, music, and transitions, streamlining the video production process. The platform includes an intuitive editing suite for final adjustments, ensuring videos are polished and ready for audiences. TopView simplifies the creation of viral content, enabling creators to efficiently bring their ideas to life and engage with their audience in just minutes."
          imgSrc="/make/make_body.webp"
          imgAlt="topview_make_body"
          btnText="Make A Video Now"
        />
        {/* {isMobile ? <BodyMobile /> : <Body />} */}
        {/* 3.表格 */}
        <Center mt="132px" flexDirection="column">
          <Center
            flexDirection="column"
            w="80%"
            justifyContent="center"
            alignItems="center"
          >
            <Heading as="h2">
              Three steps to make a video by TopView AI video Generator
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
                  bodyBlue={card.bodyBlue}
                  bodyRest={card.bodyRest}
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
                    Try AI Video Generator Now
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
        <QuestionList mt="132px" questionList={quesAIVideoGenerator} />
        {/* <MoreFromTopView /> */}
      </Box>
    </Center>
  );
}
