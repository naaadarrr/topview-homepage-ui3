"use client";

import {
  Box,
  Center,
  Collapse,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { PlusIcon } from "../icons/plusIcon";
import MinusIcon from "../icons/minusIcon";
import { type NotionData } from "@/app/layouts/responsiveNavBar";
import { type HeadingInfo } from "../card/smallCardContainerBlack";
import LinkHome from "@/app/alternatives/get-munch-ai-clip-editor-alternative/(components)/button/linkHome";
type MarginTop = {
  base: string;
  xl: string;
};

export type Question = {
  id: number;
  isShow: boolean;
  question: string;
  answer: string;
};
export default function QuestionList({
  mt,
  questionList,
}: {
  mt: MarginTop | string;
  questionList: Question[];
}) {
  const [collapseList, setCollapseList] = useState(questionList);
  return (
    <Center mt={mt}>
      <Box w="1172px" mt={{ base: "0px", xl: "95px" }} mb="90px">
        <Heading
          as="h2"
          textAlign="center"
          fontSize={{ base: "1.5rem", xl: "60px" }}
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
                  textAlign="left"
                  fontWeight="450"
                  fontSize={{ base: ".9rem", xl: "20px" }}
                  lineHeight={{ base: "1rem", xl: "30px" }}
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
                  fontSize={{ base: ".8rem", xl: "18px" }}
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
          <LinkHome
            index={2}
            btnText="Try AI Video Maker For Free"
            btnLink="/gen/m2v"
          />
        </Center>
      </Box>
    </Center>
  );
}

export function translateCardData(
  page: NotionData,
  headingCount: number,
  subHeadingCount: number,
): [HeadingInfo, Question[]] {
  const headingInfo = {
    // 如果有heading，则展示，否则不
    heading: headingCount ? page.titleList[0]! : "",
    description: subHeadingCount ? page.textList[0]! : "",
  };
  const cardListInfo = [];
  // 如果titleList - textList，数量多出来的就是heading；重叠的就是Card组件的数量
  for (let i = 0; i < page.textList.length; i++) {
    cardListInfo.push({
      id: i,
      title: page.titleList[i + headingCount]!,
      text: page.textList[i]!,
    });
  }

  const questionList = [];
  for (const card of cardListInfo) {
    questionList.push({
      id: card?.id,
      isShow: false,
      question: card?.title,
      answer: card?.text,
    });
  }
  return [headingInfo, questionList];
}
