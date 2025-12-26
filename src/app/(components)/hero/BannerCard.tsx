/* eslint-disable @next/next/no-img-element */
import React from 'react';

type BannerCardProps = {
    title: string;
    description: string;
    image: string;
    overlayMainText?: string;
    overlaySubText?: string;
    className?: string;
    onClick?: () => void;
};

export default function BannerCard({
    title,
    description,
    image,
    overlayMainText,
    overlaySubText,
    className = "",
    onClick
}: BannerCardProps) {
    return (
        <div
            onClick={onClick}
            className={`flex flex-col items-start relative rounded-[16px] overflow-hidden transition-all duration-300 shrink-0 group cursor-pointer hover:bg-[rgba(255,255,255,0.08)] ${className}`}
        >
            {/* Thumbnail Area with Text Overlay - Added rounded-[16px] for 4-corner rounding */}
            <div className="relative w-[528px] h-[297px] rounded-[16px] overflow-hidden backdrop-blur-[2.063px] backdrop-filter">
                {/* Background Image */}
                <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Figma Overlay & Shadow for Pic */}
                <div className="absolute inset-0 bg-[rgba(255,255,255,0.1)] border-[1.031px] border-[rgba(255,255,255,0.03)] border-solid rounded-[16px] pointer-events-none" />

                {/* Text Overlay Content (SEEDANCE etc.) */}
                {(overlayMainText || overlaySubText) && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-[4px] pointer-events-none px-12">
                        {overlayMainText && (
                            <h4
                                className="font-['Outfit',sans-serif] font-extrabold text-[38px] text-white leading-tight text-center drop-shadow-[0px_2.06px_8.24px_rgba(0,0,0,0.25)] select-none"
                                dangerouslySetInnerHTML={{ __html: overlayMainText }}
                            />
                        )}
                        {overlaySubText && (
                            <p className="font-['Outfit',sans-serif] font-light text-[12px] text-white/80 capitalize text-center drop-shadow-[0px_2.06px_8.24px_rgba(0,0,0,0.25)] select-none">
                                {overlaySubText}
                            </p>
                        )}
                    </div>
                )}
            </div>

            {/* Bottom Content Area */}
            <div className="w-full flex items-center justify-between px-[12px] pt-0 pb-[12px] mt-[12px]">
                <div className="flex flex-col gap-[2px] items-start">
                    <h3 className="font-['Outfit',sans-serif] font-bold text-[24px] text-[#f7f7f8] leading-normal">
                        {title}
                    </h3>
                    <p className="font-['Outfit',sans-serif] text-[14px] text-[rgba(255,255,255,0.48)] leading-[20px]">
                        {description}
                    </p>
                </div>

                {/* Hover Arrow Icon */}
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                >
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    );
}
