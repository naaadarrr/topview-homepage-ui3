import { type MenuItem } from "@/types/home";

export enum MenuId {
  // UseCases,
  Home,
  AITools,
  LinkToVideo,
  MaterialsToVideo,
  AIVideoMaker,
  AIVideoGenerator,
  TikTokVideoMaker,
  TikTokDownloader,
  AdsLibrary,
  HotHooks,
  TopVideos,
  Resources,
  Blog,
  WatchVideoTutorials,
  ResourceAndGuide,
  Alternatives,
  // ...
}

export enum MenuTitle {
  Home = "Home",
  // UseCases = "Use cases",
  AITools = "AI tools",
  LinkToVideo = "Link to video",
  MaterialsToVideo = "Materials to video",
  AIVideoMaker = "AI video maker",
  AIVideoGenerator = "AI video generator",
  TikTokVideoMaker = "TikTok video maker",
  TikTokDownloader = "TikTok downloader",
  AdsLibrary = "Ads library",
  HotHooks = "Hot hooks",
  TopVideos = "Tiktok ADS Library",
  Resources = "Resources",
  Blog = "Blog",
  WatchVideoTutorials = "Watch video tutorials",
  ResourceAndGuide = "Resource and guide",
  Alternatives = "Alternatives",
  // ...
}

const MenuMapping = {
  [MenuId.Home]: MenuTitle.Home,
  // [MenuId.UseCases]: MenuTitle.UseCases,
  [MenuId.AITools]: MenuTitle.AITools,
  [MenuId.LinkToVideo]: MenuTitle.LinkToVideo,
  [MenuId.MaterialsToVideo]: MenuTitle.MaterialsToVideo,
  [MenuId.AIVideoMaker]: MenuTitle.AIVideoMaker,
  [MenuId.AIVideoGenerator]: MenuTitle.AIVideoGenerator,
  [MenuId.TikTokVideoMaker]: MenuTitle.TikTokVideoMaker,
  [MenuId.TikTokDownloader]: MenuTitle.TikTokDownloader,
  [MenuId.AdsLibrary]: MenuTitle.AdsLibrary,
  [MenuId.HotHooks]: MenuTitle.HotHooks,
  [MenuId.TopVideos]: MenuTitle.TopVideos,
  [MenuId.Resources]: MenuTitle.Resources,
  [MenuId.Blog]: MenuTitle.Blog,
  [MenuId.WatchVideoTutorials]: MenuTitle.WatchVideoTutorials,
  [MenuId.ResourceAndGuide]: MenuTitle.ResourceAndGuide,
  [MenuId.Alternatives]: MenuTitle.Alternatives,
  // ...
};

export const MENU_LIST: MenuItem[] = [
   {
    id: MenuId.Home,
    title: MenuMapping[MenuId.Home],
    linkUrl: "/",
    children: null,
  },
  // {
  //   id: MenuId.UseCases,
  //   title: MenuMapping[MenuId.UseCases],
  //   linkUrl: null,
  //   children: null,
  // },
  {
    id: MenuId.AITools,
    title: MenuMapping[MenuId.AITools],
    linkUrl: null,
    children: [
      {
        id: MenuId.LinkToVideo,
        title: MenuMapping[MenuId.LinkToVideo],
        linkUrl: "/gen/m2v?tab=add_from_link",
        children: null,
      },
      {
        id: MenuId.MaterialsToVideo,
        title: MenuMapping[MenuId.MaterialsToVideo],
        linkUrl: "/gen/m2v?tab=upload",
        children: null,
      },
      {
        id: MenuId.AIVideoMaker,
        title: MenuMapping[MenuId.AIVideoMaker],
        linkUrl: "/make/ai-video-maker",
        children: null,
      },
      {
        id: MenuId.AIVideoGenerator,
        title: MenuMapping[MenuId.AIVideoGenerator],
        linkUrl: "/make/ai-video-generator",
        children: null,
      },
      {
        id: MenuId.TikTokVideoMaker,
        title: MenuMapping[MenuId.TikTokVideoMaker],
        linkUrl: "/make/tiktok-video-maker",
        children: null,
      },
      {
        id: MenuId.TikTokDownloader,
        title: MenuMapping[MenuId.TikTokDownloader],
        linkUrl: "/extension/tiktok-downloader",
        children: null,
      },
    ],
  },
  {
    id: MenuId.AdsLibrary,
    title: MenuMapping[MenuId.AdsLibrary],
    linkUrl: null,
    children: [
      {
        id: MenuId.HotHooks,
        title: MenuMapping[MenuId.HotHooks],
        linkUrl: "/dashboard/hooks",
        children: null,
      },
      {
        id: MenuId.TopVideos,
        title: MenuMapping[MenuId.TopVideos],
        linkUrl: "/tiktok-ads-library",
        children: null,
      },
    ],
  },
  {
    id: MenuId.Resources,
    title: MenuMapping[MenuId.Resources],
    linkUrl: null,
    children: [
      {
        id: MenuId.Blog,
        title: MenuMapping[MenuId.Blog],
        linkUrl: "/blog",
        children: null,
      },
      {
        id: MenuId.WatchVideoTutorials,
        title: MenuMapping[MenuId.WatchVideoTutorials],
        linkUrl: null,
        children: null,
      },
      {
        id: MenuId.ResourceAndGuide,
        title: MenuMapping[MenuId.ResourceAndGuide],
        linkUrl: "https://scientific-spark-28c.notion.site/Topview-Official-Guides-0259270a18fa4b84964ddfa1cfa4fd5f",
        children: null,
      },
      // {
      //   id: MenuId.Alternatives,
      //   title: MenuMapping[MenuId.Alternatives],
      //   linkUrl: "",
      //   children: null,
      // },
    ],
  },
];
