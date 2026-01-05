"use client";

import React, { useRef, useState } from "react";
import TemplateCard from "./TemplateCard";

const defaultCategories = [
  "All", "Nutra", "Beauty", "Health", "Wellness", "Fitness", "Nutrition",
  "Skincare", "Makeup", "Haircare", "Self-Care", "Meditation", "Mindfulness",
  "Wellbeing", "Fashion", "Lifestyle", "Cosmetics", "Hygiene", "Aromatherapy",
  "Gaming", "Travel", "Food", "Tech", "Cars", "Music", "Art", "Design", "Nature", "Business"
];

const defaultTemplates = [
  { title: "Explosion", image: "/template-0.png", height: "h-[556px]" },
  { title: "Melt Transition", image: "/template-1.png", height: "h-[494px]" },
  { title: "Ahegao", image: "/template-2.png", height: "h-[274px]" },
  { title: "Flame Transition", image: "/template-3.png", height: "h-[494px]" },
  { title: "Train Rush", image: "/template-4.png", height: "h-[493px]" },
  { title: "Splash Transition", image: "/template-5.png", height: "h-[494px]" },
  { title: "Firelava", image: "/template-6.png", height: "h-[279px]" },
  { title: "Flame On", image: "/template-7.png", height: "h-[278px]" },
  { title: "Shadow Smoke", image: "/template-8.png", height: "h-[494px]" },
  { title: "Earth Wave", image: "/template-9.png", height: "h-[208px]" },
  { title: "Giant Grab", image: "/template-10.png", height: "h-[494px]" },
  { title: "Earth Zoom Out", image: "/template-11.png", height: "h-[563px]" },
  { title: "Raven Transition", image: "/template-12.png", height: "h-[494px]" },
  { title: "Animalization", image: "/template-13.png", height: "h-[494px]" },
  { title: "Air Bending", image: "/template-14.png", height: "h-[492px]" },
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
      className={`px-3 py-1.5 rounded-[8px] text-[14px] font-[500] font-['Outfit',sans-serif] transition-all whitespace-nowrap border relative flex items-center justify-center min-w-[53px] leading-[20px] group shrink-0 overflow-hidden ${isActive
        ? "bg-white border-white text-black"
        : "bg-[rgba(255,255,255,0.03)] border-[rgba(255,255,255,0.16)] text-[rgba(255,255,255,0.64)] hover:text-white/80"
        }`}
    >
      {/* Background/Backdrop blur on hover (Only for Default state) */}
      {!isActive && (
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[20px] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.03) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.047) 0%, rgba(255, 255, 255, 0.02) 100%)",
          }}
        />
      )}

      <span className="relative z-10">{text}</span>

      {/* State Transitions for Shadows and Glows */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${isActive
          ? "opacity-100 shadow-[inset_0px_0px_8px_0px_rgba(255,255,255,0.48)]"
          : "opacity-0 group-hover:opacity-100 shadow-[inset_0px_1px_12px_0px_rgba(255,255,255,0.12),inset_0px_1px_24px_6px_rgba(255,255,255,0.16)]"
          }`}
      />
    </button>
  );
};



interface TemplateSectionProps {
  title?: string;
  description?: string;
  showTabs?: boolean;
  cardType?: "default" | "avatar";
  templates?: { title: string; image: string; height: string }[];
  aspectRatio?: string;
}

export default function TemplateSection({
  title = "Video Agent Templates",
  description,
  showTabs = true,
  cardType = "default",
  templates = defaultTemplates,
  aspectRatio
}: TemplateSectionProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTabsExpanded, setIsTabsExpanded] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const ToggleButton = ({ isExpanded, onClick, className = "" }: { isExpanded: boolean; onClick: () => void; className?: string }) => {
    return (
      <button
        onClick={onClick}
        className={`w-10 h-10 rounded-full border border-white/5 backdrop-blur-[10.5px] flex items-center justify-center transition-all relative group/toggle overflow-hidden cursor-pointer hover:border-white/10 active:scale-95 ${className}`}
        style={{
          background: "linear-gradient(rgba(51, 65, 255, 0.1) 0%, rgba(129, 162, 252, 0.1) 100%), rgba(255, 255, 255, 0.08)"
        }}
      >
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/toggle:opacity-100 transition-opacity" />
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_0.833px_0px_0px_rgba(255,255,255,0.12)] rounded-full" />
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
          className={`relative z-10 transition-transform duration-300 text-white ${isExpanded ? "rotate-180" : ""}`}>
          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    );
  };

  return (
    <section className="w-full flex flex-col items-center py-0 gap-4 overflow-hidden px-4 md:px-8">
      {/* Header */}
      <div className="flex flex-col items-center gap-1 w-full max-w-[1856px]">
        <h2 className="text-[36px] font-['Outfit',sans-serif] font-extrabold text-white text-center">
          {title}
        </h2>
        {description && (
          <p className="text-[14px] font-['Outfit',sans-serif] font-normal leading-[20px] text-[rgba(255,255,255,0.36)] text-center">
            {description}
          </p>
        )}
      </div>

      {/* Tab List & Pagination */}
      {showTabs && (
        <div className={`relative w-full flex flex-col gap-4 max-w-[1856px]`}>
          <div className="relative w-full flex items-center">
            <div
              ref={scrollRef}
              className={`flex gap-2 py-3 w-full transition-all duration-300 ${isTabsExpanded
                ? "flex-wrap overflow-visible justify-center"
                : "overflow-x-auto no-scrollbar scroll-smooth"
                }`}
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

            <div className={`absolute right-0 pr-0 z-20 pointer-events-none transition-all duration-300 ${isTabsExpanded ? "top-3" : "top-0 bottom-0 flex items-center pl-16 bg-gradient-to-l from-black via-black to-transparent"
              }`}>
              <div className={`flex gap-2.5 pointer-events-auto pr-0 ${isTabsExpanded ? "" : "py-2 pl-4"}`}>
                <ToggleButton isExpanded={isTabsExpanded} onClick={() => setIsTabsExpanded(!isTabsExpanded)} />
              </div>
            </div>
          </div>
        </div>
      )}

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
            <div
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{
                background: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 99%)"
              }}
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
    </section >
  );
}
