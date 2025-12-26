// "use client";

import { Box, Center } from "@chakra-ui/react";
import React from "react";
import LinkInfo from "./(components)/linkInfo";
import Body from "./(components)/body/body";
// import BodyCard from "./(components)/card/bodyCard";
// import SmallCardList from "./(components)/card/smallCardList";
import Video from "./(components)/video/video";
import LargeCardList from "./(components)/card/largeCardList";
// import LabelContainer from "./(components)/labelContainer";
// import MoreFromTopView from "./(components)/moreFromTopView";
// import BodyMobile from "./(components)/body/mobile/bodyMobile";
// import BodyCardMobile from "./(components)/card/mobile/bodyCardMobile";
// import SmallCardListMobile from "./(components)/card/mobile/smallCardListMobile";
// import VideoMobile from "./(components)/video/mobile/videoMobile";
// import QuestionListMobile from "@/app/(components)/question/mobile/questionListMobile";
// import LargeCardListMobile from "./(components)/card/mobile/largeCardListMobile";
import { type Metadata } from "next";
import useSchemaScripts from "@/app/config";
import FeatureComparisonTable from "./(components)/FeatureComparisonTable";
import QuestionList from "./(components)/QuestionList";

export const metadata: Metadata = {
  title: "TopView AI Video Generator: AI makes life easier.",
  description:
    "TopView AI Video Generator transforms text into engaging videos for platforms like TikTok and YouTube. It automates scriptwriting, clip selection, voiceovers, and more, simplifying video production. Its editing suite ensures polished content, making it easy for creators to produce viral-ready videos quickly, turning ideas into reality in minutes.",
  keywords:
    "AI video Generator, AI video maker, online AI video Generator, free AI video Generator",
};

export default function Page() {
  const { schemaAlternatives } = useSchemaScripts();

  return (
    <>
      <script
        id="schema-code-alternative"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaAlternatives }}
        defer
      />
      <Center h="100%" bg="#101010">
        <Box w="90%" h="100%">
          {/* 1.导航索引信息 */}
          <Center>
            <LinkInfo
              lv2="Alternatives"
              lv3="Get Munch AI Clip Editor alternative"
            />
          </Center>
          {/* {isMobile ? <></> : <LinkInfo />} */}
          {/* 2.文本 + 图片 */}
          <Body
            category="alternatives"
            title="Get Munch AI Clip Editor alternative"
            subTitle="TopView.ai is an AI Video Editor similar to Munch AI for creating
            short-form videos. Let's compare these options and see which
            one is the best."
            imgSrc="/topview_logo_red.png"
            imgAlt="topview_logo_red"
            btnText="Try AI Generator now"
          />
          {/* 3.表格 */}
          <FeatureComparisonTable />

          {/* 4.CardList */}
          {/* <SmallCardList /> */}
          {/* 5.视频 */}
          <Video />
          {/* 6.大卡片List */}
          <LargeCardList />
          {/* 7.问题列表 */}
          {/* 8.标签Container */}
          {/* <LabelContainer /> */}
          <QuestionList />
          {/* 9.More from Topview */}
          {/* <MoreFromTopView /> */}
        </Box>
      </Center>
    </>
  );
}
