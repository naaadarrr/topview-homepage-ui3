import { Box, Button, Grid, GridItem, Stack } from "@chakra-ui/react";
import { Fragment } from "react";
import Link from "next/link";

type HoverOverProps = {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
};

export default function HoverOver({ isOpen, setIsOpen }: HoverOverProps) {
  const hoverInfo = [
    {
      id: crypto.randomUUID(),
      title: "Viral Hooks to Video",
      linkUrl: "https://www.topview.ai/account/signin",
    },
    {
      id: crypto.randomUUID(),
      title: "Script to Video",
      linkUrl: "https://www.topview.ai/gen/s2v",
    },
    {
      id: crypto.randomUUID(),
      title: "Top Videos",
      linkUrl: "https://www.topview.ai/dashboard/ads",
    },
  ];
  return (
    <>
      {isOpen && (
        <Box
          position="absolute"
          top="100%"
          left={0}
          zIndex="1"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <Stack spacing={0} h="100%">
            {/* 透明层 */}
            <Box w="100%" h="20px" opacity={0}></Box>

            {/* 弹窗层 */}
            <Grid
              w="220px"
              h="142px"
              border="1px solid hsla(0, 0%, 100%, 0.2)"
              borderRadius="10px"
              templateRows="repeat(3, 21px)"
              templateColumns="21px auto"
              rowGap="21px"
              columnGap="10px"
              color="hsla(0 ,0%, 72%, 1)"
              justifyContent="center"
              alignItems="center"
              padding="23px"
              bg="hsla(234, 25%, 31%, 0.8)"
              backdropFilter="blur(20px)"
              zIndex="1000"
            >
              {hoverInfo.map((p) => {
                return (
                  <Fragment key={p.id}>
                    <GridItem></GridItem>
                    <Link prefetch={true} href={p.linkUrl} target="_blank">
                      <GridItem>
                        <Button
                          fontSize="14px"
                          fontWeight="400"
                          padding="0"
                          bg="none"
                          color="hsla(0, 0%, 72%, 1)"
                          _hover={{
                            bg: "none",
                            color: "#fff",
                          }}
                        >
                          {p.title}
                        </Button>
                      </GridItem>
                    </Link>
                  </Fragment>
                );
              })}
            </Grid>
          </Stack>
        </Box>
      )}
    </>
  );
}
