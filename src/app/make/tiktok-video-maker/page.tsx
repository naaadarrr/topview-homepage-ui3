import QuestionList from "@/app/(components)/question/questionList";
import Body from "@/app/alternatives/get-munch-ai-clip-editor-alternative/(components)/body/body";
import LargeCardList from "@/app/alternatives/get-munch-ai-clip-editor-alternative/(components)/card/largeCardList";
import Video from "@/app/alternatives/get-munch-ai-clip-editor-alternative/(components)/video/video";
import { prefixed } from "@/utils/media";
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
import { type Metadata } from "next";
import LinkInfo from "@/app/alternatives/get-munch-ai-clip-editor-alternative/(components)/linkInfo";
import { cardList, quesTiktokVideoMaker } from "./config";
import IntroductionCard from "@/components/IntroductionCard";
import LinkHome from "@/app/alternatives/get-munch-ai-clip-editor-alternative/(components)/button/linkHome";

export const metadata: Metadata = {
  title: "Let AI help you make a Tiktok video",
  description:
    "TopView is a TikTok-focused video maker, revolutionizes content creation with AI-powered editing. In just 2 minutes, transform ideas into viral TikTok videos. This online editor streamlines the process, offering AI-driven scriptwriting, clip editing, and voiceovers, tailored for TikTok, Reels, YouTube Shorts, and Twitter, making video creation effortless and fast.",
  keywords:
    "AI video Generator, AI video maker, online AI video Generator, free AI video Generator",
};
export default function page() {
  return (
    <Center h="100%" bg="#101010">
      <Box w="90%" h="100%">
        {/* 1.导航索引信息 */}
        <Center>
          <LinkInfo lv2="Make" lv3="Tiktok video maker" />
        </Center>
        {/* 2.文本 + 图片 */}
        <Body
          title="Let AI help you make a Tiktok video"
          subTitle="TopView AI Video Generator is a revolutionary platform designed for TikTok creators, enabling the swift transformation of text into viral videos. It automates scriptwriting, clip selection, voiceovers, and music, streamlining production. With its intuitive editing suite, TopView ensures each video is polished, helping creators quickly craft captivating content for TikTok virality."
          imgSrc="/make/make_body.webp"
          imgAlt="topview_make_body"
          btnText="Make A Tiktok Video Now"
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
                    Try Tiktok Video Maker
                  </Text>
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
        <QuestionList mt="132px" questionList={quesTiktokVideoMaker} />
        {/* <MoreFromTopView /> */}
      </Box>
    </Center>
  );
}
