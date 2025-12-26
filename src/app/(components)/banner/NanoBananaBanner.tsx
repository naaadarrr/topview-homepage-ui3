/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function NanoBananaBanner() {
    return (
        <div
            className="bg-gradient-to-r from-[#ede574] via-[#e1f5c4] to-[#ede574] via-50% relative w-full h-[48px] flex items-center justify-center overflow-hidden"
            data-name="Nano Banana 活动banner"
            data-node-id="4020:1445"
        >
            <div className="flex items-center gap-[12px] relative z-10 px-4">
                <p className="font-sans font-semibold text-[15px] leading-[20px] text-black tracking-[-0.3px] text-nowrap hidden sm:block">
                    Get 365 Days of Free Banana Pro
                </p>
                <p className="font-sans font-semibold text-[15px] leading-[20px] text-black tracking-[-0.3px] text-nowrap sm:hidden">
                    Free Banana Pro
                </p>

                <div className="bg-black px-[10px] py-[4px] rounded-[20px] flex items-center">
                    <p className="font-sans font-semibold text-[14px] leading-[20px] text-white tracking-[-0.28px] text-nowrap">
                        43% OFF
                    </p>
                </div>



                <p className="font-sans font-semibold text-[15px] leading-[20px] text-black tracking-[-0.3px] underline decoration-solid cursor-pointer text-nowrap">
                    Learn More
                </p>
            </div>

            {/* Glossy overlay */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_0px_12px_0px_rgba(241,201,255,0.2),inset_0px_1px_8px_0px_rgba(255,255,255,0.12),inset_0px_1px_20px_6px_rgba(255,255,255,0.16)]" />
        </div>
    );
}
