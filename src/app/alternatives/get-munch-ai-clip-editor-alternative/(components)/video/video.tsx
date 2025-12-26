import { prefixed } from "@/utils/media";
import { Center, Heading, Stack } from "@chakra-ui/react";

export default function Video() {
  return (
    <Stack mt="114px">
      <Heading as="h2" textAlign="center" color="#E3E3E3" fontSize="30px">
        Learn more about how to use TopView.ai
      </Heading>

      <Center mt="30px">
        <video
          width="90%"
          controls
          style={{
            maxWidth: "1172px",
            borderRadius: "20px",
          }}
        >
          <source
            src={prefixed("/videos/topview_introduction.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </Center>
    </Stack>
  );
}
