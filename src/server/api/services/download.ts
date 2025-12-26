import axios from "axios";
import { BASE_URL, mergeHeaders } from "./common";
import { type RequestOptions } from "@/types";

export const submitDownloadVideo = (
  options: RequestOptions & {
    data: {
      tiktokVideoUrls: string[];
    };
  },
) =>
  axios
    .request({
      url: `${BASE_URL}/download/video/submit`,
      method: "post",
      ...options,
      ...mergeHeaders(options.headers),
    })
    .then(({ data }) => data);

export const queryDownloadVideoStatus = (
  options: RequestOptions & {
    params: {
      videoId: string;
    };
  },
) =>
  axios
    .request({
      url: `${BASE_URL}/download/video/query`,
      method: "get",
      ...options,
      ...mergeHeaders(options.headers),
    })
    .then(({ data }) => data);
