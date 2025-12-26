import { prefixed } from "@/utils/media";
import { Card, Heading, Image, Stack, Text } from "@chakra-ui/react";

export default function SmallCardListMobile() {
  return (
    <Stack spacing="34px" marginTop="4rem" bg="#101010">
      <Heading
        as="h2"
        color="#E3E3E3"
        textAlign="center"
        fontFamily="Eina03-SemiBold"
        fontSize="1.5rem"
        fontWeight="450"
        lineHeight="2.04rem"
      >
        Add subtitles to your video with AI with 98.5% accuracy
      </Heading>
      <Stack spacing="1.5rem" alignItems="center">
        <Card
          w="370px"
          h="310px"
          borderRadius="30px"
          bg="#1F1F24"
          justifyContent="center"
          alignItems="center"
          color="#fff"
        >
          <Stack>
            <figure>
              <Image
                w="49.5px"
                h="46px"
                src={prefixed("/add-to-video/small-card-img-0.png")}
                alt="small-card-img-0"
              />
            </figure>
            <Heading
              mt="12px"
              fontFamily="Eina03-SemiBold"
              fontSize="26px"
              lineHeight="30px"
            >
              Add auto-captions
            </Heading>
            <Text
              w="291px"
              color="#BDBDBD"
              fontFamily="Gilroy"
              fontSize="18px"
              fontWeight="400"
              lineHeight="22px"
            >
              Select ‘Auto Subtitle’ from the subtitle tool, and the software
              will start transcribing.
            </Text>
          </Stack>
        </Card>
        <Card
          w="370px"
          h="310px"
          borderRadius="30px"
          bg="#1F1F24"
          justifyContent="center"
          alignItems="center"
          color="#fff"
        >
          <Stack>
            <figure>
              <Image
                w="49.5px"
                h="46px"
                src={prefixed("/add-to-video/small-card-img-1.png")}
                alt="small-card-img-1"
              />
            </figure>
            <Heading
              mt="12px"
              fontFamily="Eina03-SemiBold"
              fontSize="26px"
              lineHeight="30px"
            >
              Add auto-captions
            </Heading>
            <Text
              w="291px"
              color="#BDBDBD"
              fontFamily="Gilroy"
              fontSize="18px"
              fontWeight="400"
              lineHeight="22px"
            >
              Select ‘Auto Subtitle’ from the subtitle tool, and the software
              will start transcribing.
            </Text>
          </Stack>
        </Card>
        <Card
          w="370px"
          h="310px"
          borderRadius="30px"
          bg="#1F1F24"
          justifyContent="center"
          alignItems="center"
          color="#fff"
        >
          <Stack>
            <figure>
              <Image
                w="49.5px"
                h="46px"
                src={prefixed("/add-to-video/small-card-img-2.png")}
                alt="small-card-img-2"
              />
            </figure>
            <Heading
              mt="12px"
              fontFamily="Eina03-SemiBold"
              fontSize="26px"
              lineHeight="30px"
            >
              Add auto-captions
            </Heading>
            <Text
              w="291px"
              color="#BDBDBD"
              fontFamily="Gilroy"
              fontSize="18px"
              fontWeight="400"
              lineHeight="22px"
            >
              Select ‘Auto Subtitle’ from the subtitle tool, and the software
              will start transcribing.
            </Text>
          </Stack>
        </Card>
      </Stack>
    </Stack>
  );
}
