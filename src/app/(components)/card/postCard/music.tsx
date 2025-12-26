import { Grid, GridItem, Image } from "@chakra-ui/react";
import { type musicType } from "../cartdItem";
import { useState } from "react";
import TypewriterWithVideo from "../../typewriter";

export default function Music({
  musicToVideo,
  setVideo,
}: {
  musicToVideo: Map<musicType, string>;
  setVideo: (arg: string) => void;
}) {
  const firstGroupMusic = Array.from(musicToVideo.keys()).reverse()[0]!;

  const leftTitle = firstGroupMusic?.titleList[0];
  const rightTitle = firstGroupMusic?.titleList[1];

  const [imgUrl, setImgUrl] = useState(firstGroupMusic.imgUrls[0]!);
  const [rank, setRank] = useState(firstGroupMusic.textList[1]!);
  // const [isToogle, setIsToogle] = useState(false);

  return (
    <Grid
      display={{ base: "none", xl: "grid" }}
      position="absolute"
      bottom="-1.875rem"
      left="10.375rem"
      w="17.5rem"
      h="90px"
      borderRadius=".75rem"
      bg="linear-gradient(248.06deg, #3A3A40 9.97%, #29282C 83.75%)"
      templateRows="repeat(2, 1fr)"
      templateColumns="59px 2fr 1fr"
      padding="1rem"
      columnGap={4}
      gridColumnGap="20px"
    >
      <GridItem rowSpan={2} colSpan={1}>
        {/* 图片加载完成，旧的图片淡出，新的图片淡入 */}
        <Image
          h="59px"
          src={imgUrl}
          alt="card-img"
          opacity={1}
          transition="opacity 0.5s ease-out"
        />
      </GridItem>
      <GridItem
        rowSpan={1}
        colSpan={1}
        color="hsla(245, 19%, 70%, 1)"
        fontWeight="600"
      >
        {leftTitle}
      </GridItem>
      <GridItem
        rowSpan={1}
        colSpan={1}
        color="hsla(245, 19%, 70%, 1)"
        fontWeight="600"
      >
        {rightTitle}
      </GridItem>
      <GridItem
        rowSpan={1}
        colSpan={1}
        color="#fff"
        fontSize="18px"
        fontFamily="Eina02-Bold"
        fontWeight="700"
        lineHeight="24.5px"
      >
        <TypewriterWithVideo
          type="music"
          nameToVideo={musicToVideo}
          pointer={0}
          setVideo={setVideo}
          setImgUrl={setImgUrl}
          setRank={setRank}
        />
      </GridItem>
      <GridItem
        rowSpan={1}
        colSpan={1}
        color="#fff"
        fontSize="18px"
        fontFamily="Eina02-Bold"
        fontWeight="700"
        lineHeight="24.5px"
      >
        {rank}
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}></GridItem>
    </Grid>
  );
}
