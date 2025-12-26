"use client";

import { type MenuItemProps } from "@/types/home";
import { Box, Button, Grid, GridItem, Link, Stack } from "@chakra-ui/react";
import { Fragment, useState } from "react";

export default function MenuItem({
  menuItem,
  onOpenTutorialVideoModal,
}: MenuItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const longestChildTitleLength = menuItem.children
    ? Math.max(...menuItem.children.map((child) => child.title.length))
    : 0;
  const paddingY = `${longestChildTitleLength * 0.4}px`;
  const paddingX = `${longestChildTitleLength * 1.6}px`;

  return (
    <>
      <li
        style={{
          listStyleType: "none",
          position: "relative",
        }}
      >
        <Link href={menuItem.linkUrl ? menuItem.linkUrl : undefined}>
          <Button
            h="31px"
            padding="8px 16px"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            color="#fff"
            bg="none"
            borderRadius="100px"
            border="1px solid transparent"
            _hover={{
              bg: "hsla(0, 0%, 85%, 0.2)",
              border: "1px solid hsla(0, 0%, 100%, 0.13)",
              borderRadius: "100px",
            }}
            fontWeight="450"
          >
            {menuItem.title}
          </Button>
        </Link>
        {menuItem.children && isOpen && (
          <Box
            position="absolute"
            top="100%"
            left={0}
            zIndex="1"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <Stack spacing={0} h="100%">
              <Box w="100%" h="20px" opacity={0}></Box>
              <Grid
                h="auto"
                border="1px solid hsla(0, 0%, 100%, 0.2)"
                borderRadius="10px"
                templateRows={`repeat(${menuItem.children.length}, auto)`}
                color="hsla(0 ,0%, 72%, 1)"
                justifyContent="center"
                alignItems="center"
                padding={`${paddingY} ${paddingX}`}
                bg="hsl(234, 25%, 31%)"
                backdropFilter="blur(20px)"
                zIndex="1000"
              >
                {menuItem.children.map((child) => (
                  <Fragment key={child.id}>
                    <GridItem></GridItem>
                    {/* 教程视频，不需要跳转，打开弹窗 */}
                    {child.linkUrl ? (
                      <Link href={child.linkUrl} target="_blank">
                        <GridItem>
                          <Button
                            fontSize="14px"
                            fontWeight="400"
                            padding="0"
                            bg="none"
                            color="hsla(0, 0%, 72%, 1)"
                            justifyContent="none"
                            _hover={{
                              bg: "none",
                              color: "#fff",
                            }}
                          >
                            {child.title}
                          </Button>
                        </GridItem>
                      </Link>
                    ) : (
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
                          onClick={
                            child.title === "Watch video tutorials"
                              ? onOpenTutorialVideoModal
                              : undefined
                          }
                        >
                          {child.title}
                        </Button>
                      </GridItem>
                    )}
                  </Fragment>
                ))}
              </Grid>
            </Stack>
          </Box>
        )}
      </li>
    </>
  );
}
