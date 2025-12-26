import { Grid, Box, Center, Flex, Link, Button, Text } from "@chakra-ui/react";
import LinkHome from "./button/linkHome";
import { Fragment } from "react";

export default function FeatureComparisonTable() {
  const tableData = [
    { feature: "AI Split footage", Topview: "✅", Munch: "✅" },
    {
      feature: "AI analyse footage, understand what the scene is talking about",
      Topview: "✅",
      Munch: "❌",
    },
    {
      feature: "Generate Realistic Avatar intro video",
      Topview: "✅",
      Munch: "❌",
    },
    { feature: "Video Script Writing", Topview: "✅", Munch: "✅" },
    {
      feature:
        "Smart Video Script based on Viral hook analysed from millions of best performance videos.",
      Topview: "✅",
      Munch: "❌",
    },
    { feature: "Subtitle", Topview: "✅", Munch: "✅" },
    { feature: "Simple to use", Topview: "✅", Munch: "❌" },
  ];

  const rowColors = ["gray.600", "gray.700"]; // 定义表格行颜色顺序

  return (
    <Center flexDirection="column">
      <Grid
        w={{ base: "100%", xl: "1172px" }}
        templateColumns="1fr 1fr 1fr"
        gap={0}
        mt="132px"
        boxShadow="lg"
        borderWidth="1px"
        borderRadius="20px"
      >
        <Box
          fontWeight="700"
          textAlign="center"
          p={2}
          bg="gray.600"
          borderTopLeftRadius="20px"
        >
          Feature
        </Box>
        <Box fontWeight="700" textAlign="center" p={2} bg="gray.600">
          TopView
        </Box>
        <Box
          fontWeight="700"
          textAlign="center"
          p={2}
          bg="gray.600"
          borderTopRightRadius="20px"
        >
          Munch
        </Box>
        {tableData.map((t, index) => {
          const colorIndex = index % rowColors.length;
          const isLastItem = index === tableData.length - 1;

          return (
            <Fragment key={index}>
              <Box
                bg={rowColors[colorIndex]}
                p={2}
                textAlign="center"
                borderBottomLeftRadius={isLastItem ? "20px" : "0"}
              >
                {t.feature}
              </Box>
              <Box bg={rowColors[colorIndex]} p={2} textAlign="center">
                {t.Topview}
              </Box>
              <Box
                bg={rowColors[colorIndex]}
                p={2}
                textAlign="center"
                borderBottomRightRadius={isLastItem ? "20px" : "0"}
              >
                {t.Munch}
              </Box>
            </Fragment>
          );
        })}
      </Grid>
      <Center mt="50px">
        <Flex
          w="100%"
          // justifyContent={index === 0 ? "flex-start" : "center"}
        >
          <Link isExternal href="/gen/m2v">
            <Button
              w="340px"
              h="64px"
              color="#fff"
              padding="24px 15px 24px 24px"
              borderRadius="12px"
              bg="hsl(245, 88%, 60%)"
              _hover={{
                bg: "hsl(245, 88%, 80%)",
              }}
            >
              <Text
                fontWeight="450"
                fontSize="16px"
                whiteSpace="normal"
                mr="16px"
              >
                Try AI Video Generator Now
              </Text>
            </Button>
          </Link>
        </Flex>
      </Center>
    </Center>
  );
}
