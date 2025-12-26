import { prefixed } from "@/utils/media";
import { Heading, Image, Stack } from "@chakra-ui/react";

export default function VideoMobile() {
  return (
    <Stack mt="4rem">
      <Heading
        as="h2"
        textAlign="center"
        color="#E3E3E3"
        fontSize="1.75rem"
        fontFamily="Eina03-SemiBold"
      >
        Learn more about how to add captions to your video:
      </Heading>
      <Image
        mt="1rem"
        src={prefixed("/add-to-video/video.png")}
        alt="video_mobile"
      />
    </Stack>
  );
}
