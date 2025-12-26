/* eslint-disable */
import "@/styles/globals.css";
// import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import GoogleAnalytics from "@/app/(components)/GoogleAnalytics";
import { TRPCReactProvider } from "@/trpc/react";
import { Providers } from "./provider";
import Footer from "./layouts/footer";
import HaloNav, { HaloBodyCard } from "./layouts/header/halo";
import ResponsiveNavBar from "./layouts/responsiveNavBar";
import NanoBananaBanner from "./(components)/banner/NanoBananaBanner";
// import { WebVitals } from "./_components/web-vitral";
import {
  SessionProvider,
  RecoilRoot,
} from "@/app/(components)/ExternalProvider";
// import CustomScripts from "./components/CustomScripts";
// import GTMNoscript from "./components/GTMNoscript";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#000" }}>
        <SessionProvider>
          <RecoilRoot>
            {/* <CustomScripts></CustomScripts>
        <GTMNoscript></GTMNoscript> */}
            <TRPCReactProvider>
              <Providers>
                {/* Header & Banner - Combined in a fixed container for consistent "follow" behavior */}
                <header className="fixed top-0 left-0 right-0 z-[1000] flex flex-col">
                  <NanoBananaBanner />
                  <nav className="w-full">
                    <ResponsiveNavBar />
                  </nav>
                </header>

                <main className="pt-[112px]">
                  {children}
                </main>

                {/* 页脚 - Implemented as a solid piece that follows the content flow but feels "fixed" at the bottom end */}
                <Footer />
              </Providers>
            </TRPCReactProvider>
            {process.env.NODE_ENV === "production" &&
              process.env.NEXT_PUBLIC_GTM_ID && (
                <GoogleTagManager
                  gtmId={process.env.NEXT_PUBLIC_GTM_ID}
                ></GoogleTagManager>
              )}
            {process.env.NODE_ENV === "production" && <GoogleAnalytics />}
          </RecoilRoot>
        </SessionProvider>
      </body>
    </html>
  );
}
