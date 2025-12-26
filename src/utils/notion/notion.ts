/* eslint-disable */

import { Client } from "@notionhq/client";
import { LRUCache } from "lru-cache";

const options = {
  max: 500,
  maxSize: 5000,
  sizeCalculation: () => 1,
  ttl: 1000 * 60 * 5,
  allowStale: false,
  updateAgeOnGet: false,
  updateAgeOnHas: false,
};

const cache = new LRUCache(options);

export const notion = new Client({
  auth: process.env.NOTION_SECRET,
});

function getPageProperties(page: any) {
  const { id, properties } = page[0];

  // console.log("is_file",properties.img_url.files)
  return {
    pageId: id,
    locale: properties.locale.select.name,
    // 对字符串中有"_"或者"/n"进行处理
    titleList:
      properties.title.rich_text[0]?.plain_text.trim().split(/[\n_]+/) ?? "",
    textList:
      properties.text.rich_text[0]?.plain_text.trim().split(/[\n_]+/) ?? "",
    videoUrl: properties.video_url.url ?? "",
    imgUrls: properties.img_url.files.map(
      (f: {
        name: string;
        type: string;
        file?: { url: string };
        external?: { url: any };
      }) => {
        if (f.type === "file") {
          return f?.file?.url;
        } else {
          return f?.external?.url;
        }
      },
    ),
    linkUrl: properties.link_url.url ?? "",
  };
}

function getPagesProperties(pages: any) {
  return pages.map((page: { id: any; properties: any }) => {
    const { id, properties } = page;

    return {
      pageId: id,
      locale: properties.locale.select.name,
      // 对字符串中有"_"或者"/n"进行处理
      titleList:
        properties.title.rich_text[0]?.plain_text.trim().split(/[\n_]+/) ?? "",
      textList:
        properties.text.rich_text[0]?.plain_text.trim().split(/[\n_]+/) ?? "",
      videoUrl: properties.video_url.url ?? "",
      imgUrls: properties.img_url.files.map(
        (f: {
          name: string;
          type: string;
          file?: { url: string };
          external?: { url: any };
        }) => {
          if (f.type === "file") {
            return f?.file?.url;
          } else {
            return f?.external?.url;
          }
        },
      ),
      linkUrl: properties.link_url.url ?? "",
    };
  });
}

// 这个函数会返回满足查询条件的< 单个page/多个page列表 >
// 因为太多地方用到这个函数了，所以函数名就不方便改了
export async function getPage({
  name,
  group,
}: {
  name: string;
  group?: string;
}) {
  const cacheKey = JSON.stringify({ name, group });
  let res: any;

  if (cache.has(cacheKey)) {
    res = cache.get(cacheKey);
  } else {
    try {
      const databaseId = process.env.NOTION_DATABASE_ID!;
      const localeId = process.env.NOTION_LOCALE_ID!;
      const baseFilter = [
        {
          property: "name",
          rich_text: {
            equals: name,
          },
        },
        {
          property: localeId,
          select: {
            equals: "en-US",
          },
        },
      ];

      if (group) {
        baseFilter.push({
          property: "group",
          select: {
            equals: group,
          },
        });
      }

      res = await notion.databases.query({
        database_id: databaseId,
        filter: { and: baseFilter },
      });

      cache.set(cacheKey, res);
    } catch (error) {
      console.error("Error querying Notion database:", error);
      throw new Error("Failed to retrieve data from Notion");
    }
  }

  if (res?.results?.length === 1) {
    const page = getPageProperties(res.results);
    return page;
  } else {
    const pageList = getPagesProperties(res.results);
    return pageList;
  }
}

export async function createPage({ title }: { title: string }) {
  const databaseId = process.env.NOTION_DATABASE_ID!;
  const res = await notion.pages.create({
    parent: {
      type: "database_id",
      database_id: databaseId,
    },
    properties: {
      [process.env.NOTION_NAME_ID!]: {
        title: [
          {
            type: "text",
            text: {
              content: title,
            },
          },
        ],
      },
    },
  });
  console.log(res);
}
