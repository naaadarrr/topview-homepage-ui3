import { Box, Center, Heading, Text } from "@chakra-ui/react";
import { prefixed } from "@/utils/media";
import { useTranslations } from "next-intl";
// import LogoWallImage from "./LogoWallImage";
import CustomButtonContainer from "@/app/(_components)/Button/ContainerComponent";
import AiAvatar from "@/app/[lang]/(desktop)/ai-avatar";
import AiVideo from "@/app/[lang]/(desktop)/ai-video";
import AgentInputSection from "@/app/(components)/body/AgentInputSection";
import VideoCarousel from "@/app/(components)/body/VideoCarousel";
import { carouselData } from "@/app/(components)/body/carouselData";
import AgentExampleVideos from "@/app/(components)/body/AgentExampleVideos";
import { calcMobileVW } from "@/utils";
import SectionWithTitle from "@/app/(components)/SectionWithTitle";
import ChatInputSection from "@/app/(components)/body/ChatInputSection";
import HeroSection from "@/app/(components)/body/HeroSection";
import AnimatedContent from "@/app/(components)/body/AnimatedContent";
import { AGENT_TARGET_TO_URL } from "@/config";

export default function Body() {
  const t = useTranslations("hero");
  const tAiAvatar = useTranslations("aiAvatar");
  const tAiVideo = useTranslations("aiVideo");
  const tLogoWall = useTranslations("logoWall");
  const tAnyShoot = useTranslations("anyshoot");
  const tAgent = useTranslations("agent");
  // 标题
  const [title, subTitle] = [
    `${t.raw("title.part1")} `,
    `${t.raw("title.part2")}`,
  ];

  return (
    <Center bg="#000" h="100%">
      <Box w="100%" h="100%" display="flex" flexDirection="column">
        {/* <Center position="relative" zIndex="999" mt="88px" mb={{ xl: "36px" }}>
          <Box display={{ base: "none", xl: "flex" }} gap="48px">
            <a
              href="https://www.producthunt.com/posts/topview-ai?embed=true&utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-topview&#0045;ai"
              target="_blank"
            >
              <Image
                fetchPriority="low"
                src={prefixed("/pd.png")}
                alt="Topview&#0046;ai - Turns&#0032;links&#0032;or&#0032;media&#0032;assets&#0032;into&#0032;viral&#0032;videos&#0032;in&#0032;one&#0032;click | Product Hunt"
                w={{ base: "100%", xl: "160px" }}
                h={{ base: "100%", xl: "48px" }}
              />
            </a>
            <a
              href="https://www.producthunt.com/products/topview-ai/reviews?utm_source=badge-product_review&utm_medium=badge&utm_souce=badge-topview&#0045;ai"
              target="_blank"
            >
              <Image
                fetchPriority="low"
                src={prefixed("/pd_2.webp")}
                alt="Topview&#0046;ai - Turns&#0032;links&#0032;or&#0032;media&#0032;assets&#0032;into&#0032;viral&#0032;videos&#0032;in&#0032;one&#0032;click | Product Hunt"
                w={{ base: "100%", xl: "160px" }}
                h={{ base: "100%", xl: "48px" }}
              />
            </a>
          </Box>
        </Center> */}
        {/* 1.标题 */}
        {/* 1.1标题-彩色 */}
        <HeroSection title={title} subTitle={subTitle} />
        {/* 1.3标题-陪衬文本 */}

        {/* <Box mt="104px">
          <Center>
            <Box
              w="64.5833vw"
              h="36.3542vw"
              borderRadius="40px"
              overflow="hidden"
            >
              <video
                src={prefixed("/landing-page/home/home_new.mp4")}
                poster={prefixed("/landing-page/home/home_new_poster.png")}
                muted
                autoPlay
                loop
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
          </Center>
        </Box> */}

        {/* 轮播图模块 */}
        <SectionWithTitle>
          <AnimatedContent delay={0.6}>
            <VideoCarousel
              items={carouselData}
              autoPlayInterval={6000} // 6秒自动切换
              showControls={true} // 显示控制按钮
              showIndicators={true} // 显示指示器
              showTitle={true} // 显示标题
              pauseOnHover={true} // 悬停时暂停
            />
          </AnimatedContent>
        </SectionWithTitle>

        {/* logo墙 */}
        {/* <SectionWithTitle
          title={tLogoWall.raw("title")}
          titleStyle={{
            fontSize: "20px",
            fontWeight: "500",
            textAlign: "center",
            color: "rgba(255, 255, 255, 0.50);",
            lineHeight: "32px",
            marginBottom: "32px",
          }}
        >
          <LogoWallImage />
        </SectionWithTitle> */}

        {/* 用户案例视频 */}
        <SectionWithTitle
          title={tAgent.raw("exampleVideo.title")}
          titleStyle={{
            marginBottom: "40px",
          }}
        >
          <Center flexDirection="column">
            <CustomButtonContainer
              text={tAgent.raw("exampleVideo.buttonText")}
              linkHref={AGENT_TARGET_TO_URL}
              needOpenModal={true}
              btnStyleConfig={{
                mb: { base: calcMobileVW(40), xl: "80px" },
                bg: "#4E40F3",
                padding: "16px 20px 16px 28px",
                borderRadius: "28px",
                color: "white",
                _hover: {
                  bg: "#6760FF",
                },
              }}
            />
            <AgentExampleVideos />
          </Center>
        </SectionWithTitle>

        {/* ai avatar */}
        <SectionWithTitle title={tAiAvatar.raw("title")}>
          <AiAvatar />
        </SectionWithTitle>

        {/* ai video */}
        <SectionWithTitle title={tAiVideo.raw("title")}>
          <AiVideo />
        </SectionWithTitle>
      </Box>
    </Center>
  );
}

export function DiscordIcon() {
  return (
    <svg
      width="22"
      height="16"
      viewBox="0 0 22 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.2682 1.33005C16.9382 0.710046 15.4982 0.260046 13.9982 4.59982e-05C13.985 -0.000374605 13.9719 0.00209348 13.9598 0.00727676C13.9477 0.01246 13.9369 0.0202326 13.9282 0.0300462C13.7482 0.360046 13.5382 0.790046 13.3982 1.12005C11.8072 0.880046 10.1892 0.880046 8.59816 1.12005C8.45816 0.780046 8.24816 0.360046 8.05816 0.0300462C8.04816 0.0100462 8.01816 4.59982e-05 7.98816 4.59982e-05C6.48816 0.260046 5.05816 0.710046 3.71816 1.33005C3.70816 1.33005 3.69816 1.34005 3.68816 1.35005C0.968164 5.42005 0.218164 9.38004 0.588164 13.3C0.588164 13.32 0.598164 13.34 0.618164 13.35C2.41816 14.67 4.14816 15.47 5.85816 16C5.88816 16.01 5.91816 16 5.92816 15.98C6.32816 15.43 6.68816 14.85 6.99816 14.24C7.01816 14.2 6.99816 14.16 6.95816 14.15C6.38816 13.93 5.84816 13.67 5.31816 13.37C5.27816 13.35 5.27816 13.29 5.30816 13.26C5.41816 13.18 5.52816 13.09 5.63816 13.01C5.65816 12.99 5.68816 12.99 5.70816 13C9.14816 14.57 12.8582 14.57 16.2582 13C16.2782 12.99 16.3082 12.99 16.3282 13.01C16.4382 13.1 16.5482 13.18 16.6582 13.27C16.6982 13.3 16.6982 13.36 16.6482 13.38C16.1282 13.69 15.5782 13.94 15.0082 14.16C14.9682 14.17 14.9582 14.22 14.9682 14.25C15.2882 14.86 15.6482 15.44 16.0382 15.99C16.0682 16 16.0982 16.01 16.1282 16C17.8482 15.47 19.5782 14.67 21.3782 13.35C21.3982 13.34 21.4082 13.32 21.4082 13.3C21.8482 8.77004 20.6782 4.84005 18.3082 1.35005C18.2982 1.34005 18.2882 1.33005 18.2682 1.33005ZM7.51816 10.91C6.48816 10.91 5.62816 9.96005 5.62816 8.79005C5.62816 7.62005 6.46816 6.67005 7.51816 6.67005C8.57817 6.67005 9.41816 7.63005 9.40816 8.79005C9.40816 9.96005 8.56816 10.91 7.51816 10.91ZM14.4882 10.91C13.4582 10.91 12.5982 9.96005 12.5982 8.79005C12.5982 7.62005 13.4382 6.67005 14.4882 6.67005C15.5482 6.67005 16.3882 7.63005 16.3782 8.79005C16.3782 9.96005 15.5482 10.91 14.4882 10.91Z"
        fill="white"
      />
    </svg>
  );
}
