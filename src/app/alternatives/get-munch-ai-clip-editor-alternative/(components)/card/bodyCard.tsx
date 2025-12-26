import { Card, CardBody, HStack, Heading, Text } from "@chakra-ui/react";

export default function BodyCard() {
  return (
    <Card
      color="#fff"
      h="100%"
      marginTop="132px"
      borderRadius="30px"
      bg="#000"
      paddingTop="52px"
      paddingLeft="50px"
    >
      <Heading
        as="h2"
        color="#E3E3E3"
        fontFamily="Eina03-SemiBold"
        fontSize="30px"
        fontWeight="400"
        padding="0"
      >
        Add subtitles to your video with AI with 98.5% accuracy
      </Heading>
      <CardBody padding="0" mt="18px">
        <HStack spacing="58px" alignItems="flex-start">
          <Text
            w="479px"
            color="#BDBDBD"
            fontFamily="Eina03-Regular"
            fontSize="16px"
            fontWeight="400"
            lineHeight="30px"
          >
            Manually typing subtitles can be a painful and dragging process.
            With VEED, you can add subtitles to your video in one click! Adding
            subtitles can increase your content’s reach and improve its
            accessibility. VEED uses powerful speech recognition software to let
            you instantly add captions to your video. You can also manually
            upload a file (SRT, VTT, or TXT) or add subs.
          </Text>
          <Text
            w="538px"
            color="#BDBDBD"
            fontFamily="Eina03-Regular"
            fontSize="16px"
            fontWeight="400"
            lineHeight="30px"
          >
            You can download your subtitle file for documentation and
            repurposing. Translate your captions to different languages. It’s
            98.5% accurate and fast. Plus, you will have access to our
            professional video editing software to help you edit your videos to
            perfection. Translating and downloading subtitles are available to
            premium subscribers. Check our pricing page for more info.
          </Text>
        </HStack>
      </CardBody>
    </Card>
  );
}
