"use client";

import { Center, Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (searchParams.get("from") !== "extension") {
      router.push("/extension/tiktok-downloader");
    }
  }, []);

  return (
    <Box bg="#101010" h="100%" minH="100vh">
      <Box w="100%" h="100%" className="TiktokBatchDownload"></Box>
    </Box>
  );
}
