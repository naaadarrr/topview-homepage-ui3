import React, { useEffect, useMemo, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Flex,
  ModalCloseButton,
  Text,
  Box,
  Image,
  Spinner,
} from "@chakra-ui/react";
import { prefixed } from "@/utils/media";
import { usePathname } from "next/navigation";
import Loading from "@/components/Loading";

function TutorialVideoModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const [selectedVideoId, setSelectVideoId] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const handleClose = () => {
    onClose();
  };
  const prefixedAIGC_WEB =
    "https://d1735p3aqhycef.cloudfront.net/aigc-web/public";
  const HELP_VIDEO_LIST = [
    {
      id: 0,
      title: "How to convert media materials to video with Topview",
      desc: "Just upload your materials and ideas, and AI will take care of the video production for you.",
      poster: `${prefixedAIGC_WEB}/helpCenter/m2v_help_video.png`,
      videoUrl: `${prefixedAIGC_WEB}/helpCenter/m2v_help_video.mp4`,
      videoIframe: (
        <video
          width="90%"
          controls
          poster={`${prefixedAIGC_WEB}/helpCenter/m2v_help_video.png`}
        >
          <source
            src={`${prefixedAIGC_WEB}/helpCenter/m2v_help_video.mp4`}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      ),
    },
  ];

  const currentHelpVideo = useMemo(
    () =>
      HELP_VIDEO_LIST.find((helpVideo) => helpVideo.id === selectedVideoId) ??
      HELP_VIDEO_LIST[0],
    [selectedVideoId],
  )!;

  useEffect(() => {
    isOpen && setIsLoading(true);
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={handleClose} isCentered>
      <ModalOverlay bg="transparent" />
      <ModalContent
        maxW="1046px"
        w="1046px"
        p="15px 19px 30px 22px"
        bg="#272727"
        borderRadius="8px"
        border="1px solid #434343"
      >
        <ModalBody p="0">
          <Flex alignItems="center" justifyContent="space-between" mb="8px">
            <Text fontSize="16px" fontWeight="500">
              Tutorials
            </Text>
            <ModalCloseButton
              pos="relative"
              top="0"
              left="0"
              stroke="white"
              fontSize="13px"
            />
          </Flex>
          <Flex
            gap="14px"
            h="552px"
            p="16px  7px 0 16px"
            bg="#000000"
            border="0.85px solid #282B2F"
            borderRadius="12px"
          >
            {/* 视频模块 */}
            <Box w="762px">
              <Box
                pos="relative"
                width="762px"
                height="427px"
                mb="16px"
                border="10px"
                overflow="hidden"
              >
                {/* {isLoading && (
                  <Flex
                    position="absolute"
                    align="center"
                    justify="center"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                  >
                    <Spinner
                      thickness="4px"
                      speed="0.65s"
                      emptyColor="gray.200"
                      color="blue.500"
                      size="xl"
                    />
                  </Flex>
                )} */}
                {!pathname.includes("/gen/m2v") ? (
                  currentHelpVideo.videoIframe
                ) : (
                  <video
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    src={currentHelpVideo.videoUrl}
                    controls
                    onLoadedData={() => {
                      console.log("12321321");

                      setIsLoading(false);
                    }}
                  />
                )}

                {/* {isLoading && ( */}

                {/* )} */}
              </Box>

              <Box fontSize="24px" fontWeight="500" color="#fff">
                {currentHelpVideo.title}
              </Box>
              <Text fontSize="14px" fontWeight="500">
                {currentHelpVideo.desc}
              </Text>
            </Box>
            {/* 视频选择列表 */}
            <Flex direction="column" gap="16px">
              {HELP_VIDEO_LIST.map((helpVideo) => (
                <Box
                  key={helpVideo.id}
                  w="200px"
                  h="113px"
                  borderRadius="10px"
                  border="2px solid #3E3E3E"
                  bg={`url(${helpVideo.poster})`}
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  cursor="pointer"
                  _hover={{
                    borderColor: "#4E40F3",
                  }}
                  {...(currentHelpVideo.id === helpVideo.id && {
                    borderColor: "#4E40F3",
                  })}
                  onClick={() => {
                    if (helpVideo.id !== currentHelpVideo.id) {
                      setIsLoading(true);
                      setSelectVideoId(helpVideo.id);
                    }
                  }}
                ></Box>
              ))}
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default TutorialVideoModal;
