import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { prefixed } from "@/utils/media";

export default function BodyMobile() {
  return (
    <Center bg="#000" h="100%">
      <Box w="90%" h="100%" display="flex" flexDirection="column">
        {/* 1.标题 */}
        {/* 1.1标题-彩色 */}
        <Center mt="4rem">
          <Heading
            as="h2"
            fontSize="2rem"
            fontWeight="700"
            textAlign="center"
            fontFamily="Gilroy"
            bg="linear-gradient(90deg, #5943F5 11.11%, #89FCC1 51.81%, #BB5BFF 89.01%)"
            bgClip="text"
          >
            <Box whiteSpace="nowrap">Create High Performance</Box>
            <Box>Short Video Ads</Box>
          </Heading>
        </Center>
        {/* 1.2标题-白色 */}
        <Center>
          <Heading
            textAlign="center"
            fontFamily="Gilroy"
            fontWeight="700"
            fontSize="2rem"
            lineHeight="1.177rem"
            mt="10px"
          >
            in Seconds
          </Heading>
        </Center>
        {/* 1.3标题-陪衬文本 */}
        <Center>
          <Text
            w="21.625rem"
            h="57px"
            mt="1.75rem"
            textAlign="center"
            color="#A7A5C2"
            fontFamily="Gilroy"
            fontWeight="500"
            fontSize="1rem"
            lineHeight="19px"
          >
            Create high-quality marketing videos from a simple product link. Use
            A.I’s power to control every aspect if your video editing process.
          </Text>
        </Center>
        {/* 2.两个按钮 */}
        <Center>
          <Stack>
            <HStack
              w="100%"
              mt="2rem"
              marginBottom="3rem"
              justifyContent="center"
            >
              <Button
                display="none"
                color="#fff"
                w="9.375rem"
                h="2.75rem"
                fontSize="0.875rem"
                borderRadius="8px"
                border="1px solid #626262"
                padding="20px 30px"
                bg="#000"
                fontWeight="450"
                fontFamily="Eina02-SemiBold"
              >
                Watch a Demo
              </Button>
              <Link target="_blank" href="/dashboard/home">
                <Button
                  w="9.375rem"
                  h="2.75rem"
                  fontSize="0.875rem"
                  borderRadius="8px"
                  padding="20px 30px"
                  bg="hsl(245, 88%, 60%)"
                  color="#fff"
                  fontWeight="450"
                  fontFamily="Eina02-SemiBold"
                >
                  Get Started Free
                </Button>
              </Link>
            </HStack>
            <Box
              bg="#1b1b1b"
              borderRadius="0.75rem"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              padding="1rem 0px"
              fontSize="0.85rem"
            >
              <Box>Contact Us:</Box>
              <Box>www.topview.ai@gmail.com</Box>
            </Box>
          </Stack>
        </Center>
        {/* 3.视频 */}
        <Center mt="69px">
          {/* <Box
            w="100%"
            h="647px"
            borderRadius="30px"
            bg="linear-gradient(107deg, #111 7.35%, #4E40F3 53.27%, #BB5BFF 95.25%)"
          >
            <Box
              h="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            > */}
          <video
            style={{ maxWidth: "1172px", width: "100%", borderRadius: "30px" }}
            autoPlay
            muted
            controls
            src={prefixed("/index.mp4")}
          ></video>
          {/* </Box>
          </Box> */}
        </Center>
        {/* 4.Loved by */}
        <Center>
          <Text
            w="95px"
            h="30px"
            fontSize="22px"
            fontWeight="400"
            fontFamily="Eina03-SemiBold"
            color="#A9B4C4"
            marginTop="85px"
          >
            Loved by
          </Text>
        </Center>
        {/* 5.商家logo列表 */}
        <Center>
          <figure>
            <Image src={prefixed("/logo-list.png")} alt="this is logo list" />
          </figure>
        </Center>
      </Box>
    </Center>
  );
}
