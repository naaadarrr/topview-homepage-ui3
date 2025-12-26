"use client";

import { prefixedCsr } from "@/app/config";
import { Image, Center } from "@chakra-ui/react";
import { useState } from "react";

const YouTubeEmbed = ({ video }: { video: string }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const handleIframeLoad = () => {
    setIframeLoaded(true); // iframe加载完成后，更新状态来显示iframe并隐藏占位符图片
  };

  return (
    <Center position="relative" width="90%" maxWidth="1172px" maxH="647px">
      {!iframeLoaded && (
        <Image
          fetchPriority="high"
          src={`${prefixedCsr}/tools/youtube.webp`}
          alt="YouTube Video Thumbnail"
          w="full"
          h="full"
          borderRadius="30px"
        />
      )}
      {/* 即使在iframe未加载完成之前，我们也在背景中加载它，但不显示 */}
      <iframe
        style={{
          zIndex: 10,
          maxWidth: "1172px",
          maxHeight: "647px",
          borderRadius: "30px",
          aspectRatio: "16 / 9",
          display: iframeLoaded ? "block" : "none", // 根据iframeLoaded状态来控制iframe的显示
        }}
        width="90%"
        src={video}
        title="YouTube video player"
        onLoad={handleIframeLoad} // 当iframe加载完成时调用
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </Center>
  );
};

export default YouTubeEmbed;
