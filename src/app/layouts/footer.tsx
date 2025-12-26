/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Link from "next/link";

const imgFooterAccent = "http://localhost:3845/assets/e3483aeda6880cf1cf745c0aebd38a93bbaed835.svg";
const imgLogoText = "http://localhost:3845/assets/85e96141385697c920ac821b75f9d1de68d4502e.svg";
const imgLogoIcon = "http://localhost:3845/assets/10dbc82f710a75e9b5720403d1b683ad28dc4354.svg";
const imgLine = "http://localhost:3845/assets/552134d5de522def3cdaac8c9270e392d2436eed.svg";
const imgLogoBig = "http://localhost:3845/assets/6f970e4803249ccf25b76649d624574babaeaab5.svg";
const imgLangFlag = "http://localhost:3845/assets/1d66e964688dc2fd6cb99c4968302110368a78b3.svg";
const imgChevronDown = "http://localhost:3845/assets/72da21f3ab5c4b7125c64b955b3939b805d2b4ac.svg";

const imgSocialX = "/social/Social Icons.svg";
const imgSocialInstagram = "/social/Social Icons-1.svg";
const imgSocialTiktok = "/social/Social Icons-3.svg";
const imgSocialDiscord = "/social/Social Icons-4.svg";
const imgSocialYoutube = "/social/Social Icons-2.svg";

const footerLinks = [
  {
    title: "AI Ads",
    links: ["AI Video Agent", "AI Ads Video", "AI Product Video", "AI UGC Video", "URL to Video"],
  },
  {
    title: "AI Avatar",
    links: ["AI Avatar Generator", "Product Avatar", "Design My Avatar", "All Lip-sync"],
  },
  {
    title: "AI Video",
    links: ["AI Video Generator", "AI Short Video", "Video Face Swap", "Text to Video", "Image to Video"],
  },
  {
    title: "AI Image",
    links: ["AI Product Photo", "AI Image Generator", "AI Image Edit", "Text to Image", "Image Face Swap"],
  },
  {
    title: "Use Cases",
    links: ["Advertising", "Affiliate Marketing", "Ecommerce", "DTC Brands", "AI Live Stream"],
  },
  {
    title: "Resources",
    links: ["Blog", "Affiliate Program", "Learning Center", "Alternative", "API"],
  },
];

import LanguageModal from "../(components)/footer/LanguageModal";
import { useState } from "react";

export default function Footer() {
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("English");

  return (
    <footer className="relative w-full overflow-hidden bg-[#000000] pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/bgFooter.png"
          alt=""
          className="w-full h-full object-cover opacity-100"
        />
        {/* Optional: Add a dark overlay if the image is too bright, but usually footer backgrounds are dark */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/20 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-[1416px] mx-auto px-6 md:px-12 lg:px-[64px]">
        {/* Top Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-16">
          {footerLinks.map((section) => (
            <div key={section.title} className="flex flex-col gap-5">
              <h3 className="text-white/50 text-[18px] font-semibold font-['Outfit',sans-serif] leading-[28px]">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="group inline-block py-1"
                    >
                      <span className="text-white text-[16px] font-medium font-['Outfit',sans-serif] leading-[24px] transition-all duration-300 group-hover:bg-clip-text group-hover:text-transparent"
                        style={{
                          backgroundImage: "linear-gradient(89.74deg, #7881FF 0%, #C1C5FF 99.94%)",
                          WebkitBackgroundClip: "text"
                        }}>
                        {link}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Middle Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start py-12 gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-20">
              {/* Logo - Updated to use stable Cloudfront source */}
              <div className="flex items-center gap-2 pt-1">
                <div className="relative w-[132px] h-[26px]">
                  <img
                    src="https://d1735p3aqhycef.cloudfront.net/official-website/public/tools/topview_logo.png"
                    alt="TopView"
                    className="block w-full h-auto"
                  />
                </div>
              </div>

              {/* Policy Links */}
              <div className="flex justify-start gap-10 items-center h-[26px]">
                <Link href="#" className="group inline-block">
                  <span className="text-white text-[16px] font-medium font-['Outfit',sans-serif] leading-[24px] transition-all duration-300 group-hover:bg-clip-text group-hover:text-transparent"
                    style={{
                      backgroundImage: "linear-gradient(89.74deg, #7881FF 0%, #C1C5FF 99.94%)",
                      WebkitBackgroundClip: "text"
                    }}>
                    Privacy Policy
                  </span>
                </Link>
                <Link href="#" className="group inline-block">
                  <span className="text-white text-[16px] font-medium font-['Outfit',sans-serif] leading-[24px] transition-all duration-300 group-hover:bg-clip-text group-hover:text-transparent"
                    style={{
                      backgroundImage: "linear-gradient(89.74deg, #7881FF 0%, #C1C5FF 99.94%)",
                      WebkitBackgroundClip: "text"
                    }}>
                    Terms
                  </span>
                </Link>
              </div>
            </div>

            {/* Copyright & Addresses */}
            <div className="flex flex-col gap-1 text-white/25 text-[12px] font-['Outfit',sans-serif] leading-[16px]">
              <p>© 2025 TOPVIEW PTE. LTD.</p>
              <p>Singapore: 20 Collyer Quay #20-03, Singapore 049319</p>
              <p>Los Angeles: 15970 Los Serranos CC Dr #251, Chino Hills, CA 91709</p>
            </div>
          </div>

          {/* App Buttons - Aligned to top with logo row */}
          <div className="flex gap-2.5 items-start">
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-[40px] w-auto" />
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Google Play" className="h-[58px] w-auto -mt-2.5" />
            </Link>
          </div>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-white/10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center py-12 gap-8">
          {/* Social Icons - Reordered to: X, Instagram, TikTok, Discord, YouTube */}
          <div className="flex gap-8 items-center">
            {[imgSocialX, imgSocialInstagram, imgSocialTiktok, imgSocialDiscord, imgSocialYoutube].map((icon, idx) => (
              <Link key={idx} href="#" className="opacity-60 hover:opacity-100 transition-opacity">
                <img src={icon} alt="" className="w-6 h-6" />
              </Link>
            ))}
          </div>

          {/* Language Selector */}
          <div
            onClick={() => setIsLanguageModalOpen(true)}
            className="flex items-center justify-center gap-2 w-[130px] h-[46px] bg-white/5 rounded-[12px] cursor-pointer hover:bg-white/10 transition-colors shrink-0"
          >
            <img src={imgLangFlag} alt="" className="w-6 h-6" />
            <span className="text-white text-[14px] font-medium font-['Outfit',sans-serif]">{currentLanguage}</span>
            <img src={imgChevronDown} alt="" className="w-2 h-1 ml-1" />
          </div>
        </div>

        {/* Huge Bottom Logo - Implementing node 4406:1890 */}
        <div className="pt-24 pb-12 flex justify-center opacity-30 pointer-events-none select-none group">
          <img
            src={imgLogoBig}
            alt="TOPVIEW"
            className="w-full max-w-[1416px] h-auto object-contain block group-[.no-image]:hidden"
            onError={(e) => {
              (e.target as any).parentNode.classList.add('no-image');
            }}
          />
          {/* Fallback huge text if image fails */}
          <span className="hidden group-[.no-image]:block text-white/5 text-[120px] md:text-[200px] font-extrabold font-['Outfit'] leading-none tracking-tightest">
            TOPVIEW
          </span>
        </div>
      </div>

      <LanguageModal
        isOpen={isLanguageModalOpen}
        onClose={() => setIsLanguageModalOpen(false)}
        currentLanguage={currentLanguage}
        onSelect={setCurrentLanguage}
      />
    </footer>
  );
}
