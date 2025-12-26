import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
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
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!mounted || !isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-[2000] flex items-start justify-center pt-[116px]">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-transparent"
                onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                }}
            />

            {/* Modal Content */}
            <div
                className="relative w-fit bg-[#1C1C1D] border border-[#272729] rounded-[16px] shadow-2xl p-6 flex gap-10 animate-in fade-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                {menuSections.map((section) => (
                    <div key={section.title} className="flex flex-col min-w-[160px]">
                        {/* Section Title */}
                        <div className="px-2 py-2">
                            <span className="text-[rgba(255,255,255,0.5)] text-[12px] font-medium font-['Outfit',sans-serif] leading-[20px] uppercase tracking-wider">
                                {section.title}
                            </span>
                        </div>

                        {/* Items */}
                        <div className="flex flex-col gap-1">
                            {section.items.map((item) => (
                                <div
                                    key={item.name}
                                    onClick={() => {
                                        router.push(item.link);
                                        onClose();
                                    }}
                                    className="group flex items-center px-3 py-2.5 rounded-[12px] hover:bg-[rgba(255,255,255,0.16)] cursor-pointer transition-all duration-200"
                                >
                                    <span className="text-white text-[14px] font-medium font-['Outfit',sans-serif] leading-[20px] whitespace-nowrap group-hover:text-white transition-colors">
                                        {item.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>,
        document.body
    );
}
