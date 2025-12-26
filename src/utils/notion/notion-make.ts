/* eslint-disable */

import { Client } from "@notionhq/client";

export const notion = new Client({
  auth: process.env.NOTION_MAKE_PAGE_SECRET,
});

export function getPagesProperties(list: any) {
  const extractProperties = (page: any) => {
    const { id, properties } = page;
    // console.log("title", properties.title.title.map((title: any) => title.plain_text).join(" "))
    return {
      pageId: id,
      layoutType: properties.layout_type.select?.name,
      title: properties.title.title
        .map((title: any) => title.plain_text)
        .join(" "),
      // title: properties.title.title[0]?.plain_text ?? "",
      subTitle: properties.sub_title.rich_text.map((t: any) => {
        return {
          plain_text: t?.plain_text ?? "",
          href: t?.href ?? "",
        };
      }),
      text: properties.text.rich_text.map((t: any) => {
        return {
          plain_text: t.plain_text ?? "",
          href: t.href ?? null,
        };
      }),
      media: properties.media.files.map(
        (f: {
          name: string;
          type: string;
          file?: { url: string };
          external?: { url: any };
        }) => {
          return f.type === "file" ? f?.file?.url : f?.external?.url;
        },
      ),
      group: properties.group.select?.name ?? null,
    };
  };

  if (list.length === 1) {
    return extractProperties(list[0]);
  } else {
    return list.map((page: { id: any; properties: any }) =>
      extractProperties(page),
    );
  }
}

export async function selectFromDatabase({
  databaseId,
  // name,
  // pageType,
}: {
  databaseId: string;
  // name: string;
  // pageType: string;
}) {
  // const databaseId = process.env.NOTION_MAKE_DATABASE_ID!;
  // const baseFilter = [
  //   {
  //     property: "name",
  //     rich_text: {
  //       equals: name,
  //     },
  //   },
  //   {
  //     property: "page_type",
  //     select: {
  //       equals: pageType,
  //     },
  //   },
  // ];

  const res = await notion.databases.query({
    database_id: databaseId,
    // filter: { and: baseFilter },
    //  sorts:[
    //     {
    //         property:"name",
    //         direction:"descending"
    //     }
    //  ]
  });
  const page = getPagesProperties(res.results);
  return page;
}

export async function retrieveFromNotion(databaseId: string) {
  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        property: 'group', // 按创建时间排序
        direction: 'ascending', // 正序排序
      },
    ],
  });
  const page = getPagesProperties(response.results);
  return page;
}
