import DiscoverMore from "@/app/(_components)/DiscoverMore";
import FAQ from "@/app/(_components)/FAQ";
import Introduction from "@/app/(_components)/Introduction";
import LeftImgRightText from "@/app/(_components)/LeftImgRightText";
import LeftTextRightImg from "@/app/(_components)/LeftTextRightImg";
import ThreeColumnCard from "@/app/(_components)/ThreeColumnCard";
import VideoPlayer from "@/app/(_components)/VideoPlayer";
import { type NotionPage } from "@/types/notion";
import { retrieveFromNotion } from "@/utils/notion/notion-make";
import path from "path";
import fs from "fs";
import slugify from "slugify";

export default async function page({ params }: { params: { id: string } }) {
  const title = params.id;

  const filePath = path.join(
    process.cwd(),
    "src",
    "lib",
    "notion_make_list",
    "database_list.json",
  );
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const databaseList: {
    id: string;
    title: string;
  }[] = JSON.parse(jsonData);

  const dbEntry = databaseList.find(
    (db) =>
      slugify(db.title, {
        replacement: "-",
        lower: true,
        strict: true,
      }) === title,
  )!;
  const databaseId = dbEntry.id;
  const pages: NotionPage[] = await retrieveFromNotion(databaseId);

  const isMultipleGroup = {
    introduction: false,
    three_column: false,
    FAQ: false,
  };

  const filterPages = (
    pages: NotionPage[],
    layoutType: string,
    group: string,
  ) => {
    const filterPages = pages.filter(
      (page) => page.layoutType === layoutType && page.group === group,
    );

    if (filterPages.length) {
      isMultipleGroup[layoutType as keyof typeof isMultipleGroup] = true;
      return filterPages;
    } else {
      return pages.filter((page) => page.layoutType === layoutType);
    }
  };

  return (
    <>
      <Introduction dataSource={filterPages(pages, "introduction", "group1")} />
      <LeftImgRightText
        dataSource={pages.filter(
          (page) => page.layoutType === "left_img_right_text",
        )}
      />
      <LeftTextRightImg
        dataSource={pages.filter(
          (page) => page.layoutType === "left_text_right_img",
        )}
      />
      <ThreeColumnCard
        dataSource={pages.filter(
          (page) =>
            page.layoutType === "three_column" && page.group === "group1",
        )}
      />
      <VideoPlayer
        dataSource={pages.filter((page) => page.layoutType === "video_player")}
      />
      <ThreeColumnCard
        dataSource={filterPages(pages, "three_column", "group2")}
      />
      {isMultipleGroup.introduction && (
        <Introduction
          dataSource={filterPages(pages, "introduction", "group2")}
        />
      )}
      <FAQ dataSource={filterPages(pages, "FAQ", "group1")} />
      {isMultipleGroup.FAQ && (
        <FAQ dataSource={filterPages(pages, "FAQ", "group2")} />
      )}
      <DiscoverMore
        dataSource={pages.filter((page) => page.layoutType === "discover_more")}
      />
    </>
  );
}
