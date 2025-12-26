// 在你的项目中更新 useSchemaScripts.js 文件

import { prefixed } from "@/utils/media";
interface CardItem {
  id: number;
  logo: string;
  title: string;
  subTitle: string;
  imgUrl: string | null;
}

const useSchemaScripts = () => {
  const schemaHome = `
  [
    {
        "@context": "http://schema.org",
        "@type": "SoftwareApplication",
        "url": "https://www.topview.ai",
        "image": "${prefixed("/tools/topview_logo_black.png")}",
        "name": "AI Video Editor",
        "description": "Convert your ideas into viral videos in 2 minutes. Create videos for TikTok,  Reels, YouTube & Shorts and twitter.",
        "operatingSystem": "Windows, MacOS, Chrome OS, Linux, iOS, Android",
        "applicationCategory": "MultimediaApplication",
        "aggregateRating":
        {
            "@type": "AggregateRating",
            "ratingValue": "4.85",
            "ratingCount": 608
        }
    },
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity":
        [
            {
                "@type": "Question",
                "name": "What is AI video editing?",
                "acceptedAnswer":
                {
                    "@type": "Answer",
                    "text": "AI video editing, short for artificial intelligence video editing, is a cutting-edge technology that leverages the power of artificial intelligence (AI) to automate video editing. TopView.ai's cutting-edge AI video editor help people edit video with great effectioncy, leverage TopView.ai huge amount of Best performance ads video collect from various platform, it can write viral video script, generate realistic voice, automatically analyse your footage and pick the best part of them with best multimodel LLM, assemble the video with GPT, generate beautiful subtitle, and generate realistic avatar intro video."
                }
            },
            {
                "@type": "Question",
                "name": "Is there an AI that will edit videos?",
                "acceptedAnswer":
                {
                    "@type": "Answer",
                    "text": "Yes, there certainly is an AI that will edit videos. One the best is TopView.ai, an online AI video editor that can write viral video script, generate realistic voice, automatically analyse your footage and pick the best part of them with best multimodel LLM, assemble the video with GPT, generate beautiful subtitle, and generate realistic avatar intro video."
                }
            },
            {
                "@type": "Question",
                "name": "Is there a free AI video editor?",
                "acceptedAnswer":
                {
                    "@type": "Answer",
                    "text": "Yes, there are free AI video editors available that offer a wide range of AI-powered editing features. TopView.ai is the best one. It can write viral video script, generate realistic voice, automatically analyse your footage and pick the best part of them with best multimodel LLM, assemble the video with GPT, generate beautiful subtitle, and generate realistic avatar intro video."
                }
            },
            {
                "@type": "Question",
                "name": "Is there an AI that can create videos?",
                "acceptedAnswer":
                {
                    "@type": "Answer",
                    "text": "Certainly! When it comes to AI-powered video creation platforms, TopView.ai is a highly regarded option worth considering. This online tool offers a streamlined video creation process, leveraging AI technology to simplify the editing and customization aspects."
                }
            }
        ]
    },
    {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Edit Video with AI",
        "step":
        [
            {
                "@type": "HowToStep",
                "name": "Upload video and write the main idea of your video",
                "text": "Start a new project and upload a video to TopView.ai directly from your computer, phone, or tablet, write the main idea of your video, like your product to promote, or the topic of the video."
            },
            {
                "@type": "HowToStep",
                "name": "Choose video script",
                "text": "Using just a few clicks, you can generate several video scripts, and edit them if you want to, then you can choose one you like"
            },
            {
                "@type": "HowToStep",
                "name": "Export your final video",
                "text": "After you choose video script, TopView.ai will automatically assemble the video draft for you. It will generate the voiceover, subtitles, avartar intro video if you specified, you can edit something, or just hit the export button to export the video."
            }
        ]
    }
]
  `;
  const schemaAlternatives = `
  [
    {
        "@context": "http://schema.org",
        "@type": "SoftwareApplication",
        "url": "https://www.topview.ai",
        "image": "${prefixed("/tools/topview_logo_black.png")}",
        "name": "Get Munch AI Clip Editor alternative",
        "description": "TopView.ai is an AI Video Editor similar to Get Munch AI for creating short-form videos.",
        "operatingSystem": "Windows, MacOS, Chrome OS, Linux, iOS, Android",
        "applicationCategory": "MultimediaApplication",
        "aggregateRating":
        {
            "@type": "AggregateRating",
            "ratingValue": "4.85",
            "ratingCount": 608
        }
    },
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity":
        [
            {
                "@type": "Question",
                "name": "What is AI video editing?",
                "acceptedAnswer":
                {
                    "@type": "Answer",
                    "text": "AI video editing, short for artificial intelligence video editing, is a cutting-edge technology that leverages the power of artificial intelligence (AI) to automate video editing. TopView.ai's cutting-edge AI video editor help people edit video with great effectioncy, leverage TopView.ai huge amount of Best performance ads video collect from various platform, it can write viral video script, generate realistic voice, automatically analyse your footage and pick the best part of them with best multimodel LLM, assemble the video with GPT, generate beautiful subtitle, and generate realistic avatar intro video."
                }
            },
            {
                "@type": "Question",
                "name": "Is there an AI that will edit videos?",
                "acceptedAnswer":
                {
                    "@type": "Answer",
                    "text": "Yes, there certainly is an AI that will edit videos. One the best is TopView.ai, an online AI video editor that can write viral video script, generate realistic voice, automatically analyse your footage and pick the best part of them with best multimodel LLM, assemble the video with GPT, generate beautiful subtitle, and generate realistic avatar intro video."
                }
            },
            {
                "@type": "Question",
                "name": "Is there a free AI video editor?",
                "acceptedAnswer":
                {
                    "@type": "Answer",
                    "text": "Yes, there are free AI video editors available that offer a wide range of AI-powered editing features. TopView.ai is the best one. It can write viral video script, generate realistic voice, automatically analyse your footage and pick the best part of them with best multimodel LLM, assemble the video with GPT, generate beautiful subtitle, and generate realistic avatar intro video."
                }
            },
            {
                "@type": "Question",
                "name": "Is there an AI that can create videos?",
                "acceptedAnswer":
                {
                    "@type": "Answer",
                    "text": "Certainly! When it comes to AI-powered video creation platforms, TopView.ai is a highly regarded option worth considering. This online tool offers a streamlined video creation process, leveraging AI technology to simplify the editing and customization aspects."
                }
            }
        ]
    },
    {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Edit Video with AI",
        "step":
        [
            {
                "@type": "HowToStep",
                "name": "Upload video and write the main idea of your video",
                "text": "Start a new project and upload a video to TopView.ai directly from your computer, phone, or tablet, write the main idea of your video, like your product to promote, or the topic of the video."
            },
            {
                "@type": "HowToStep",
                "name": "Choose video script",
                "text": "Using just a few clicks, you can generate several video scripts, and edit them if you want to, then you can choose one you like"
            },
            {
                "@type": "HowToStep",
                "name": "Export your final video",
                "text": "After you choose video script, TopView.ai will automatically assemble the video draft for you. It will generate the voiceover, subtitles, avartar intro video if you specified, you can edit something, or just hit the export button to export the video."
            }
        ]
    }
]
  `;

  return { schemaHome, schemaAlternatives };
};

export const prefixedCsr =
  "https://d1735p3aqhycef.cloudfront.net/official-website/public";

export const cardList: CardItem[] = [
  {
    id: 0,
    logo: `${prefixed("/tools/media_assets.png")}`,
    title: "Your media assets",
    subTitle: "Raw product videos/images",
    imgUrl: null,
  },
  {
    id: 1,
    logo: `${prefixed("/tools/gpt_4.png")}`,
    title: "GPT-4o",
    subTitle: "Empowered by Ads library (4,300,000 top videos)",
    imgUrl: null,
  },
  {
    id: 2,
    logo: `${prefixed("/tools/viral_videos.png")}`,
    title: "Viral videos",
    subTitle: "",
    imgUrl: `${prefixed("/tools/videos_group_logo.png")}`,
  },
];

export default useSchemaScripts;
