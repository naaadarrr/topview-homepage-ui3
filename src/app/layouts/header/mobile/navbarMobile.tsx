"use client";

// import { CloseIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import MenuList from "./menuList";
import { useState } from "react";
import LeftArrow from "@/app/alternatives/get-munch-ai-clip-editor-alternative/(components)/icons/leftArrow";
import ProductList from "./productList";
import { type NotionData } from "../../responsiveNavBar";
import { prefixed } from "@/utils/media";

type NavBarProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (arg: boolean) => void;
} & Pick<NotionData, "textList">;

const headingStyles = {
  fontSize: "20px",
  fontWeight: "450",
  fontFamily: "Eina03-SemiBold",
  marginBottom: "5px",
};
const textStyles = {
  color: "#D4D4D4",
  fontFamily: "Eina03-Regular",
  fontSize: "14px",
  fontWeight: "400",
};

export default function NavbarMobile({
  textList,
  isMenuOpen,
  setIsMenuOpen,
}: NavBarProps) {
  const [expandMenuText, setExpandMenuText] = useState<string | undefined>();
  const [isExpand, setIsExpand] = useState(false);

  const menuTextList = textList.slice(0, -2);
  const buttonTextList = textList.slice(-2);
  return (
    <Box
      position="fixed"
      zIndex="2"
      top="0px"
      right="0px"
      left="0px"
      bottom="0px"
      w="100vw"
      h="100vh"
      pt="1rem"
      bg="#000"
      overflowY="scroll"
      opacity={isMenuOpen ? "1" : "0"}
      transition="opacity 2s ease"
    >
      <Box h="100%">
        {/* 上面-导航栏 */}
        <HStack
          mb={isExpand ? "1.5rem" : "2rem"}
          justifyContent="space-between"
          pl={expandMenuText == null ? undefined : "1rem"}
        >
          {/*左边- TOPVIEW的logo */}
          <HStack>
            {isExpand ? (
              <Button
                w="8rem"
                h="2.5rem"
                bg="#000"
                color="#fff"
                padding="0.5rem 1rem"
                onClick={() => setIsExpand(false)}
              >
                <LeftArrow />
                <Text
                  fontFamily="Eina03-Bold"
                  fontSize="18x"
                  fontWeight="900"
                  marginLeft="12px"
                  letterSpacing="0.9px"
                  display="flex"
                  alignItems="center"
                  textAlign="center"
                  lineHeight="1"
                >
                  {expandMenuText}
                </Text>
              </Button>
            ) : (
              <>
                <Image
                  w="146px"
                  h="26px"
                  pl="1rem"
                  src="https://d1735p3aqhycef.cloudfront.net/official-website/public/tools/topview_logo.png"
                  alt="Topview AI logo"
                />
                {/* <TopView />
                <Text
                  w="96px"
                  h="26px"
                  fontFamily="Eina03-Bold"
                  fontSize="19.2px"
                  fontWeight="900"
                  marginLeft="12px"
                  letterSpacing="0.9px"
                  textAlign="center"
                >
                  {title}
                </Text> */}
              </>
            )}
          </HStack>
          {/*右边- 关闭按钮 */}
          <Button
            display="flex"
            justifyContent="center"
            alignItems="center"
            bg="#000"
            onClick={() => setIsMenuOpen(false)}
          >
            <CloseIcon w="18px" h="18px" color="#fff" />
          </Button>
        </HStack>

        {/* 下面-菜单列表 */}

        <Stack
          w="100%"
          h="100%"
          // 不展开，默认堆叠布局
          // 超过1024px，又回到堆叠布局
          // 如果展开，则flex-start，贴着上面导航栏；
          justifyContent={isExpand ? "flex-start" : "space-between"}
        >
          <ul>
            {/* 1.菜单栏 */}
            {isExpand ? (
              <ProductList isExpand={isExpand} />
            ) : (
              <MenuList
                menuTextList={menuTextList}
                setExpandMenuText={setExpandMenuText}
                setIsExpand={setIsExpand}
              />
            )}
            {/* 1.5 看是否展开某个具体的菜单，展开了，则展示这个菜单的子菜单 */}
            {isExpand && (
              // 设备宽度超过1080px后，Stack变成HStack
              <>
                <Stack flex={1} mt="1rem" display="none">
                  <Heading {...headingStyles} pl="1rem">
                    Tools
                  </Heading>
                  <Accordion
                    // 超过1280px，则这些菜单并排布局，且每个菜单flex：1
                    display={{ xl: "flex" }}
                    defaultIndex={[0]}
                    allowMultiple
                  >
                    <AccordionItem flex={{ xl: "1" }} border="none">
                      <h2>
                        <AccordionButton>
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            {...headingStyles}
                          >
                            Video Editor
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <Stack spacing="22px">
                          <Text {...textStyles}>Add Image to Video</Text>
                          <Text {...textStyles}>Add Image to Video</Text>
                          <Text {...textStyles}>Add Image to Video</Text>
                          <Text {...textStyles}>Add Image to Video</Text>
                          <Text {...textStyles}>Add Image to Video</Text>
                        </Stack>
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem flex={{ xl: "1" }} border="none">
                      <h2>
                        <AccordionButton>
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            {...headingStyles}
                          >
                            Subtitles & Transcription
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <Stack spacing="22px">
                          <Text {...textStyles}>Add Image to Video</Text>
                          <Text {...textStyles}>Add Image to Video</Text>
                          <Text {...textStyles}>Add Image to Video</Text>
                          <Text {...textStyles}>Add Image to Video</Text>
                          <Text {...textStyles}>Add Image to Video</Text>
                        </Stack>
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem flex={{ xl: "1" }} border="none">
                      <h2>
                        <AccordionButton>
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            {...headingStyles}
                          >
                            Toolkit
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <Stack spacing="22px">
                          <Text {...textStyles}>Add Image to Video</Text>
                          <Text {...textStyles}>Add Image to Video</Text>
                          <Text {...textStyles}>Add Image to Video</Text>
                          <Text {...textStyles}>Add Image to Video</Text>
                          <Text {...textStyles}>Add Image to Video</Text>
                        </Stack>
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem flex={{ xl: "1" }} border="none">
                      <h2>
                        <AccordionButton>
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            {...headingStyles}
                          >
                            AI Tools
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <Stack spacing="22px">
                          <Text {...textStyles}>Add Image to Video</Text>
                          <Text {...textStyles}>Add Image to Video</Text>
                          <Text {...textStyles}>Add Image to Video</Text>
                          <Text {...textStyles}>Add Image to Video</Text>
                          <Text {...textStyles}>Add Image to Video</Text>
                        </Stack>
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem flex={{ xl: "1" }} border="none">
                      <h2>
                        <AccordionButton>
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            {...headingStyles}
                          >
                            More
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <Stack spacing="22px">
                          <Text {...textStyles}>Add Image to Video</Text>
                          <Text {...textStyles}>Add Image to Video</Text>
                          <Text {...textStyles}>Add Image to Video</Text>
                          <Text {...textStyles}>Add Image to Video</Text>
                          <Text {...textStyles}>Add Image to Video</Text>
                        </Stack>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </Stack>
              </>
            )}
          </ul>
          {/* 2.按钮组 */}
          {isExpand || (
            <Center w="100%" h="200px">
              <HStack w="90%" justifyContent="space-between" padding={2}>
                <Link w="50%" target="_blank" href="/account/signin">
                  <Button
                    w="100%"
                    padding="12px 20px"
                    border="1px solid #626262"
                    borderRadius="8px"
                    bg="hsl(0, 0, 6%)"
                    _hover={{ bg: "hsl(0, 0%, 26%)" }}
                    color="white"
                    marginRight="10px"
                    fontWeight="450"
                    fontFamily="Eina02-SemiBold"
                  >
                    {buttonTextList[0]}
                  </Button>
                </Link>
                <Link w="50%" target="_blank" href="/account/signup">
                  <Button
                    w="100%"
                    bg="hsl(245, 88%, 60%)"
                    _hover={{ bg: "hsla(245, 88%, 80%)" }}
                    color="#fff"
                    borderRadius="8px"
                    padding="12px 20px"
                    fontWeight="450"
                    fontFamily="Eina02-SemiBold"
                  >
                    {buttonTextList[1]}
                  </Button>
                </Link>
              </HStack>
            </Center>
          )}
        </Stack>
      </Box>
    </Box>
  );
}
