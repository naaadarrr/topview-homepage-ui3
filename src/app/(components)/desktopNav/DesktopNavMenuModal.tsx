"use client";

import React from "react";
import { MenuId } from "../config";
import { useRouter } from "next/navigation";

interface DesktopNavMenuModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const menuSections = [
    {
        title: "AI Ads",
        items: [
            { name: "AI Video Agent", link: "#" },
            { name: "AI Ads Video", link: "#" },
            { name: "AI Product Video", link: "#" },
            { name: "AI UGC Video", link: "#" },
            { name: "URL to Video", link: "#" },
        ]
    },
    {
        title: "AI Avatar",
        items: [
            { name: "AI Avatar Generator", link: "#" },
            { name: "Product Avatar", link: "#" },
            { name: "Design My Avatar", link: "#" },
            { name: "AI Lip-sync", link: "#" },
        ]
    },
    {
        title: "AI Video",
        items: [
            { name: "AI Video Generator", link: "#" },
            { name: "AI Short Video", link: "#" },
            { name: "Video Face Swap", link: "#" },
            { name: "Text to Video", link: "#" },
            { name: "Image to Video", link: "#" },
        ]
    }
];

export default function DesktopNavMenuModal({ isOpen, onClose }: DesktopNavMenuModalProps) {
    const router = useRouter();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[2000] flex items-start justify-center pt-[64px]">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-transparent" onClick={onClose} />
            
            {/* Modal Content */}
            <div 
                className="relative w-fit backdrop-blur-[20px] bg-gradient-to-r from-black/92 to-black/92 border border-white/10 rounded-[16px] shadow-2xl p-6 flex gap-10"
                style={{ 
                    backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.08) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.92) 0%, rgba(0, 0, 0, 0.92) 100%)" 
                }}
            >
                {menuSections.map((section) => (
                    <div key={section.title} className="flex flex-col min-w-[160px]">
                        {/* Section Title */}
                        <div className="px-2 py-2">
                            <span className="text-[rgba(255,255,255,0.64)] text-[14px] font-medium font-['Outfit',sans-serif] leading-[20px]">
                                {section.title}
                            </span>
                        </div>
                        
                        {/* Items */}
                        <div className="flex flex-col">
                            {section.items.map((item) => (
                                <div 
                                    key={item.name}
                                    onClick={() => {
                                        router.push(item.link);
                                        onClose();
                                    }}
                                    className="px-2 py-2 rounded-[8px] hover:bg-white/5 cursor-pointer transition-colors"
                                >
                                    <span className="text-white text-[14px] font-medium font-['Outfit',sans-serif] leading-[20px] whitespace-nowrap">
                                        {item.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
