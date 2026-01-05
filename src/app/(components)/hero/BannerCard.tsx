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
    size?: 'default' | 'small';
};

export default function BannerCard({
    title,
    description,
    image,
    overlayMainText,
    overlaySubText,
    className = "",
    onClick,
    size = 'default'
}: BannerCardProps) {
    const isSmall = size === 'small';

    return (
        <div
            onClick={onClick}
            className={`flex flex-col items-start relative rounded-[16px] overflow-hidden transition-all duration-500 ease-in-out shrink-0 group cursor-pointer hover:bg-[rgba(255,255,255,0.08)] ${className}`}
        >
            {/* Thumbnail Area with Text Overlay - Updated dimensions for small variant to 320x180 */}
            <div className={`relative ${isSmall ? 'w-[320px] h-[180px]' : 'w-[480px] h-[270px]'} rounded-[16px] overflow-hidden backdrop-blur-[2.063px] backdrop-filter group`}>
                {/* Background Image */}
                <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Text Overlay */}
                {(overlayMainText || overlaySubText) && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 px-6 text-center">
                        {overlayMainText && (
                            <h4
                                className={`font-['Outfit',sans-serif] font-extrabold text-white leading-tight mb-1 drop-shadow-lg ${isSmall ? 'text-[32px]' : 'text-[38px]'}`}
                                dangerouslySetInnerHTML={{ __html: overlayMainText }}
                            />
                        )}
                        {overlaySubText && (
                            <p className={`font-['Outfit',sans-serif] font-light text-white opacity-80 uppercase tracking-wider ${isSmall ? 'text-[10px]' : 'text-[12px]'}`}>
                                {overlaySubText}
                            </p>
                        )}
                    </div>
                )}

                {/* Gradient Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/20 z-0" />
            </div>

            {/* Bottom Content Area */}
            <div className="w-full flex items-center justify-between px-[12px] pt-0 pb-[12px] mt-[12px]">
                <div className="flex flex-col gap-[2px] items-start">
                    <h3 className={`font-['Outfit',sans-serif] font-bold ${isSmall ? 'text-[16px]' : 'text-[24px]'} text-[#f7f7f8] leading-tight`}>
                        {title}
                    </h3>
                    <p className={`font-['Outfit',sans-serif] font-medium ${isSmall ? 'text-[12px]' : 'text-[14px]'} text-[rgba(255,255,255,0.48)] leading-normal mt-0.5`}>
                        {description}
                    </p>
                </div>

                {/* Hover Arrow Icon */}
                <div className="flex items-center justify-center w-[32px] h-[32px] rounded-full bg-white/5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-white"
                    >
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
