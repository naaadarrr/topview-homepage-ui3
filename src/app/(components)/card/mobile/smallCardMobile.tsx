import { Box, Card, Center, Heading, Stack, Text } from "@chakra-ui/react";
export default function SmallCardMobile() {
  return (
    <Center mt="4rem">
      <Stack w="100%" alignItems="center">
        <Heading
          fontFamily="Gilroy"
          fontSize="2rem"
          lineHeight="2.41rem"
          textAlign="center"
        >
          Boost your short video ads ROI by testing more ads with less effort
        </Heading>
        <Text
          w="22.75rem"
          h="4.75rem"
          color="#A7A5C2"
          fontSize="1rem"
          textAlign="center"
          mt="1rem"
          lineHeight="1.17rem"
        >
          TopviewAI helps you generate unlimited ad variations to test and find
          the ones that resonate most with your audience, maximizing your
          revenue.
        </Text>
        <Stack mt="2rem" spacing="31px">
          <Card minW="24.5rem" h="12.5rem" borderRadius="24px" padding="0px">
            <Stack h="100%" justifyContent="center" alignItems="center">
              <Heading
                as="h2"
                h="5.81rem"
                color="#6F63FF"
                fontFamily="Eina03-Regular"
                fontWeight="400"
                fontSize="5.6rem"
                lineHeight="7.625rem"
                letterSpacing="-4.5%"
              >
                2.7x
              </Heading>
              <Text
                marginTop="11px"
                fontFamily="Eina01-Bold"
                fontSize="1.375rem"
                fontWeight="800"
              >
                More leads*
              </Text>
            </Stack>
          </Card>
          <Card minW="24.5rem" h="12.5rem" borderRadius="24px" padding="0px">
            <Stack h="100%" justifyContent="center" alignItems="center">
              <Heading
                as="h2"
                h="5.81rem"
                color="#6F63FF"
                fontFamily="Eina03-Regular"
                fontWeight="400"
                fontSize="5.6rem"
                lineHeight="7.625rem"
                letterSpacing="-4.5%"
              >
                1.7x
              </Heading>
              <Text
                marginTop="11px"
                fontFamily="Eina01-Bold"
                fontSize="1.375rem"
                fontWeight="800"
              >
                Higher ROI*
              </Text>
            </Stack>
          </Card>
          <Card minW="24.5rem" h="12.5rem" borderRadius="24px" padding="0px">
            <Stack h="100%" justifyContent="center" alignItems="center">
              <Heading
                as="h2"
                h="5.81rem"
                color="#6F63FF"
                fontFamily="Eina03-Regular"
                fontWeight="400"
                fontSize="5.6rem"
                lineHeight="7.625rem"
                letterSpacing="-4.5%"
              >
                90
                <Box as="span" fontSize="3.5rem">
                  %
                </Box>
              </Heading>
              <Text
                marginTop="11px"
                fontFamily="Eina01-Bold"
                fontSize="1.375rem"
                fontWeight="800"
              >
                Cheaper than UGC ads
              </Text>
            </Stack>
          </Card>
        </Stack>
      </Stack>
    </Center>
  );
}
