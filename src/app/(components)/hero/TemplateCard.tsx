"use client";

import React from "react";

interface TemplateCardProps {
  image: string;
  title: string;
  aspectRatio?: string;
  hideTitle?: boolean;
}

const SoundIcon = ({ className }: { className?: string }) => (
  <div className={className}>
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M23 9L17 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 9L23 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

export default function TemplateCard({ image, title, aspectRatio, hideTitle }: TemplateCardProps) {
  const ctaText = hideTitle ? "Generate" : "Use Template";

  return (
    <div className="relative group cursor-pointer rounded-[12px] flex flex-col overflow-hidden h-full bg-transparent">
      {/* Image Frame */}
      <div className={`relative w-full overflow-hidden ${aspectRatio ? aspectRatio : 'flex-grow'} rounded-[12px]`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* Subtle overlay shadow */}
        <div className="absolute inset-0 bg-white/10 pointer-events-none rounded-[inherit]" />

        {/* Top Right Sound Icon & Gradient - Only visible on hover for Video Agent type */}
        {!hideTitle && (
          <div className="absolute top-0 left-0 right-0 h-[55px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
            {/* Gradient Mask */}
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.24)] to-transparent" />

            {/* Sound Button */}
            <div className="absolute top-2 right-2 pointer-events-auto">
              <div className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.08)] backdrop-blur backdrop-filter flex items-center justify-center relative overflow-hidden group/sound">
                <SoundIcon />
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_24px_6px_rgba(255,255,255,0.16)]" />
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover/sound:opacity-100 shadow-[inset_0px_0px_12px_0px_rgba(241,201,255,0.2),inset_0px_1px_8px_0px_rgba(255,255,255,0.12)] transition-opacity" />
              </div>
            </div>
          </div>
        )}

        {/* ===== CTA: 底部渐变遮罩 + 白色按钮 (hover 时在图片内部出现) ===== */}
        {/* Bottom gradient mask */}
        <div className="absolute bottom-0 left-0 right-0 h-[64px] z-20 pointer-events-none bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />

        {/* CTA Button */}
        <div className="absolute bottom-[12px] left-[12px] right-[12px] z-30 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300 ease-out">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              // TODO: hook up actual action
            }}
            className="w-full h-[32px] rounded-[999px] bg-white text-black text-[12px] font-medium flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-[#E5E5E5] active:scale-[0.98]"
          >
            {ctaText}
          </button>
        </div>
      </div>

      {/* Title area - only for video type (no dropdown expand) */}
      {!hideTitle && (
        <div className="flex flex-col p-3">
          <div className="min-h-[24px] flex items-center">
            <p className="text-white font-['Outfit',sans-serif] font-semibold text-[16px] truncate w-full">
              {title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
