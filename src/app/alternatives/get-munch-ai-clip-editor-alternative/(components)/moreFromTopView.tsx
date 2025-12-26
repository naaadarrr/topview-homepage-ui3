import { Box, Center, HStack, Heading } from "@chakra-ui/react";
import PictureDescriptionCard from "./card/pictureDescriptionCard";

export default function MoreFromTopView() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      h="588px"
      marginTop="54px"
      marginBottom="103px"
    >
      <Center>
        <Heading
          w="605px"
          h="41px"
          textAlign="center"
          fontSize="30px"
          color="#E3E3E3"
        >
          More from Topview
        </Heading>
      </Center>
      <HStack spacing="65px" marginTop="151px">
        <PictureDescriptionCard srcImg="/add-to-video/card-header-0.png" />
        <PictureDescriptionCard srcImg="/add-to-video/card-header-1.png" />
        <PictureDescriptionCard srcImg="/add-to-video/card-header-2.png" />
      </HStack>
    </Box>
  );
}
