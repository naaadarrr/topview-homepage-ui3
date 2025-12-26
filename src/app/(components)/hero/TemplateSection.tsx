"use client";

import React, { useRef, useState } from "react";
import TemplateCard from "./TemplateCard";

const defaultCategories = [
  "All", "Nutra", "Beauty", "Health", "Wellness", "Fitness", "Nutrition",
  "Skincare", "Makeup", "Haircare", "Self-Care", "Meditation", "Mindfulness",
  "Wellbeing", "Fashion", "Lifestyle", "Cosmetics", "Hygiene", "Aromatherapy"
];

const defaultTemplates = [
  { title: "Explosion", image: "http://localhost:3845/assets/543f29cb218d9d7b2855b55eb53c843855f63352.png", height: "h-[556px]" },
  { title: "Melt Transition", image: "http://localhost:3845/assets/2bdd39b5dff1d34b670d4a80ab19fc53c4359443.png", height: "h-[494px]" },
  { title: "Ahegao", image: "http://localhost:3845/assets/32fb3ac5098aa7a94dcdb0d7527cfd82ba72d4d8.png", height: "h-[274px]" },
  { title: "Flame Transition", image: "http://localhost:3845/assets/ad6fefdd6a7ca2fe0d5d7a9c943fc143288ac253.png", height: "h-[494px]" },
  { title: "Train Rush", image: "http://localhost:3845/assets/003a754163e75cb0d1554c597a870847f4853469.png", height: "h-[493px]" },
  { title: "Splash Transition", image: "http://localhost:3845/assets/a7ac5a2f3662bcedbb00dc0e15bdae9f7dbfa61d.png", height: "h-[494px]" },
  { title: "Firelava", image: "http://localhost:3845/assets/ecfca909cb554083f7d8e201ff5a580c441b894e.png", height: "h-[279px]" },
  { title: "Flame On", image: "http://localhost:3845/assets/53990f186e914b2a01534d7f258eaecf7beef9cb.png", height: "h-[278px]" },
  { title: "Shadow Smoke", image: "http://localhost:3845/assets/142f724b536121592342b8ee764f64b1598c5f7f.png", height: "h-[494px]" },
  { title: "Earth Wave", image: "http://localhost:3845/assets/cee7bb806571085fd56e3320b0d79550afe855d7.png", height: "h-[208px]" },
  { title: "Giant Grab", image: "http://localhost:3845/assets/b0a85e1cb392bc905cff1019534b8482b03a2768.png", height: "h-[494px]" },
  { title: "Earth Zoom Out", image: "http://localhost:3845/assets/1895af8c7ae204fbb9d6407abde51e126bcf98fa.png", height: "h-[563px]" },
  { title: "Raven Transition", image: "http://localhost:3845/assets/f009c1577e409c021106e7af4b7b777a17b8ac54.png", height: "h-[494px]" },
  { title: "Animalization", image: "http://localhost:3845/assets/4f78dca8a5706d0e60d281f7928272969165fb18.png", height: "h-[494px]" },
  { title: "Air Bending", image: "http://localhost:3845/assets/c79f9ed45aefb50f3a43943671e309e3513f3096.png", height: "h-[492px]" },
  { title: "Water Bending", image: "http://localhost:3845/assets/613a906df4e231d4a0a0a7632d8e9e0f72f190ce.png", height: "h-[208px]" },
];

interface TabItemProps {
  text: string;
  isActive: boolean;
  onClick: () => void;
}

const TabItem = ({ text, isActive, onClick }: TabItemProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-[8px] text-[12px] font-['Outfit',sans-serif] transition-all whitespace-nowrap border relative group ${isActive
        ? "border-white/64 text-white"
        : "bg-[rgba(255,255,255,0.03)] border-[rgba(255,255,255,0.16)] text-[rgba(255,255,255,0.64)] hover:text-white/80"
        }`}
    >
      <div className={`absolute inset-0 rounded-[8px] transition-opacity duration-300 pointer-events-none ${isActive ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: "radial-gradient(50% 100% at 50% 0%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%)",
        }} />
      <span className="relative z-10">{text}</span>
      <div className={`absolute inset-0 rounded-[8px] pointer-events-none transition-opacity duration-300 ${isActive ? "opacity-100 shadow-[inset_0px_-1px_5px_0px_rgba(255,255,255,0.4)]" : "opacity-0"
        }`} />
    </button>
  );
};

interface ArrowProps {
  direction: "left" | "right";
  disabled?: boolean;
  onClick: () => void;
}

const CarouselArrow = ({ direction, disabled, onClick }: ArrowProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-10 h-10 rounded-full border border-white/5 backdrop-blur-[10.5px] flex items-center justify-center transition-all relative group/arrow overflow-hidden ${disabled
        ? "opacity-50 cursor-not-allowed"
        : "cursor-pointer hover:border-white/10 active:scale-95"
        }`}
      style={{
        background: disabled
          ? "rgba(255, 255, 255, 0.05)"
          : "linear-gradient(rgba(51, 65, 255, 0.1) 0%, rgba(129, 162, 252, 0.1) 100%), rgba(255, 255, 255, 0.08)"
      }}
    >
      {!disabled && (
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/arrow:opacity-100 transition-opacity" />
      )}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_0.833px_0px_0px_rgba(255,255,255,0.12)] rounded-full" />
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        className={`relative z-10 transition-colors ${disabled ? "text-white/30" : "text-white group-hover/arrow:text-white"}`}>
        {direction === "left" ? (
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </button>
  );
};

interface TemplateSectionProps {
  title?: string;
  showTabs?: boolean;
  cardType?: "default" | "avatar";
  templates?: { title: string; image: string; height: string }[];
  aspectRatio?: string;
}

export default function TemplateSection({
  title = "Video Agent Templates",
  showTabs = true,
  cardType = "default",
  templates = defaultTemplates,
  aspectRatio
}: TemplateSectionProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isExpanded, setIsExpanded] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full flex flex-col items-center py-0 gap-6 overflow-hidden px-4 md:px-8">
      {/* Header */}
      <div className="flex flex-col items-center gap-2 w-full max-w-[1856px]">
        <h2 className="text-[36px] font-['Outfit',sans-serif] font-extrabold text-white text-center">
          {title}
        </h2>

        {/* Tab List & Pagination */}
        {showTabs && (
          <div className="relative w-full flex items-center group">
            <div
              ref={scrollRef}
              className="flex gap-2 overflow-x-auto no-scrollbar py-3 w-full scroll-smooth"
            >
              {defaultCategories.map((cat) => (
                <TabItem
                  key={cat}
                  text={cat}
                  isActive={activeCategory === cat}
                  onClick={() => setActiveCategory(cat)}
                />
              ))}
            </div>

            <div className="absolute right-0 top-0 bottom-0 flex items-center pl-24 pr-0 z-20 pointer-events-none bg-gradient-to-l from-black via-black to-transparent">
              <div className="flex gap-2.5 pointer-events-auto py-2 pr-0 pl-4">
                <CarouselArrow direction="left" onClick={() => scroll("left")} />
                <CarouselArrow direction="right" onClick={() => scroll("right")} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Grid container with controlled height */}
      <div className={`relative w-full max-w-[1856px] transition-all duration-700 ease-in-out ${isExpanded ? "max-h-[5000px]" : "max-h-[1000px] overflow-hidden"
        }`}>
        {/* Masonry-like grid using columns - Fixed gap to 8px (gap-2) */}
        <div className={`columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2`}>
          {templates.map((template, idx) => (
            <div key={idx} className={`break-inside-avoid mb-2 ${template.height}`}>
              <TemplateCard
                image={template.image}
                title={template.title}
                aspectRatio={aspectRatio}
                hideTitle={cardType === "avatar"}
              />
            </div>
          ))}
        </div>

        {/* View All Overlay Button */}
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-[200px] flex items-end justify-center pb-12 pointer-events-none z-20">
            <img
              src="http://localhost:3845/assets/6d98eec82c94c099c9cc5cab7ee5a544b9660235.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none"
            />
            <button
              onClick={() => setIsExpanded(true)}
              className="relative z-10 pointer-events-auto backdrop-blur-[20px] border border-[rgba(255,255,255,0.03)] px-12 py-3 rounded-[12px] group overflow-hidden w-[200px] transition-all duration-300 active:scale-95"
              style={{
                background: "linear-gradient(90deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.08) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.08) 100%)"
              }}
            >
              {/* Default Shadow State */}
              <div className="absolute inset-0 shadow-[inset_0px_1px_24px_6px_rgba(255,255,255,0.16)] pointer-events-none transition-opacity duration-300 group-hover:opacity-0" />

              {/* Hover Background & Shadow State */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-[inset_0px_0px_12px_0px_rgba(241,201,255,0.2),inset_0px_1px_8px_0px_rgba(255,255,255,0.12),inset_0px_1px_20px_6px_rgba(255,255,255,0.16)]"
                style={{
                  background: "linear-gradient(90deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0.24) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.08) 100%)"
                }}
              />

              <span className="relative text-white font-['Outfit',sans-serif] font-bold text-[16px] leading-[24px]">
                View all
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
