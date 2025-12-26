"use client";

import MinusIcon from "@/app/(components)/icons/minusIcon";
import { PlusIcon } from "@/app/(components)/icons/plusIcon";
import {
  Box,
  Button,
  Center,
  Collapse,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import LinkHome from "./button/linkHome";

export default function QuestionList() {
  const data = [
    {
      id: 0,
      isShow: false,
      question:
        "Why should I choose TopView.ai over GetMunch for video editing?",
      answer:
        "TopView.ai offers a unique approach to video editing by analyzing millions of successful advertisements to generate engaging scripts. This feature, combined with AI-powered editing, ensures your videos are not only high-quality but also optimized for engagement and impact. While GetMunch is great for repurposing content, TopView.ai provides a more comprehensive solution for creating compelling videos from scratch.",
    },
    {
      id: 1,
      isShow: false,
      question:
        "How does TopView.ai's AI Avatar compare to GetMunch's features?",
      answer:
        "TopView.ai's AI Avatar is a unique feature that adds a personalized touch to your videos. This feature, combined with realistic voiceover generation and keyword-highlighted subtitles, can enhance the viewer's engagement and make your videos stand out. While GetMunch offers auto-captioning and smart cropping, it lacks the personalized touch that TopView.ai's AI Avatar provides.",
    },
    {
      id: 2,
      isShow: false,
      question: "Does TopView.ai offer better script generation than GetMunch?",
      answer:
        "Yes, TopView.ai's script generation is based on the analysis of millions of successful ad videos, which helps generate viral video script hooks. This feature can significantly improve the engagement and impact of your videos. GetMunch, while excellent at repurposing content, does not offer this advanced script generation feature.",
    },
    {
      id: 3,
      isShow: false,
      question:
        "Can TopView.ai help me create engaging videos more efficiently than GetMunch?",
      answer:
        "Absolutely. TopView.ai streamlines the video creation process into three simple steps: upload and describe, script generation, and AI-powered editing. This efficient process, combined with AI's ability to optimize for engagement and impact, makes TopView.ai a highly efficient tool for creating engaging videos.",
    },
    {
      id: 4,
      isShow: false,
      question:
        "Does TopView.ai offer more customization options than GetMunch?",
      answer:
        "Yes, TopView.ai offers a high degree of customization. You can choose from a variety of script hooks, tailoring your videos to your specific needs and target audience. The AI then uses these choices to guide the editing process, ensuring that the final product aligns with your vision. While GetMunch is great for repurposing content, it may not offer the same level of customization that TopView.ai provides.",
    },
    {
      id: 5,
      isShow: false,
      question:
        "Why should I trust TopView.ai's AI technology over GetMunch's?",
      answer:
        "TopView.ai's AI technology is trained on millions of successful advertisements, which it uses to guide the video editing process. This ensures that your videos are not only high-quality but also optimized for engagement and impact. While GetMunch also uses AI technology, TopView.ai's unique approach to AI-powered video editing provides a more comprehensive solution for creating compelling videos.",
    },
  ];
  const [collapseList, setCollapseList] = useState(data);
  return (
    <Center>
      <Box w="1172px" mt="95px" mb="90px">
        <Heading
          as="h2"
          textAlign="center"
          fontSize={{ base: "2.25rem", xl: "60px" }}
          fontWeight="700"
          lineHeight={{ base: "2.71rem", xl: "70px" }}
        >
          Frequently asked questions
        </Heading>
        <Stack spacing="16px" mt={{ base: "1.25rem", xl: "73px" }}>
          {collapseList.map((c) => (
            <Box
              as="button"
              key={c.id}
              w="100%"
              borderRadius="10px"
              bg="#1F1F24"
              padding={{ base: "20px", xl: "30px" }}
              onClick={() => {
                const copyCollapseList = [...collapseList];
                copyCollapseList[c.id] = { ...c, isShow: !c.isShow };

                setCollapseList(copyCollapseList);
              }}
            >
              <Flex justifyContent="space-between" alignItems="center">
                <Heading
                  as="h2"
                  fontWeight="450"
                  fontSize={{ base: "1.1rem", xl: "20px" }}
                  lineHeight={{ base: "1.875rem", xl: "30px" }}
                >
                  {c.question}
                </Heading>
                <Text
                  padding="0"
                  bg="#1F1F24"
                  _hover={{ bg: "gray.200", borderRadius: "10px" }}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  {c.isShow ? <MinusIcon /> : <PlusIcon />}
                </Text>
              </Flex>
              <Collapse startingHeight={0} in={c.isShow}>
                <Text
                  mt={{ base: "1.5rem", xl: undefined }}
                  color="#8E8BAE"
                  fontSize={{ base: "1rem", xl: "18px" }}
                  fontWeight="500"
                  textAlign="left"
                >
                  {c.answer}
                </Text>
              </Collapse>
            </Box>
          ))}
        </Stack>
        <Center mt="50px">
          <Flex
            w="100%"
            // justifyContent={index === 0 ? "flex-start" : "center"}
          >
            <Link isExternal href="/gen/m2v">
              <Button
                w="340px"
                h="64px"
                color="#fff"
                padding="24px 15px 24px 24px"
                borderRadius="12px"
                bg="hsl(245, 88%, 60%)"
                _hover={{
                  bg: "hsl(245, 88%, 80%)",
                }}
              >
                <Text
                  fontWeight="450"
                  fontSize="16px"
                  whiteSpace="normal"
                  mr="16px"
                >
                  Try TopView.ai AI Clip Editor For Free
                </Text>
              </Button>
            </Link>
          </Flex>
        </Center>
      </Box>
    </Center>
  );
}
