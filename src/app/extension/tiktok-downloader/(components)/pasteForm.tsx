/* eslint-disable */
"use client";

import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ProcessIng from "./processIng";
import ChromeExtesion from "./chromeExtesion";
import { Field, Formik } from "formik";
// import { trpc } from "@/server/api/trpc";
interface FormFiled {
  tiktokVideoUrls: string[];
}

export default function PasteForm() {
  const toast = useToast();
  const [isPasted, setIsPasted] = useState(false);
  // 0代表还没开始下载；1代表下载中；2代表下载完成
  const [isDownLoading, setIsDownLoading] = useState(0);
  const [videoUrl, setVideoUrl] = useState<string | undefined>();
  const [posterImg, setPosterImg] = useState<string | undefined>();
  const [controller, setController] = useState(new AbortController());

  // 粘贴过了，就清除；否则，把文本粘贴进Input中
  async function handlePaste(setFieldValue: any) {
    const tiktokVideoUrlsInput = document.querySelector(
      'input[name="tiktokVideoUrls"]',
    ) as HTMLInputElement;

    setIsPasted((prevIsPasted) => !prevIsPasted);
    if (isPasted) {
      setFieldValue("tiktokVideoUrls", [""]);
      tiktokVideoUrlsInput.value = "";
    } else {
      if (tiktokVideoUrlsInput != null) {
        const text = await navigator.clipboard.readText().then((clipText) => {
          setFieldValue("tiktokVideoUrls", clipText);
          return clipText;
        });
        tiktokVideoUrlsInput.value = text;
      }
    }
  }

  // 轮询get接口
  async function fetchVideoStatusUntilSuccess(
    videoId: string,
    controller: AbortController,
  ) {
    let status = "";
    let videoItemRes;

    while (status !== "success") {
      videoItemRes = await fetch(
        `/api/tiktok-download/query?videoId=${videoId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          signal: controller.signal,
        },
      ).then((res) => res.json());

      status = videoItemRes.result.status;

      if (status !== "success") {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // 等待1秒钟再继续下一次轮询
      }
    }

    return videoItemRes;
  }

  // 1. 先发post请求
  // 2. 查询video下载情况
  // 3. 查到video在服务器下载好后，前端才展示
  async function downLoadVideo(values: FormFiled) {
    // 重置粘贴状态
    setIsPasted(false);
    // 此时是pending状态
    setIsDownLoading((isDownLoading) => isDownLoading + 1);
    const postRes = await fetch(`/api/tiktok-download/submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
      signal: controller.signal,
    });

    if (postRes.ok) {
      const data = await postRes.json();
      const videoId = data.result[0].videoId;
      // post请求发出去后，查询是否success
      const videoItemRes = await fetchVideoStatusUntilSuccess(
        videoId,
        controller,
      );

      setVideoUrl(videoItemRes.result.videoUrl);
      setPosterImg(videoItemRes.result.coverUrl);
    } else {
      toast({
        description: "Something went wrong.",
        status: "error",
        position: "top",
        duration: 1500,
      });
    }
    // fullfilled状态
    setIsDownLoading((isDownLoading) => isDownLoading + 1);
  }

  return (
    <>
      {/* 输入框 */}
      {/* 下载的时候不显示 */}
      {isDownLoading > 0 || (
        <Formik
          initialValues={{ tiktokVideoUrls: [""] }}
          onSubmit={(values: any, { setSubmitting }) => {
            values.tiktokVideoUrls = [values.tiktokVideoUrls];
            let error;
            const tiktokRegex = /^(https?:\/\/)?(www\.)?tiktok\.com\/.*$/;

            values.tiktokVideoUrls.forEach((value: any) => {
              if (!tiktokRegex.test(value)) {
                error = "Please enter a valid TikTok video URL";
              }
            });
            console.log("error", error);
            if (error) {
              toast({
                description: error,
                status: "error",
                position: "top",
                duration: 1500,
              });
              setSubmitting(false); // Stop the form from submitting
            } else {
              // If no errors, proceed with form submission
              downLoadVideo(values);
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setFieldValue,
          }) => {
            return (
              <Center>
                <form onSubmit={handleSubmit}>
                  <FormControl
                    w="573px"
                    h="68px"
                    mt="39px"
                    display="flex"
                    bg="hsl(0, 0%, 10%)"
                    border="1px solid hsl(0, 0%, 26%)"
                    borderRadius="12px"
                    alignItems="center"
                    padding="8px"
                    transition="all 0.3s"
                    _focus={{
                      border: "1px solid hsl(245, 88%, 60%)",
                      transform: "scale(1.0125)",
                    }}
                  >
                    <Flex
                      alignItems="center"
                      pl="8px"
                      w="calc(100% - 146px)"
                      // justifyContent="space-between"
                    >
                      <PasteUrlSvg />
                      <Field
                        style={{
                          background: "transparent",
                          flex: 1,
                          border: "none",
                          outline: "none",
                          paddingLeft: "13px",
                          paddingRight: "0px",
                        }}
                        type="url"
                        name="tiktokVideoUrls"
                        required
                        placeholder="Paste a TikTok video URL here"
                      />
                      <Button
                        w="99px"
                        h="43px"
                        padding="13px 16px"
                        bg="hsl(0, 0%, 85%)"
                        fontSize="1rem"
                        fontWeight="450"
                        lineHeight="28px"
                        borderRadius="8px"
                        leftIcon={isPasted ? <ClearSvg /> : <PasteSvg />}
                        onClick={() => {
                          handlePaste(setFieldValue);
                        }}
                      >
                        <Text>{isPasted ? "Clear" : "Paste"}</Text>
                      </Button>
                    </Flex>

                    <Button
                      type="submit"
                      w="135px"
                      h="52px"
                      ml="9px"
                      padding="18px"
                      fontSize="18px"
                      fontWeight="450"
                      lineHeight="28px"
                      bg="hsl(245, 88%, 60%)"
                      _hover={{
                        bg: "hsl(245, 88%, 80%)",
                      }}
                      color="#fff"
                      borderRadius="8px"
                    >
                      Download
                    </Button>
                  </FormControl>
                </form>
              </Center>
            );
          }}
        </Formik>
      )}
      {/* Chrome插件扩展 */}
      <Center
        gap={isDownLoading ? "40px" : undefined}
        mt={isDownLoading ? "48px" : undefined}
      >
        {isDownLoading > 0 && (
          <Box
            w="315px"
            h="546px"
            border="1.12px solid hsl(0, 0%, 26%)"
            borderRadius="10px"
            bg="hsl(0, 0%, 15%)"
            padding="9px"
          >
            {isDownLoading === 2 ? (
              <video
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                controls
                src={videoUrl}
                poster={posterImg}
              ></video>
            ) : (
              <ProcessIng />
            )}
          </Box>
        )}
        <ChromeExtesion
          controller={controller}
          setController={setController}
          videoUrl={videoUrl}
          isDownLoading={isDownLoading}
          setIsDownLoading={setIsDownLoading}
        />
      </Center>
    </>
  );
}

function PasteUrlSvg() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.832 19.8332H8.16537C6.55148 19.8332 5.17598 19.2642 4.03886 18.1263C2.90175 16.9884 2.33281 15.6129 2.33203 13.9998C2.33203 12.3859 2.90098 11.0104 4.03886 9.87334C5.17675 8.73623 6.55225 8.16728 8.16537 8.1665H12.832V10.4998H8.16537C7.19314 10.4998 6.36675 10.8401 5.6862 11.5207C5.00564 12.2012 4.66536 13.0276 4.66536 13.9998C4.66536 14.9721 5.00564 15.7984 5.6862 16.479C6.36675 17.1596 7.19314 17.4998 8.16537 17.4998H12.832V19.8332ZM9.33203 15.1665V12.8332H18.6654V15.1665H9.33203ZM15.1654 19.8332V17.4998H19.832C20.8043 17.4998 21.6306 17.1596 22.3112 16.479C22.9918 15.7984 23.332 14.9721 23.332 13.9998C23.332 13.0276 22.9918 12.2012 22.3112 11.5207C21.6306 10.8401 20.8043 10.4998 19.832 10.4998H15.1654V8.1665H19.832C21.4459 8.1665 22.8218 8.73545 23.9597 9.87334C25.0976 11.0112 25.6661 12.3867 25.6654 13.9998C25.6654 15.6137 25.0964 16.9896 23.9585 18.1275C22.8206 19.2654 21.4451 19.8339 19.832 19.8332H15.1654Z"
        fill="white"
      />
    </svg>
  );
}

function PasteSvg() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.626 3.533C3.58767 3.55478 3.5558 3.58634 3.53367 3.62447C3.51153 3.66259 3.49991 3.70591 3.5 3.75V13.25C3.5 13.388 3.612 13.5 3.75 13.5H12.25C12.3163 13.5 12.3799 13.4737 12.4268 13.4268C12.4737 13.3799 12.5 13.3163 12.5 13.25V3.75C12.5001 3.70591 12.4885 3.66259 12.4663 3.62447C12.4442 3.58634 12.4123 3.55478 12.374 3.533C12.2019 3.43328 12.0764 3.26926 12.0252 3.07704C11.974 2.88482 12.0013 2.68013 12.101 2.508C12.2007 2.33587 12.3647 2.21041 12.557 2.15922C12.7492 2.10802 12.9539 2.13528 13.126 2.235C13.667 2.548 14 3.125 14 3.75V13.25C14 13.7141 13.8156 14.1592 13.4874 14.4874C13.1592 14.8156 12.7141 15 12.25 15H3.75C3.28587 15 2.84075 14.8156 2.51256 14.4874C2.18437 14.1592 2 13.7141 2 13.25V3.75C2 3.125 2.333 2.548 2.874 2.235C3.04613 2.13528 3.25082 2.10802 3.44304 2.15922C3.63526 2.21041 3.79928 2.33587 3.899 2.508C3.99872 2.68013 4.02598 2.88482 3.97478 3.07704C3.92359 3.26926 3.79813 3.43328 3.626 3.533ZM5.75 1H10.25C10.4489 1 10.6397 1.07902 10.7803 1.21967C10.921 1.36032 11 1.55109 11 1.75V4.75C11 4.94891 10.921 5.13968 10.7803 5.28033C10.6397 5.42098 10.4489 5.5 10.25 5.5H5.75C5.55109 5.5 5.36032 5.42098 5.21967 5.28033C5.07902 5.13968 5 4.94891 5 4.75V1.75C5 1.55109 5.07902 1.36032 5.21967 1.21967C5.36032 1.07902 5.55109 1 5.75 1ZM6.5 4H9.5V2.5H6.5V4Z"
        fill="#939393"
      />
    </svg>
  );
}

function ClearSvg() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.7747 5.23437C16.6899 5.14939 16.5892 5.08197 16.4783 5.03598C16.3674 4.98998 16.2485 4.9663 16.1285 4.9663C16.0084 4.9663 15.8895 4.98998 15.7786 5.03598C15.6678 5.08197 15.567 5.14939 15.4822 5.23437L10.9997 9.70771L6.51722 5.2252C6.43235 5.14034 6.3316 5.07302 6.22071 5.02709C6.10983 4.98116 5.99099 4.95752 5.87097 4.95752C5.75095 4.95752 5.6321 4.98116 5.52122 5.02709C5.41033 5.07302 5.30958 5.14034 5.22472 5.2252C5.13985 5.31007 5.07253 5.41082 5.0266 5.52171C4.98067 5.63259 4.95703 5.75144 4.95703 5.87146C4.95703 5.99147 4.98067 6.11032 5.0266 6.2212C5.07253 6.33209 5.13985 6.43284 5.22472 6.51771L9.70722 11.0002L5.22472 15.4827C5.13985 15.5676 5.07253 15.6683 5.0266 15.7792C4.98067 15.8901 4.95703 16.0089 4.95703 16.129C4.95703 16.249 4.98067 16.3678 5.0266 16.4787C5.07253 16.5896 5.13985 16.6903 5.22472 16.7752C5.30958 16.8601 5.41033 16.9274 5.52122 16.9733C5.6321 17.0193 5.75095 17.0429 5.87097 17.0429C5.99099 17.0429 6.10983 17.0193 6.22071 16.9733C6.3316 16.9274 6.43235 16.8601 6.51722 16.7752L10.9997 12.2927L15.4822 16.7752C15.5671 16.8601 15.6678 16.9274 15.7787 16.9733C15.8896 17.0193 16.0084 17.0429 16.1285 17.0429C16.2485 17.0429 16.3673 17.0193 16.4782 16.9733C16.5891 16.9274 16.6898 16.8601 16.7747 16.7752C16.8596 16.6903 16.9269 16.5896 16.9728 16.4787C17.0188 16.3678 17.0424 16.249 17.0424 16.129C17.0424 16.0089 17.0188 15.8901 16.9728 15.7792C16.9269 15.6683 16.8596 15.5676 16.7747 15.4827L12.2922 11.0002L16.7747 6.51771C17.123 6.16937 17.123 5.58271 16.7747 5.23437Z"
        fill="#939393"
      />
    </svg>
  );
}
