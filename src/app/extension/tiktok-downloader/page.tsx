import { Center, Heading, Stack } from "@chakra-ui/react";
import DownloadCard from "./(components)/downloadCard";
import PasteForm from "./(components)/pasteForm";
// import { getVideoDownloaded } from "@/server/api/services/tiktokdownLoader";
// import { BASE_URL } from "@/server/api/services/common";

export default async function Page() {
  return (
    <section>
      <Center>
        <Stack h="100%" mt="132px" color="white">
          {/* 标题 */}
          <Center flexDirection="column">
            <Heading as="h1" fontSize="60px" lineHeight="70px">
              TikTok Downloader
            </Heading>
            <Heading
              as="h2"
              w="833px"
              fontWeight="400"
              fontSize="22px"
              lineHeight="28px"
              textAlign="center"
            >
              Download any public video from TikTok, edit, save, and share
              anywhere!
            </Heading>
          </Center>
          <PasteForm />

          {/* 卡片列表 */}
          <Center>
            <DownloadCard />
          </Center>
        </Stack>
      </Center>
    </section>
  );
}
