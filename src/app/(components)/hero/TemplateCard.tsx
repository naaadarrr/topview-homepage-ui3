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

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function TemplateCard({ image, title, aspectRatio, hideTitle }: TemplateCardProps) {
  return (
    <div className={`relative group cursor-pointer rounded-[12px] transition-all duration-300 flex flex-col overflow-hidden h-full ${hideTitle ? 'bg-[#000000eb] hover:bg-[rgba(255,255,255,0.08)]' : 'bg-[#000000eb] hover:bg-white/15'}`}>
      {/* Image Frame */}
      <div className={`relative w-full ${aspectRatio ? aspectRatio : 'overflow-hidden flex-grow'} rounded-[12px] transition-all duration-300`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* Subtle overlay shadow from design - node 4008:3427 */}
        <div className="absolute inset-0 bg-white/10 pointer-events-none rounded-[inherit]" />

        {/* State3 Overlay for Avatar types - Figma 4282:1775 */}
        {hideTitle && (
          <div className="absolute inset-0 bg-white/15 opacity-0 transition-opacity duration-300 pointer-events-none" />
        )}

        {/* Top Right Sound Icon - Only visible on hover for Video Agent type */}
        {!hideTitle && (
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.08)] backdrop-blur backdrop-filter flex items-center justify-center relative overflow-hidden group/sound">
              <SoundIcon />
              {/* Glossy/Shine overlays from Figma 4282:1596 */}
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_24px_6px_rgba(255,255,255,0.16)]" />
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover/sound:opacity-100 shadow-[inset_0px_0px_12px_0px_rgba(241,201,255,0.2),inset_0px_1px_8px_0px_rgba(255,255,255,0.12)] transition-opacity" />
            </div>
          </div>
        )}
      </div>

      {/* Bottom Content Area */}
      {hideTitle ? (
        /* Avatar Type - Generate Button below on hover */
        <div className="max-h-0 opacity-0 group-hover:max-h-[70px] group-hover:opacity-100 transition-all duration-300 overflow-hidden">
          <div className="p-[12px]">
            <button
              className="w-full bg-[#3643ff] border border-[rgba(255,255,255,0.03)] border-solid py-[8px] rounded-[8px] flex items-center justify-center gap-[8px] relative overflow-hidden transition-transform active:scale-95 group/btn"
            >
              <span className="text-white font-['Outfit',sans-serif] font-semibold text-[14px] leading-[18px]">
                Generate
              </span>
              <ArrowRightIcon className="text-white w-4 h-4" />
              {/* Inner Shadow/Glossy Effect */}
              <div className="absolute inset-0 shadow-[inset_0px_1px_24px_6px_rgba(255,255,255,0.16)] pointer-events-none rounded-[8px]" />
            </button>
          </div>
        </div>
      ) : (
        /* Video Agent Type - Title + Button on hover */
        <div className="flex flex-col p-3">
          <div className="min-h-[24px] flex items-center">
            <p className="text-white font-['Outfit',sans-serif] font-semibold text-[16px] truncate w-full">
              {title}
            </p>
          </div>

          <div className="max-h-0 opacity-0 group-hover:max-h-[56px] group-hover:opacity-100 transition-all duration-300 overflow-hidden group-hover:pt-2">
            <button className="w-full bg-[#3643ff] hover:bg-[#2b36cc] transition-colors px-[18px] py-2 rounded-[8px] flex items-center justify-center gap-2 relative group/btn">
              <span className="text-white font-['Outfit',sans-serif] font-semibold text-[14px] leading-[18px]">
                Generate
              </span>
              <ArrowRightIcon className="text-white w-4 h-4" />
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_20px_6px_rgba(255,255,255,0.16)] rounded-[8px]" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
