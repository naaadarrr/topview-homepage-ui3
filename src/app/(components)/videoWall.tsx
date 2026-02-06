"use client";

import { prefixed } from "@/utils/media";
import { Box } from "@chakra-ui/react";
import React from "react";

export default function VideoWall() {
  const videoWallUrls = [
    "0.mp4",
    "1.mp4",
    "2.mp4",
    "3.mp4",
    "4.mp4",
    "5.mp4",
    "6.mp4",
    "7.mp4",
    "8.mp4",
    "9.mp4",
  ];
  return (
    <section style={{ overflow: "hidden", display: "none" }}>
      <Box
        w="1000%"
        pt="2rem"
        bg="#000"
        display="flex"
        gap="10px"
        textAlign="right"
        css={
          {
            // maskImage:
            //   "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)",
          }
        }
      >
        {videoWallUrls.map((url) => (
          <video
            // 提供数组当前value对应的key(整数)
            key={videoWallUrls.indexOf(url)}
            style={{
              minWidth: "180px",
              height: "320px",
              borderRadius: "1rem",
            }}
            src={prefixed(`/video-wall/${url}`)}
            autoPlay
            muted
            loop
          ></video>
        ))}
        {/* 补8个html来补上第一帧动画结束到第二针动画开始之间的空白 */}
        {videoWallUrls.map((url) => (
          <video
            key={videoWallUrls.indexOf(url)}
            style={{
              minWidth: "180px",
              height: "320px",
              borderRadius: "1rem",
            }}
            src={prefixed(`/video-wall/${url}`)}
            autoPlay
            muted
            loop
          ></video>
        ))}
      </Box>
    </section>
  );
}
