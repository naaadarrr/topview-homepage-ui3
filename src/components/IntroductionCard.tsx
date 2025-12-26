import { type IntroductionCard } from "@/types/make/ai-video-generator";
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
// 展示组件
export default function IntroductionCard({
  head,
  bodyBold,
  body,
  bodyBlue,
  bodyRest,
}: IntroductionCard) {
  return (
    <Card w={{ base: "100%", xl: "33%" }} borderRadius="30px">
      <CardHeader pb="10px">
        <Heading as="h3" fontSize="25px">
          {head}
        </Heading>
      </CardHeader>
      <CardBody pt={0}>
        <Text as="span" fontWeight="700">
          {bodyBold}
        </Text>
        <Text as="span" fontWeight="500">
          {body}
        </Text>
        {bodyBlue && bodyRest && (
          <>
            <Link
              href="/"
              isExternal
              _hover={{
                textDecoration: "none",
              }}
            >
              <Text as="span" color="blue.500" fontWeight="600">
                {bodyBlue}
              </Text>
            </Link>
            <Text as="span">{bodyRest}</Text>
          </>
        )}
      </CardBody>
    </Card>
  );
}
