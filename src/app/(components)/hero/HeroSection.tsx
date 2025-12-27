/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const imgIcon = "/ai.png";
const imgDropdownArr = "/dropdown-icon.svg";
const imgBgHero = "/bg-hero.png";

const SendIcon = ({ isActive }: { isActive: boolean }) => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-300">
        <g clipPath="url(#clip0_send)">
            <circle cx="16" cy="16" r="16" fill={isActive ? "#3643FF" : "#3A3A3C"} className="transition-colors duration-300" />
            <path d="M15.999 10.5L15.999 21.5M15.999 10.5L11.499 15M15.999 10.5L20.499 15" stroke={isActive ? "white" : "#1C1C1D"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-300" />
        </g>
        <defs>
            <clipPath id="clip0_send">
                <path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

const UploadIcon = ({ className }: { className?: string }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <g clipPath="url(#clip0_upload)">
            <path d="M6 16.333L9.44435 12.8886C9.94355 12.3894 10.7453 12.3659 11.273 12.8349L13.3333 14.6663M18 11.8397V7.73299C18 6.99661 17.403 6.39966 16.6667 6.39966H7.33333C6.59695 6.39966 6 6.99661 6 7.73299V16.2663C6 17.0027 6.59695 17.5997 7.33333 17.5997H12.6667" stroke="white" strokeLinejoin="round" />
            <path d="M14.7998 16.5997H19.1998M16.9998 14.3997V18.7997" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="14.3347" cy="9.66649" r="0.933333" fill="white" />
        </g>
        <defs>
            <clipPath id="clip0_upload">
                <path d="M0 9.6C0 6.23969 0 4.55953 0.653961 3.27606C1.2292 2.14708 2.14708 1.2292 3.27606 0.653961C4.55953 0 6.23969 0 9.6 0H14.4C17.7603 0 19.4405 0 20.7239 0.653961C21.8529 1.2292 22.7708 2.14708 23.346 3.27606C24 4.55953 24 6.23969 24 9.6V14.4C24 17.7603 24 19.4405 23.346 20.7239C22.7708 21.8529 21.8529 22.7708 20.7239 23.346C19.4405 24 17.7603 24 14.4 24H9.6C6.23969 24 4.55953 24 3.27606 23.346C2.14708 22.7708 1.2292 21.8529 0.653961 20.7239C0 19.4405 0 17.7603 0 14.4V9.6Z" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

const ReferenceIcon = ({ className }: { className?: string }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <g clipPath="url(#clip0_ref)">
            <path d="M12 5C15.866 5 19 8.13401 19 12C19 12.0915 18.9736 12.1762 18.9307 12.25C18.9736 12.3238 19 12.4085 19 12.5C19 13.8807 17.8807 15 16.5 15C15.6046 15 14.8214 14.5278 14.3799 13.8203C13.8316 14.5361 12.9713 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C12.7692 9 13.469 9.29156 14 9.76758V9.5C14 9.22386 14.2239 9 14.5 9C14.7761 9 15 9.22386 15 9.5V12.5C15 13.3284 15.6716 14 16.5 14C17.3284 14 18 13.3284 18 12.5C18 12.4087 18.0256 12.3237 18.0684 12.25C18.0256 12.1763 18 12.0913 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C12.6686 18 13.3109 17.8905 13.9102 17.6895C14.1719 17.6018 14.4552 17.7432 14.543 18.0049C14.6307 18.2666 14.4893 18.5499 14.2275 18.6377C13.5272 18.8726 12.778 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5ZM12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10Z" fill="white" />
        </g>
        <defs>
            <clipPath id="clip0_ref">
                <path d="M0 9.6C0 6.23969 0 4.55953 0.653961 3.27606C1.2292 2.14708 2.14708 1.2292 3.27606 0.653961C4.55953 0 6.23969 0 9.6 0H14.4C17.7603 0 19.4405 0 20.7239 0.653961C21.8529 1.2292 22.7708 2.14708 23.346 3.27606C24 4.55953 24 6.23969 24 9.6V14.4C24 17.7603 24 19.4405 23.346 20.7239C22.7708 21.8529 21.8529 22.7708 20.7239 23.346C19.4405 24 17.7603 24 14.4 24H9.6C6.23969 24 4.55953 24 3.27606 23.346C2.14708 22.7708 1.2292 21.8529 0.653961 20.7239C0 19.4405 0 17.7603 0 14.4V9.6Z" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

export default function HeroSection() {
    const [inputValue, setInputValue] = useState("");

    return (
        <div className="relative w-full flex flex-col items-center pt-[64px] pb-[96px] px-4 md:px-8 overflow-hidden">
            {/* Animated Background - 2s delay, 1.5s fade */}
            {/* Animated Background - 2s delay, 3s fade for silkier effect */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 3, ease: "easeInOut" }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[1920px] h-[1080px] z-0 pointer-events-none"
            >
                {/* Aligned to top to match typical hero composition */}
                <img
                    src={imgBgHero}
                    alt=""
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Badge */}
            <div className="relative z-10 mb-[24px]">
                <div
                    className="flex items-center justify-center p-[1px] rounded-full"
                    style={{ backgroundImage: "linear-gradient(-90deg, rgba(230, 148, 148, 0.92) 0%, rgba(174, 142, 250, 0.8) 100%)" }}
                >
                    <div
                        className="relative flex items-center justify-center px-[12px] py-[6px] rounded-full overflow-hidden"
                        style={{ backgroundImage: "linear-gradient(174.56deg, rgb(186, 223, 223) 10.218%, rgb(164, 173, 249) 91.054%)" }}
                    >
                        <span className="relative z-10 text-[14px] font-medium text-[#0e1bd3] font-['Outfit',sans-serif] leading-[16.8px] text-nowrap">
                            Meet Topview - Your AI Video Agent
                        </span>
                        <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-3px_20px_0px_rgba(241,201,255,0.2),inset_0px_0px_6px_0px_rgba(255,255,255,0.2),inset_0px_0px_20px_6px_rgba(255,255,255,0.16)] rounded-full" />
                    </div>
                </div>
            </div>

            {/* Heading */}
            <h1 className="relative z-10 text-[48px] leading-[60px] font-bold text-white text-center font-['Outfit',sans-serif] mb-[48px] tracking-tight">
                Create Any Video,  Just Tell Your Agent
            </h1>

            {/* Input Area */}
            <div className="relative z-10 w-full max-w-[800px] bg-[#1C1C1D] rounded-[16px] border border-[rgba(255,255,255,0.05)] p-[16px] shadow-[0px_15px_33px_0px_rgba(0,0,0,0.1),0px_60px_60px_0px_rgba(0,0,0,0.09),0px_135px_81px_0px_rgba(0,0,0,0.05)]">
                {/* Text Input */}
                <textarea
                    className="w-full h-[80px] bg-transparent text-[15px] text-white placeholder-[#646370] resize-none outline-none font-['Inter',sans-serif] leading-[24px]"
                    placeholder="Upload your product image and enter your idea. You can also provide a reference video to replicate its content."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />

                {/* Bottom Actions */}
                <div className="flex items-center justify-between mt-[12px] max-w-full overflow-hidden">
                    <div className="flex items-center gap-[8px]">
                        {/* Upload Image Button */}
                        <button className="flex items-center gap-[4px] p-[4px] sm:pl-[4px] sm:pr-[8px] sm:py-[4px] rounded-[8px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.16)] transition-colors group">
                            <UploadIcon className="w-[24px] h-[24px] opacity-80 group-hover:opacity-100 transition-opacity" />
                            <span className="text-[13px] text-[rgba(255,255,255,0.85)] group-hover:text-white font-['Inter',sans-serif] transition-colors hidden sm:block">Upload Image</span>
                        </button>

                        {/* Reference Video Button */}
                        <button className="flex items-center gap-[4px] p-[4px] sm:pl-[4px] sm:pr-[8px] sm:py-[4px] rounded-[8px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.16)] transition-colors group">
                            <ReferenceIcon className="w-[24px] h-[24px] opacity-80 group-hover:opacity-100 transition-opacity" />
                            <span className="text-[13px] text-[rgba(255,255,255,0.85)] group-hover:text-white font-['Inter',sans-serif] transition-colors hidden sm:block">Reference Video</span>
                        </button>
                    </div>

                    <div className="flex items-center gap-[12px]">
                        {/* Aspect Ratio Selector */}
                        <div className="flex items-center gap-[4px] cursor-pointer bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.16)] pl-[12px] pr-[4px] py-[4px] rounded-[8px] transition-all group">
                            <span className="text-[13px] text-[rgba(255,255,255,0.85)] group-hover:text-white font-['Inter',sans-serif] leading-[16px] transition-colors">9:16</span>
                            <div className="w-[24px] h-[24px] flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                                <img src={imgDropdownArr} alt="Dropdown" className="block max-w-none size-full brightness-0 invert" />
                            </div>
                        </div>

                        {/* Send Button */}
                        <button className="w-[32px] h-[32px] rounded-full transition-opacity hover:opacity-80">
                            <SendIcon isActive={inputValue.trim().length > 0} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
