import { Grid, GridItem } from "@chakra-ui/react";
// import Typewriter from "typewriter-effect";
import TypewriterWithVideo from "../../typewriter";
import React from "react";
import { type linkType } from "../cartdItem";

export default function Hook({
  hookToVideo,
  setVideo,
}: {
  hookToVideo: Map<linkType, string>;
  setVideo: (arg: string) => void;
}) {
  const firstGrouphook = Array.from(hookToVideo.keys()).reverse()[0];
  const topTitle = firstGrouphook?.titleList[0];
  const leftTitle = firstGrouphook?.titleList[1];
  const rightTitle = firstGrouphook?.titleList[2];

  return (
    <Grid
      display={{ base: "none", xl: "grid" }}
      position="absolute"
      bottom="-1.875rem"
      left="10.375rem"
      w="17.5rem"
      h="10rem"
      borderRadius=".75rem"
      bg="linear-gradient(248.06deg, #3A3A40 9.97%, #29282C 83.75%)"
      templateRows="repeat(4, 1fr)"
      templateColumns="repeat(4, 1fr)"
      padding="1.5rem"
      gap={1.5}
    >
      <GridItem rowSpan={1} colSpan={4} color="hsla(245, 19%, 70%, 1)">
        {topTitle}
      </GridItem>
      <GridItem
        rowSpan={1}
        colSpan={4}
        color="#fff"
        fontSize="18px"
        fontFamily="Eina01-SemiBold"
        lineHeight="19px"
        fontWeight="700"
      >
        <TypewriterWithVideo
          type="hook"
          pointer={0}
          nameToVideo={hookToVideo}
          setVideo={setVideo}
        />
      </GridItem>
      <GridItem
        rowSpan={1}
        colSpan={1}
        fontFamily="Eina02-Bold"
        color="hsla(245, 19%, 70%, 1)"
      >
        {leftTitle}
      </GridItem>
      <GridItem
        rowSpan={1}
        colSpan={1}
        fontFamily="Eina02-Bold"
        color="hsla(245, 19%, 70%, 1)"
      >
        {rightTitle}
      </GridItem>
      <GridItem rowSpan={1} colSpan={1} visibility="hidden"></GridItem>
      <GridItem rowSpan={1} colSpan={1} visibility="hidden"></GridItem>
      <GridItem
        rowSpan={1}
        colSpan={1}
        color="#fff"
        fontSize="18px"
        fontFamily="Eina01-SemiBold"
        lineHeight="19px"
        fontWeight="700"
      >
        <TypewriterWithVideo
          type="hook"
          pointer={1}
          nameToVideo={hookToVideo}
          setVideo={setVideo}
        />
      </GridItem>
      <GridItem
        rowSpan={1}
        colSpan={1}
        color="#fff"
        fontSize="18px"
        fontFamily="Eina01-SemiBold"
        lineHeight="19px"
        fontWeight="700"
      >
        <TypewriterWithVideo
          type="hook"
          pointer={2}
          nameToVideo={hookToVideo}
          setVideo={setVideo}
        />
      </GridItem>
    </Grid>
  );
}
