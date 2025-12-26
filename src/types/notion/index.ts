export interface NotionPage {
    pageId: string;
    layoutType: string;
    title: string;
    subTitle: {
      plain_text: string;
      href: string;
    }[];
    text: {
      plain_text: string;
      href: string | null;
    }[];
    media: string[];
    group: string | null;
  }