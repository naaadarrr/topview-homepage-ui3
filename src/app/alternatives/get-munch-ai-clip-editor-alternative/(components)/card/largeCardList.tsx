import {
  Card,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import DoubleFlyCardContainer from "./doubleFlyCardContainer";
import { prefixed } from "@/utils/media";

export default function LargeCardList() {
  const cardList = [
    {
      id: 0,
      title: "A game-changer for SMB user",
      text: `As a small business owner, TopView.ai has been a game-changer for my marketing efforts. The AI-powered editor has made creating engaging videos a breeze. The script generation feature is particularly impressive, providing me with a range of viral hooks that have significantly increased engagement with my content. The AI Avatar and highlighted keywords in subtitles have added a professional touch to my videos that I never thought I could achieve on my own. I highly recommend TopView.ai to any business owner looking to elevate their video marketing strategy.`,
      imgUrl: "/add-to-video/card-body-0.png",
    },
    {
      id: 1,
      title: "Transformed creator video creation process",
      text: `TopView.ai has completely transformed my video creation process. The AI does all the heavy lifting, from generating viral scripts to organizing my clips into a cohesive narrative. The realistic voiceover feature is a standout, adding a level of sophistication to my videos that I haven't seen with other tools. Plus, the AI Avatar adds a unique touch that my audience loves. TopView.ai has not only saved me time but has also helped me create more engaging content. It's a must-have tool for any content creator.`,
      imgUrl: "/add-to-video/card-body-1.png",
    },
    {
      id: 2,
      title: "Save time for professional video editor",
      text: `As a professional video editor, I was initially skeptical about an AI-powered tool. But TopView.ai has blown me away. The AI's ability to analyze and learn from millions of successful ads is truly impressive. It's not just about cutting down editing time; it's about optimizing for impact and engagement. The generated voiceover is incredibly realistic, and the keyword-highlighted subtitles are a great touch. The AI Avatar is an innovative feature that adds a unique element to the videos. TopView.ai is a powerful tool that I now can't imagine working without it.`,
      imgUrl: "/add-to-video/card-body-2.png",
    },
  ];
  return (
    <Center>
      <Stack w="1172px" mt="146px" spacing="60px">
        {cardList.map((card) => {
          // 根据card.id的奇偶性决定内容的顺序
          const isEven = card.id % 2 === 0;

          // 定义文本和图片组件
          const textComponent = (
            <Stack
              h="100%"
              pt={{ base: "0px", xl: "45px" }}
              alignSelf="flex-start"
            >
              <Heading
                as="h2"
                fontSize={{ base: "x-large", xl: "30px" }}
                color="#fff"
              >
                {card.title}
              </Heading>
              <Text
                color="#BDBDBD"
                fontSize={{ base: ".9rem", xl: "18px" }}
                fontWeight="400"
                lineHeight="30px"
              >
                {card.text}
              </Text>
            </Stack>
          );

          const imageComponent = (
            <Image
              src={prefixed(`/add-to-video/card-body-${card.id}.png`)}
              alt={`card-body-${card.id}`}
            />
          );

          return (
            <Card
              key={card.id}
              h={{ base: "100%", xl: "480px" }}
              borderRadius="30px"
              paddingTop="48px"
              paddingLeft="50px"
              bg="#000"
            >
              {/* 使用Flex组件来实现响应式布局 */}
              <Flex
                justifyContent="space-between"
                flexDirection={{
                  base: "column",
                  xl: "row",
                }}
                gap="59px"
              >
                {/* 根据id的奇偶性和屏幕尺寸调整文本和图片的顺序 */}
                {isEven ? (
                  <>
                    {textComponent}
                    {imageComponent}
                  </>
                ) : (
                  <>
                    {imageComponent}
                    {textComponent}
                  </>
                )}
              </Flex>
            </Card>
          );
        })}
        <DoubleFlyCardContainer />
      </Stack>
    </Center>
  );
}
