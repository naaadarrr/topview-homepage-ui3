/* eslint-disable */

import { Client } from "@notionhq/client";
import cron from "node-cron";
import fs from "fs-extra";
import path from "path";
import slugify from 'slugify';

// 初始化 Notion 客户端
const notion = new Client({
  auth: process.env.NOTION_MAKE_PAGE_SECRET,
});

// 存储已知的子数据库 ID
// let knownDatabaseIds = new Set<string>();
export async function retrieveMakePage(){
  const pageId = process.env.NOTION_MAKE_PAGE_ID!;
  const response = await notion.blocks.children.list({
    block_id: pageId,
  });
  // response.results.map(res => res.child_database.title
  // console.log("response",  response)
 const list =  response.results.map(res => {
    return {
      id: slugify(res.id,{
        replacement:"",
        remove: /-/g, 
      }),
      title: (res as any).child_database.title,
    }
  })
  return list;
}

