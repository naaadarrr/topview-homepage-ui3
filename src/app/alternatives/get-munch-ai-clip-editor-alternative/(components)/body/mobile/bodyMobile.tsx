import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import UploadCloud from "../../icons/uploadCloud";
import { prefixed } from "@/utils/media";

export default function BodyMobile() {
  return (
    <Stack w="100%" mt="4rem" alignItems="center">
      {/* 左边-文字标题 */}
      <Heading
        as="h2"
        w="409px"
        fontFamily="Eina04-Bold"
        fontSize="2.125rem"
        fontWeight="700"
        lineHeight="41.11px"
        textAlign="center"
      >
        Add Subtitles to Video
      </Heading>
      <Text
        color="#BDBDBD"
        fontFamily="Eina03-Regular"
        fontSize="1rem"
        fontWeight="400"
        textAlign="center"
      >
        Add captions and subtitles to your video. Automatic, seamless, and
        pain-free!
      </Text>
      <Button
        mt="1rem"
        w="17.25rem"
        h="3.325rem"
        color="#fff"
        padding="24px 15px 24px 24px"
        borderRadius="12px"
        bg="hsl(245, 88%, 60%)"
      >
        <HStack spacing="13px">
          <Text
            fontFamily="Eina02-SemiBold"
            fontWeight="450"
            fontSize="0.935rem"
          >
            Add subtitles to your video
          </Text>
          <Box
            borderRadius="10px"
            w="40px"
            h="40px"
            bg="#fff"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <UploadCloud />
          </Box>
        </HStack>
      </Button>
      {/* 右边图片 */}
      <figure>
        <Image
          mt="4rem"
          src={prefixed("/add-to-video/body.png")}
          alt="add to video-body-img"
        />
      </figure>
    </Stack>
  );
}
