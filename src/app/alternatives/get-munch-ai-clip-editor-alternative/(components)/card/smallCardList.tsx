import {
  Button,
  Card,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import LeftArrow from "../icons/leftArrow";
import { LargeRightArrow } from "../icons/rightArrow";
import { prefixed } from "@/utils/media";

export default function SmallCardList() {
  return (
    <Stack spacing="34px" h="469px" marginTop="112px" bg="#101010">
      <Heading
        as="h2"
        h="41px"
        color="#E3E3E3"
        textAlign="center"
        fontFamily="Eina03-SemiBold"
        fontSize="30px"
        fontWeight="450"
      >
        How to add subtitles to a video:
      </Heading>
      <HStack spacing="30px" justifyContent="center">
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
      </HStack>
      <HStack justifyContent="flex-end">
        <Button w="50px" h="50px" borderRadius="50%" bg="hsl(245, 8%, 13%)">
          <LeftArrow />
        </Button>
        <Button w="50px" h="50px" borderRadius="50%" bg="hsl(245, 88%, 60%)">
          <LargeRightArrow />
        </Button>
      </HStack>
    </Stack>
  );
}
