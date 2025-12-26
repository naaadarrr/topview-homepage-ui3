import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import {
  submitDownloadVideo,
  queryDownloadVideoStatus,
} from "../services/download";

export const downloadRouter = createTRPCRouter({
  query: publicProcedure.input(z.any()).query(async ({ input }) => {
    console.log("input11111", input);
    const { videoId } = input;
    const res = await queryDownloadVideoStatus({
      params: { videoId },
    });

    if (res) {
      const { code } = res;

      if (code === "200") {
        return {
          status: "success",
          message: "ok",
          ...res,
        };
      }
    }
    return {
      status: "error",
      message: "Server exception.",
      errorMsg: res,
    };
  }),

  submit: publicProcedure.input(z.any()).mutation(async (data) => {
    console.log("inputinput", data);
    return "";
    // const { tiktokVideoUrls } = input;
    // const tiktokVideoUrls = [""];
    // const res = await submitDownloadVideo({
    //   data: {},
    // });

    // if (res) {
    //   const { code } = res;

    //   if (code === "200") {
    //     return {
    //       status: "success",
    //       message: "ok",
    //       ...res,
    //     };
    //   }
    // }
    // return {
    //   status: "error",
    //   message: "Server exception.",
    //   errorMsg: res,
    // };
  }),
});
