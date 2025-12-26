"use client";

import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import { HaloCard } from "@/app/layouts/header/halo";
import { type NotionData } from "@/app/layouts/responsiveNavBar";
import Typewriter from "typewriter-effect";
import { useState } from "react";
import Hook from "./postCard/hook";
import Music from "./postCard/music";
import { prefixed } from "@/utils/media";

export type linkType = Pick<NotionData, "titleList" | "textList">;
export type musicType = linkType & Pick<NotionData, "imgUrls">;

export default function CartdItem({
  index,
  imgSrc,
  videoSrcList,
  title,
  text,
  linkUrls,
  subText,
  hookList,
  musicList,
}: {
  index: number;
  imgSrc: string;
  videoSrcList: string[];
  title: string;
  text: string;
  subText?: string;
  linkUrls?: string[];
  hookList: NotionData[];
  musicList: NotionData[];
}) {
  const [video, setVideo] = useState(videoSrcList?.[0]);

  // 让第二个卡片的linkUrl和videoUrl之间形成一个映射
  const linkToVideo = new Map<string, string>();
  if (linkUrls != null) {
    for (let i = 0; i < linkUrls?.length; i++) {
      linkToVideo.set(linkUrls[i]!, videoSrcList[i]!);
    }
  }
  // 第一个卡片hook和video的映射
  // hookToVideo是根据hookList派生出来的数据(为了方便切换视频)
  const hookToVideo = new Map<linkType, string>();
  if (
    hookList != null &&
    videoSrcList.some((video) => video.includes("hook"))
  ) {
    for (let i = 0; i < hookList.length; i++) {
      if (hookList[i] != null) {
        const { titleList, textList } = hookList[i]!;

        const link = {
          titleList,
          textList,
        };
        // 在这里，我们已经检查了 hookList[i] 是否存在，所以可以安全地使用它
        hookToVideo.set(link, videoSrcList[i]!);
      }
    }
  }

  const musicToVideo = new Map<musicType, string>();
  if (musicList != null) {
    for (let i = 0; i < musicList.length; i++) {
      if (musicList[i] != null) {
        const { titleList, textList, imgUrls } = musicList[i]!;
        const link = {
          titleList,
          textList,
          imgUrls,
        };
        // 在这里，我们已经检查了 hookList[i] 是否存在，所以可以安全地使用它
        musicToVideo.set(link, videoSrcList[i]!);
      }
    }
  }

  return (
    <Card
      position="relative"
      h={{ base: "100%", xl: "711px" }}
      borderRadius="30px"
      bg="linear-gradient(251deg, #1C1C1C 10.02%, #121111 92.51%)"
      overflow="hidden"
    >
      <CardBody padding={{ base: "2.5rem 1.875rem", xl: "0" }}>
        <Flex
          h="100%"
          // 手机端，竖直排
          // PC，如果index是偶数，则横着从左往右排
          //     如果index是奇数，则反着排
          flexDirection={{
            base: "column",
            xl: index % 2 === 1 ? "row" : "row-reverse",
          }}
          padding={{ base: "0px", xl: "85px 60px 74px 88px" }}
          justifyContent={{ base: undefined, xl: "space-between" }}
        >
          {/* 文本 */}
          <Stack
            align="stretch"
            alignSelf="flex-start"
            color="#fff"
            mt={{ base: undefined, xl: "41px" }}
            flexGrow={1}
          >
            <figure>
              <Image
                alignSelf={{ base: "flex-start", xl: undefined }}
                src={imgSrc}
                alt="Card-Img-1-1"
                w="232px"
                loading="lazy"
              />
            </figure>
            <Heading
              as="h2"
              h={{ base: "2.5rem", xl: "69px" }}
              fontSize={{ base: "1.75rem", xl: "50px" }}
              fontWeight="700"
              lineHeight={{ base: "2.56rem", xl: "80px" }}
              bg="linear-gradient(90deg, #76E56F 11.11%, #71F3F3 51.23%, #9184F7 89.01%)"
              bgClip="text"
            >
              {title}
            </Heading>
            <Text
              w={{ base: undefined, xl: "507px" }}
              fontSize={{
                base:
                  text === "Start with a viral hook, and let A.I do the rest."
                    ? ".95rem"
                    : "1rem",
                xl: "20px",
              }}
              fontWeight="600"
              lineHeight={{ base: "1.4rem", xl: "29.9px" }}
            >
              {text}
            </Text>
            <Text
              display={subText && "block"}
              // w={{ base: undefined, xl: "502px" }}
              fontSize={{ base: ".95rem", xl: "20px" }}
              fontWeight="600"
              lineHeight="1.3rem"
              color="hsla(245, 19%, 70%, 1)"
            >
              {subText}
            </Text>
            {linkUrls != null && (
              <Box
                w="380px"
                h="56px"
                mt="19px"
                border="2px solid #4E40F3"
                bg="#141414"
                borderRadius="14px"
                display={{ base: "none", xl: linkUrls && "flex" }}
                justifyContent="center"
                alignItems="center"
                color="hsl(0, 0%, 74%)"
                fontFamily="Eina02-SemiBold"
                fontSize="18px"
                fontWeight="600"
              >
                {/* 当前文本typed《打字完》，切下一个视频上来 */}
                {/* 如果当前文本是Map的最后一个key，则轮播到第一个视频 */}
                {/* <Typewriter
                    onInit={(typewriter) => {
                      const keys = Array.from(linkToVideo.keys());

                      keys.forEach((key, index) => {
                        typewriter
                          .typeString(key)
                          .callFunction(() => {
                            // 使用模运算符来实现循环索引
                            const nextIndex = (index + 1) % keys.length;
                            const nextKey = keys[nextIndex]!;
                            setVideo(linkToVideo.get(nextKey));
                          })
                          .pauseFor(2000)
                          .deleteAll();
                      });

                      typewriter.start();
                    }}
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 125,
                      deleteSpeed: 20,
                      cursor: "",
                    }}
                  /> */}
              </Box>
            )}
          </Stack>
          <Image
            display={{ base: "none", xl: "block" }}
            w="204px"
            h="204px"
            src="https://d1735p3aqhycef.cloudfront.net/official-website/public/tools/diagram.png"
            alt="diagram-img"
            alignSelf="end"
            mr="44px"
            loading="lazy"
          />
          {/* 视频 */}
          <Box
            position="relative"
            w={{ base: "292px", xl: "309px" }}
            // 其实这里是为了限制视频的高度
            // PC时，index为奇数的视频高度为521px(见下面的video标签的maxHeight)
            // 移动端时，index为奇数的视频高度为394px
            h={{
              base: index % 2 === 0 ? undefined : "394px",
              xl: index % 2 === 0 ? undefined : "552px",
            }}
            alignSelf={{
              base: "center",
              // PC时，index为奇数的，视频剧中；偶数靠右边沉底
              xl: index % 2 === 0 ? "flex-end" : "center",
            }}
          >
            <video
              style={{
                marginTop: "1rem",
                borderRadius: "30px",
                height: "100%",
                maxHeight: index % 2 === 0 ? "704px" : "552px",
                position: "relative",
                bottom: index % 2 === 0 ? "-40px" : undefined,
                objectFit: "cover",
              }}
              poster="https://d1735p3aqhycef.cloudfront.net/official-website/public/tools/M2Vdemo.webp"
              controls
              src={video}
            ></video>
            {/* {index === 1 && (
                <Hook hookToVideo={hookToVideo} setVideo={setVideo} />
              )} */}
            {/* {index === 3 && (
                <Music musicToVideo={musicToVideo} setVideo={setVideo} />
              )} */}
          </Box>
        </Flex>
      </CardBody>
      <HaloCard index={index} />
    </Card>
  );
}
