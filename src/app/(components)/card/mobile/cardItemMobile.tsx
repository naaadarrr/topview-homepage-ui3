import { prefixed } from "@/utils/media";
import {
  Card,
  CardBody,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function CardItemMobile({
  srcOne,
  srcTwo,
  title,
  desc,
  descTwo,
}: {
  srcOne: string;
  srcTwo: string;
  title: string;
  desc: string;
  descTwo?: string;
}) {
  return (
    <Card
      h="711px"
      borderRadius="30px"
      bg="linear-gradient(251deg, #1C1C1C 10.02%, #121111 92.51%)"
      overflow="hidden"
    >
      <CardBody padding="2rem 1rem">
        <Center>
          <Flex flexDirection="column" h="100%">
            <Stack w="339px" align="stretch" color="#fff">
              <figure>
                <Image
                  alignSelf="flex-start"
                  src={prefixed(srcOne)}
                  alt="Card-Img"
                  w="232px"
                />
              </figure>
              <Heading
                as="h2"
                h="2.5rem"
                marginTop="10px"
                fontFamily="Gilroy"
                fontSize="2.125rem"
                fontWeight="900"
                lineHeight="2.56rem"
                bg="linear-gradient(90deg, #76E56F 11.11%, #71F3F3 51.23%, #9184F7 89.01%)"
                bgClip="text"
              >
                {title}
              </Heading>
              <Text
                fontFamily="Eina03-SemiBold"
                fontSize={
                  desc === "Start with a viral hook, and let A.I do the rest."
                    ? ".95rem"
                    : "1.25rem"
                }
                fontWeight="600"
                lineHeight="1.4rem"
              >
                {desc}
              </Text>
              <Text
                w="330px"
                fontFamily="Eina03-SemiBold"
                fontSize=".95rem"
                fontWeight="600"
                lineHeight="1.3rem"
                color="hsla(245, 19%, 70%, 1)"
              >
                {descTwo}
              </Text>
            </Stack>
            <video
              style={{
                maxWidth: "292px",
                borderRadius: "30px",
                marginTop: "3rem",
              }}
              autoPlay
              muted
              src={prefixed(srcTwo)}
            ></video>
          </Flex>
        </Center>
      </CardBody>
    </Card>
  );
}
