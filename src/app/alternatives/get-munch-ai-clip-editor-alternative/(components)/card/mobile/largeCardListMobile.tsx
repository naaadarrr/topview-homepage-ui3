import { Card, Heading, Image, Stack, Text } from "@chakra-ui/react";
import DoubleFlyCardContainer from "../doubleFlyCardContainer";
import { prefixed } from "@/utils/media";

export default function LargeCardListMobile() {
  return (
    <Stack mt="3rem" spacing="60px">
      <Card
        h="100%"
        borderRadius="30px"
        padding="2rem 1.5rem 0rem 1.5rem"
        bg="#000"
      >
        <Stack justifyContent="space-between">
          {/* 左侧文本 */}
          {/* <Stack h="100%"> */}
          <Heading
            as="h2"
            color="#E3E3E3"
            fontFamily="Eina03-SemiBold"
            fontSize="1.375rem"
            lineHeight="1.87rem"
          >
            Increase your reach
          </Heading>
          <Text
            color="#BDBDBD"
            fontSize="1rem"
            fontFamily="Eina03-Regular"
            fontWeight="400"
            lineHeight="1.875rem"
          >
            Adding subtitles to your videos means your content will be
            accessible to more people. Most social media videos are watched on
            mute. More and more people are choosing to watch videos in this
            manner. Solution? Auto-captions! By adding subtitles to your videos,
            you can make your content accessible to thousands more viewers,
            including those who are deaf or hard of hearing.
          </Text>
          {/* </Stack> */}
          {/* 右侧图片 */}
          <Image
            maxW="34.125rem"
            maxH="26.375rem"
            src={prefixed("/add-to-video/card-body-1.png")}
            alt="card-body"
          />
        </Stack>
      </Card>
      <Card
        h="100%"
        borderRadius="30px"
        padding="2rem 1.5rem 0rem 1.5rem"
        bg="#000"
      >
        <Stack justifyContent="space-between">
          {/* 左侧文本 */}
          {/* <Stack h="100%"> */}
          <Heading
            as="h2"
            color="#E3E3E3"
            fontFamily="Eina03-SemiBold"
            fontSize="1.375rem"
            lineHeight="1.87rem"
          >
            Increase your reach
          </Heading>
          <Text
            color="#BDBDBD"
            fontSize="1rem"
            fontFamily="Eina03-Regular"
            fontWeight="400"
            lineHeight="1.875rem"
          >
            Adding subtitles to your videos means your content will be
            accessible to more people. Most social media videos are watched on
            mute. More and more people are choosing to watch videos in this
            manner. Solution? Auto-captions! By adding subtitles to your videos,
            you can make your content accessible to thousands more viewers,
            including those who are deaf or hard of hearing.
          </Text>
          {/* </Stack> */}
          {/* 右侧图片 */}
          <Image
            maxW="34.125rem"
            maxH="26.375rem"
            src={prefixed("/add-to-video/card-body-2.png")}
            alt="card-body"
          />
        </Stack>
      </Card>
      <DoubleFlyCardContainer />
    </Stack>
  );
}
