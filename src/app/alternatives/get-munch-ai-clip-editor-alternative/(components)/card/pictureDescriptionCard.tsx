import { prefixed } from "@/utils/media";
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

export default function PictureDescriptionCard({ srcImg }: { srcImg: string }) {
  return (
    <Card
      borderRadius="30px"
      w="370px"
      h="396px"
      bg="#1F1F24"
      color="#fff"
      overflow="hidden"
    >
      <CardHeader padding="0">
        <figure>
          <Image src={prefixed(srcImg)} alt="card-top-img" />
        </figure>
      </CardHeader>
      <CardBody padding="33px 15px 41px 30px">
        <Heading fontSize="26px" fontFamily="Eina03-SemiBold" lineHeight="30px">
          Add auto-captions
        </Heading>
        <Text
          mt="14px"
          color="#BDBDBD"
          fontFamily="Eina03-Regualr"
          fontSize="18px"
          fontWeight="400"
          lineHeight="22px"
        >
          Select ‘Auto Subtitle’ from the subtitle tool, and the software will
          start transcribing.
        </Text>
      </CardBody>
    </Card>
  );
}
