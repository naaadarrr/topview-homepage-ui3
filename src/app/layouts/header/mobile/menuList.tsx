"use client";

import RightArrow from "@/app/alternatives/get-munch-ai-clip-editor-alternative/(components)/icons/rightArrow";
import { Box, Button, HStack, Stack } from "@chakra-ui/react";
import { useRef } from "react";
// 点击后：
// (✅)1.拿到按钮的ref，然后用ref的文本替换掉TOPVIEW的logo
// 2.然后下面的下拉菜单的信息变为：
//    a.(✅)Products的产品信息
//    b.(✅)以及Tools的信息，做遍历，把新数据放进Menulist
// 3.(✅)此时MenuList的箭头均向下
// 4.点击哪个Menu，就向下展开，展示这个Menu的信息
// 5.(✅)展开Menu时，按钮组消失

type MenuListProps = {
  menuTextList: string[];
  setExpandMenuText: (arg: string) => void;
  setIsExpand: (arg: boolean) => void;
};
export default function MenuList({
  menuTextList,
  setExpandMenuText,
  setIsExpand,
}: MenuListProps) {
  const menuListRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    if (target.matches(".chakra-button, .chakra-stack")) {
      const span = target.querySelector("span")!;
      const textContent = span.textContent!;
      setExpandMenuText(textContent);
      setIsExpand(true);
    }
  };

  return (
    <Stack spacing={0} ref={menuListRef}>
      {menuTextList.map((m) => {
        return (
          <Button
            key={menuTextList.indexOf(m)}
            h="48px"
            padding="12px 16px"
            bg="#000"
            onClick={handleClick}
          >
            <HStack w="100%" justifyContent="space-between">
              <Box as="span" fontSize="18x" color="#fff">
                {m}
              </Box>
              <RightArrow />
            </HStack>
          </Button>
        );
      })}
    </Stack>
  );
}
