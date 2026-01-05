/* eslint-disable @next/next/no-img-element */
import React from 'react';

type BannerCardProps = {
    title: string;
    description: string;
    image: string;
    className?: string;
    onClick?: () => void;
    size?: 'default' | 'small';
};

export default function BannerCard({
    title,
    description,
    image,
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
            {/* Thumbnail Area - Updated dimensions for small variant to 320x180 */}
            <div className={`relative ${isSmall ? 'w-[320px] h-[180px]' : 'w-[480px] h-[270px]'} rounded-[16px] overflow-hidden backdrop-blur-[2.063px] backdrop-filter group`}>
                {/* Background Image */}
                <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
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
                <div className="flex items-center justify-center w-[32px] h-[32px] rounded-full opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
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
