import { type Headers } from "@/types";
/**
 * services:
 * 增加用create开头
 * 删除用delete开头
 * 查询用query开头
 * 更新用update开头
 */
export const BASE_URL = process.env.BASE_URL;

export const mergeHeaders = (headers?: Headers) => {
  return {
    headers: Object.assign(
      { "Content-Type": "application/json" },
      headers ?? {},
    ),
  };
};
