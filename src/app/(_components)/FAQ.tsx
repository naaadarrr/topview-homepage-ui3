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
import { PlusIcon } from "../(components)/icons/plusIcon";
import MinusIcon from "../(components)/icons/minusIcon";
import LinkHome from "@/app/alternatives/get-munch-ai-clip-editor-alternative/(components)/button/linkHome";
import { type NotionPage } from "@/types/notion";
import { type Question } from "../(components)/question/questionList";

export default function FAQ({ dataSource }: { dataSource: NotionPage[] }) {
  // 将 NotionPage[] 转换为 Question[]
  const initialQuestions: Question[] = dataSource.map((page, index) => ({
    id: index,
    isShow: false,
    question: page.subTitle.map((sub) => sub.plain_text).join(" "),
    answer: page.text.map((t) => t.plain_text).join(" "),
  }));

  const [collapseList, setCollapseList] = useState(initialQuestions);

  return (
    <>
      {dataSource.length > 0 && (
        <Center>
          <Box w={{ base: "90%", xl: "1172px" }} mt="10px" mb="90px">
            {dataSource.map((data) => {
              if (data?.title === "") return;
              return (
                <Heading
                  key={data.pageId}
                  as="h2"
                  textAlign="center"
                  fontSize={{ base: "2.25rem", xl: "40px" }}
                  fontWeight="700"
                  lineHeight={{ base: "2.71rem", xl: "70px" }}
                >
                  {data?.title}
                </Heading>
              );
            })}

            <Stack spacing="16px" mt={{ base: "1.25rem", xl: "20px" }}>
              {collapseList.map((c) => (
                <Box
                  as="button"
                  key={c.id}
                  w="100%"
                  borderRadius="10px"
                  bg="#1F1F24"
                  padding={{ base: "20px", xl: "30px" }}
                  onClick={() => {
                    const copyCollapseList = collapseList.map((item) =>
                      item.id === c.id
                        ? { ...item, isShow: !item.isShow }
                        : item,
                    );
                    setCollapseList(copyCollapseList);
                  }}
                >
                  <Flex justifyContent="space-between" alignItems="center">
                    <Heading
                      as="h2"
                      fontWeight="450"
                      textAlign="left"
                      fontSize={{ base: "1.1rem", xl: "20px" }}
                      lineHeight={{ base: "1.5rem", xl: "30px" }}
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
          </Box>
        </Center>
      )}
    </>
  );
}
