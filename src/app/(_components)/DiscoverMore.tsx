import { type NotionPage } from "@/types/notion";
import {
  Box,
  Button,
  Center,
  Heading,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function DiscoverMore({
  dataSource,
}: {
  dataSource: NotionPage[];
}) {
  return (
    <>
      {dataSource.length > 0 && (
        <Center>
          <Box
            w={{ base: "90%", xl: "1172px" }}
            bg="#1a1a1a"
            p={{ base: "2", xl: "6" }}
            borderRadius="md"
            boxShadow="lg"
          >
            <Heading as="h2" fontSize="xl" mb="4">
              {dataSource[0]?.title}
            </Heading>
            <SimpleGrid columns={{ base: 2, xl: 5 }} spacing="4">
              {dataSource.map((page) => (
                <Button
                  key={page.pageId}
                  color="#fff"
                  fontSize="14px"
                  variant="outline"
                >
                  <Link
                    isExternal
                    _hover={{
                      textDecoration: "none",
                    }}
                    w="100%"
                    h="100%"
                    href={page.subTitle[0]?.href}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    {page.subTitle[0]?.plain_text}
                  </Link>
                </Button>
              ))}
            </SimpleGrid>
          </Box>
        </Center>
      )}
    </>
  );
}
