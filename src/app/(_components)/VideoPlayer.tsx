import { type NotionPage } from "@/types/notion";
import { prefixed } from "@/utils/media";
import { Center, Flex, Heading, Image, Stack } from "@chakra-ui/react";
import { Fragment } from "react";

export default function VideoPlayer({
  dataSource,
}: {
  dataSource: NotionPage[];
}) {
  return (
    <>
      {dataSource.length > 0 && (
        <Center
          flexDirection="column"
          w="100%"
          mt={{ base: "1.5rem", xl: "100px" }}
        >
          <Stack w="90%" alignItems="center">
            {dataSource.map((page) => (
              <Fragment key={page.pageId}>
                <Heading as="h2" mb={4} textAlign="center">
                  {page.title}
                </Heading>
                <video
                  width="90%"
                  controls
                  style={{
                    borderRadius: "20px",
                  }}
                >
                  <source src={dataSource[0]?.media[0]} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Fragment>
            ))}
          </Stack>
        </Center>
      )}
    </>
  );
}
