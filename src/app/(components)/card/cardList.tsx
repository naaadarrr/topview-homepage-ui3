/* eslint-disable */

import { Stack } from "@chakra-ui/react";
import CartdItem from "./cartdItem";
import { getPage } from "@/utils/notion/notion";
import { type NotionData } from "@/app/layouts/responsiveNavBar";
import { type HeadingInfo } from "./smallCardContainerBlack";
import { prefixed } from "@/utils/media";

type VideoCard = {
  id: number;
  title: string;
  text: string;
  subText?: string;
  videoUrls: string[];
  imgUrl: string;
  linkUrls?: string[];
};
export default async function CardList() {
  const page = (await getPage({ name: "cardList" })) as NotionData;
  const headingCount = page.titleList.length - page.textList.length;
  const [, cardListInfo] = translateCardData(page, headingCount, 0);
  // 第一个卡片视频旁边的小卡片
  const hookList = (await getPage({
    name: "hook",
  })) as NotionData[];

  const musicList = (await getPage({ name: "music" })) as NotionData[];

  // const newCardListInfo = splitText(cardListInfo, page);
  // console.log("newCardListInfo", newCardListInfo);
  const newCardListInfo: VideoCard[] = [
    {
      id: 0,
      title: "Raw Media to Video",
      text: "Spending a lot of time on material organization, selection, script design, subtitle production, music scoring, and visual effects? Leave it all to TopView. Just upload your materials and ideas, and AI will take care of the video production for you.",
      videoUrls: [
        "https://d1735p3aqhycef.cloudfront.net/official-website/public/tools/M2Vdemo.mp4 ",
      ],
      imgUrl: `https://d1735p3aqhycef.cloudfront.net/official-website/public/tools/card_img_0.png`,
    },
  ];
  return (
    <Stack mt="3rem" spacing="33px">
      {/* 标本，以后可以用这个轮询 */}
      {newCardListInfo?.map((card) => {
        return (
          <CartdItem
            key={card.id}
            index={card.id + 1}
            imgSrc={card.imgUrl}
            videoSrcList={card.videoUrls}
            title={card.title}
            text={card.text}
            subText={card.subText ?? undefined}
            linkUrls={card.linkUrls ?? undefined}
            hookList={hookList}
            musicList={musicList}
          />
        );
      })}
    </Stack>
  );
}

export function translateCardData(
  page: NotionData,
  headingCount: number,
  subHeadingCount: number,
): [HeadingInfo, VideoCard[]] {
  const headingInfo = {
    // 如果有heading，则展示，否则不
    heading: headingCount ? page.titleList[0]! : "",
    description: subHeadingCount ? page.textList[0]! : "",
  };
  const cardListInfo = [];
  const videoUrlArr = page.videoUrl.trim().split(/[\n_]+/);
  // 如果titleList - textList，数量多出来的就是heading；重叠的就是Card组件的数量
  for (let i = 0; i < page.textList.length; i++) {
    let videoUrls;
    if (i === 0) {
      // hook视频(3个)
      videoUrls = videoUrlArr.slice(0, 3);
    } else if (i === 1) {
      // link视频(2个)
      videoUrls = videoUrlArr.slice(3, 5);
    } else if (i === 2) {
      // music视频(2个)
      videoUrls = videoUrlArr.slice(-2);
    }

    cardListInfo.push({
      id: i,
      title: page.titleList[i + headingCount]!,
      text: page.textList[i]!,
      videoUrls: videoUrls!,
      imgUrl: page.imgUrls[i]!,
    });
  }
  return [headingInfo, cardListInfo];
}

function splitText(cardListInfo: VideoCard[], page: NotionData) {
  const target = "Start with a viral hook, and let A.I do the rest.";
  const str = cardListInfo[0]?.text;
  if (str && cardListInfo[0] && cardListInfo[1]) {
    const targetIndex = str.indexOf(target);
    if (targetIndex !== -1) {
      const part1 = str.substring(targetIndex, targetIndex + target.length);
      const part2 = str.substring(targetIndex + target.length).trim();
      cardListInfo[0].text = part1;
      cardListInfo[0].subText = part2;
      cardListInfo[1].linkUrls = page.linkUrl.trim().split(/[\n_]+/);
      return cardListInfo;
    } else {
      console.log("Target string not found");
    }
  }
}
