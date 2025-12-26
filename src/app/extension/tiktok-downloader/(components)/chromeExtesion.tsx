import { Button, Center, Flex, Link, Text } from "@chakra-ui/react";

interface ChromeExtensionProps {
  controller: AbortController;
  setController: (arg: AbortController) => void;
  videoUrl: string | undefined;
  isDownLoading: number;
  setIsDownLoading: (arg: number) => void;
}

export default function ChromeExtesion({
  controller,
  setController,
  videoUrl,
  isDownLoading,
  setIsDownLoading,
}: ChromeExtensionProps) {
  // 下载视频到本地电脑
  const handleDownload = async () => {
    if (videoUrl != null) {
      try {
        const response = await fetch(videoUrl);
        if (response.ok) {
          const videoData = await response.blob(); // 获取视频的 Blob 数据
          const url = URL.createObjectURL(videoData);

          // 拿到uuid的pathname作为下载出来的文件名
          const pathname = new URL(url).pathname;
          const filename = pathname.split("/").pop();

          const link = document.createElement("a");
          link.href = url;
          link.download = `${filename}.mp4`; // 设置下载文件的文件名
          document.body.appendChild(link); // 添加到文档中以确保能够触发点击事件
          link.click();
          document.body.removeChild(link); // 下载后从文档中移除
          URL.revokeObjectURL(url); // 释放URL对象
        } else {
          console.error("视频下载失败:", response.statusText);
        }
      } catch (error) {
        console.error("视频下载出错:", error);
      }
    }
  };

  return (
    <Center flexDirection="column" mt="76px" transform="translateY(-40%)">
      {isDownLoading === 2 && (
        <>
          <Button
            w="290px"
            h="64px"
            bg="hsl(245, 88%, 60%)"
            borderRadius="12px"
            fontSize="18px"
            fontWeight="450"
            color="#fff"
            padding="16px auto"
            leftIcon={<DownlaodSvg />}
            onClick={handleDownload}
          >
            Download Now
          </Button>

          <Button
            gap="6px"
            mt="19px"
            mb="64px"
            border="none"
            bg="transparent"
            _hover={{ bg: "transparent" }}
            color="#fff"
            // 重置，回到第一步
            onClick={() => setIsDownLoading(0)}
          >
            <DownloadAnother />
            <Text as="span">Download another</Text>
          </Button>
        </>
      )}

      <Text
        fontSize="18px"
        fontWeight="400"
        lineHeight="28px"
        textAlign="center"
      >
        Batch download TikTok videos with Chrome extension
      </Text>
      <Link
        isExternal
        href="https://chromewebstore.google.com/detail/tiktok-bulk-downloader/loickodmkmmgfdiohdfpmcakbklliecm?hl=zh-CN&utm_source=ext_sidebar"
      >
        <Button
          zIndex="2"
          w="290px"
          h="64px"
          mt="17px"
          bg="hsl(245, 68%, 60%)"
          _hover={{
            bg: "hsl(245, 68%, 80%)",
          }}
          color="#fff"
          size="lg"
          padding="12px 15px 12px 23px"
          borderRadius="12px"
          fontSize="18px"
          fontWeight="450"
          gap="15px"
        >
          <Text>Get Chrome Extension</Text>
          <ChromeExtensionSvg />
        </Button>
      </Link>

      {isDownLoading === 1 && (
        <Button
          mt="1.5rem"
          bg="hsl(0, 0%, 85%)"
          borderRadius="8px"
          w="150px"
          h="50px"
          onClick={() => {
            // 1.中止请求
            controller.abort();
            // 重置controller实例
            setController(new AbortController());
            // 2.回退到初始界面
            setIsDownLoading(0);
          }}
        >
          <ClearIcon />
          <Text>Clear</Text>
        </Button>
      )}
    </Center>
  );
}

function ChromeExtensionSvg() {
  return (
    <Flex
      w="40px"
      h="40px"
      justifyContent="center"
      alignItems="center"
      bg="#fff"
      borderRadius="10px"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.802 8.069L6.746 14.9C7.36589 16.0239 8.32998 16.9194 9.49656 17.4547C10.6631 17.99 11.9707 18.137 13.227 17.874L10.881 21.938C5.885 21.382 2 17.145 2 12C2 10.604 2.286 9.276 2.802 8.069ZM21.168 8C21.7186 9.26157 22.0019 10.6235 22 12C22 17.118 18.155 21.338 13.196 21.93L17.144 15.09C17.688 14.188 18 13.13 18 12C18.002 10.5237 17.4578 9.09893 16.472 8H21.168ZM12 8C13.0609 8 14.0783 8.42143 14.8284 9.17158C15.5786 9.92172 16 10.9391 16 12C16 13.0609 15.5786 14.0783 14.8284 14.8284C14.0783 15.5786 13.0609 16 12 16C10.9391 16 9.92172 15.5786 9.17157 14.8284C8.42143 14.0783 8 13.0609 8 12C8 10.9391 8.42143 9.92172 9.17157 9.17158C9.92172 8.42143 10.9391 8 12 8ZM12 2C13.5527 1.99884 15.0842 2.35978 16.4729 3.05414C17.8617 3.74851 19.0693 4.75718 20 6H12C10.7365 6.00015 9.50533 6.39894 8.48171 7.13958C7.4581 7.88022 6.69427 8.92496 6.299 10.125L3.953 6.062C4.88191 4.80144 6.09424 3.77699 7.49209 3.07138C8.88995 2.36576 10.4341 1.99876 12 2Z"
          fill="#4E40F3"
        />
      </svg>
    </Flex>
  );
}

function DownlaodSvg() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.9987 21.3335L9.33203 14.6668L11.1987 12.7335L14.6654 16.2002V5.3335H17.332V16.2002L20.7987 12.7335L22.6654 14.6668L15.9987 21.3335ZM7.9987 26.6668C7.26536 26.6668 6.63781 26.4059 6.11603 25.8842C5.59425 25.3624 5.33292 24.7344 5.33203 24.0002V20.0002H7.9987V24.0002H23.9987V20.0002H26.6654V24.0002C26.6654 24.7335 26.4045 25.3615 25.8827 25.8842C25.3609 26.4068 24.7329 26.6677 23.9987 26.6668H7.9987Z"
        fill="white"
      />
    </svg>
  );
}

function DownloadAnother() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.6517 6.35C16.9116 5.60485 16.0313 5.01356 15.0616 4.61023C14.0919 4.2069 13.052 3.99951 12.0017 4C7.58172 4 4.01172 7.58 4.01172 12C4.01172 16.42 7.58172 20 12.0017 20C15.7317 20 18.8417 17.45 19.7317 14H17.6517C17.2398 15.1695 16.4751 16.1824 15.4631 16.8988C14.4511 17.6153 13.2417 18 12.0017 18C8.69172 18 6.00172 15.31 6.00172 12C6.00172 8.69 8.69172 6 12.0017 6C13.6617 6 15.1417 6.69 16.2217 7.78L13.0017 11H20.0017V4L17.6517 6.35Z"
        fill="white"
      />
    </svg>
  );
}

function ClearIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.4 17L12 13.4L15.6 17L17 15.6L13.4 12L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4L10.6 12L7 15.6L8.4 17ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6867 5.825 19.9743 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26333 14.6833 2.00067 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31333 6.88333 4.02567 5.825 4.925 4.925C5.825 4.025 6.88333 3.31267 8.1 2.788C9.31667 2.26333 10.6167 2.00067 12 2C13.3833 2 14.6833 2.26267 15.9 2.788C17.1167 3.31333 18.175 4.02567 19.075 4.925C19.975 5.825 20.6877 6.88333 21.213 8.1C21.7383 9.31667 22.0007 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6867 17.1167 19.9743 18.175 19.075 19.075C18.175 19.975 17.1167 20.6877 15.9 21.213C14.6833 21.7383 13.3833 22.0007 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
        fill="black"
      />
    </svg>
  );
}
