/* eslint-disable @next/next/no-img-element */
import React from "react";

const imgIcon = "http://localhost:3845/assets/899da8795051be2ad34036b4b534c961f2a053d4.svg";
const imgDropdownArr = "http://localhost:3845/assets/41dbf2c8712cc95c2648fe0d5c370d4a07f3f3cd.svg";
const imgUpload = "http://localhost:3845/assets/47935e4c4b9d27a16bfa5c78f5be6fec6ea9c1a0.svg";
const imgVideo = "http://localhost:3845/assets/9a61e20563fc7ed00a29f82f703af8bdc90d9b37.svg";
const imgSend = "http://localhost:3845/assets/093b9469662218e48c116efc1d3eee9576da1dff.svg";

export default function HeroSection() {
    return (
        <div className="relative w-full flex flex-col items-center pt-[64px] pb-[96px] px-4">
            {/* Badge */}
            <div className="relative mb-[24px]">
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
            <h1 className="text-[48px] leading-[60px] font-bold text-white text-center font-['Outfit',sans-serif] mb-[48px] tracking-tight">
                Create Any Video,  Just Tell Your Agent
            </h1>

            {/* Input Area */}
            <div className="relative w-full max-w-[800px] bg-[#1C1C1D] rounded-[24px] border border-[#272729] p-[20px] shadow-[0px_15px_33px_0px_rgba(0,0,0,0.1),0px_60px_60px_0px_rgba(0,0,0,0.09),0px_135px_81px_0px_rgba(0,0,0,0.05)]">
                {/* Text Input */}
                <textarea
                    className="w-full h-[80px] bg-transparent text-[16px] text-[rgba(255,255,255,0.85)] placeholder-[rgba(255,255,255,0.5)] resize-none outline-none font-['Inter',sans-serif] leading-[24px]"
                    placeholder="Upload your product image and enter your idea. You can also provide a reference video to replicate its content."
                />

                {/* Bottom Actions */}
                <div className="flex items-center justify-between mt-[16px]">
                    <div className="flex items-center gap-[8px]">
                        {/* Upload Image Button */}
                        <button className="flex items-center gap-[6px] px-[12px] py-[8px] rounded-[8px] bg-[#3A3A3C] hover:bg-[#4A4A4C] transition-colors">
                            <img src={imgUpload} alt="Upload" className="w-[16px] h-[16px]" />
                            <span className="text-[13px] text-[rgba(255,255,255,0.85)] font-['Inter',sans-serif]">Upload Image</span>
                        </button>

                        {/* Reference Video Button */}
                        <button className="flex items-center gap-[6px] px-[12px] py-[8px] rounded-[8px] bg-[#3A3A3C] hover:bg-[#4A4A4C] transition-colors">
                            <img src={imgVideo} alt="Video" className="w-[16px] h-[16px]" />
                            <span className="text-[13px] text-[rgba(255,255,255,0.85)] font-['Inter',sans-serif]">Reference Video</span>
                        </button>
                    </div>

                    <div className="flex items-center gap-[12px]">
                        {/* Aspect Ratio Selector */}
                        <div className="flex items-center gap-[4px] cursor-pointer hover:opacity-80 transition-opacity">
                            <span className="text-[13px] text-[rgba(255,255,255,0.85)] font-['Inter',sans-serif]">9:16</span>
                            <img src={imgDropdownArr} alt="Dropdown" className="w-[10px] h-[10px]" />
                        </div>

                        {/* Send Button */}
                        <button className="w-[32px] h-[32px] flex items-center justify-center rounded-full bg-[#3A3A3C] hover:bg-[#4A4A4C] transition-colors">
                            <img src={imgSend} alt="Send" className="w-[14px] h-[14px]" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

