
type Levels = "lv2" | "lv3";
export type LinkInfo = Record<Levels, string>;


type Content = "title" |  "subTitle" |  "imgSrc" | "imgAlt" | "btnText"; 
export type BodyProps = Record<Content, string> & {
    category?: string;
};


export type LinkHome= {
    index: number;
    btnText: string;
    btnLink: string;
}

export type IntroductionCard = {
    head: string;
    bodyBold: string;
    body: string;
    bodyBlue?: string; 
    bodyRest?: string; 
  }
  