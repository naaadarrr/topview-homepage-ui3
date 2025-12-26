import React from 'react';

type TabState = "Default" | "Hover" | "Selected";

type TabItemProps = {
    text?: string;
    state?: TabState;
    onClick?: () => void;
    className?: string;
};

export default function TabItem({
    text = "Nutra",
    state = "Default",
    onClick,
    className = ""
}: TabItemProps) {

    // Base classes shared across all states
    const baseClasses = "relative flex items-center justify-center px-[8px] py-[4px] rounded-[8px] cursor-pointer transition-all duration-200 select-none";

    if (state === "Selected") {
        return (
            <button
                onClick={onClick}
                className={`${baseClasses} bg-white border border-white/64 ${className}`}
            >
                <span className="font-['Outfit',sans-serif] font-medium text-[14px] leading-[20px] text-black">
                    {text}
                </span>
            </button>
        );
    }

    if (state === "Hover") {
        return (
            <button
                onClick={onClick}
                className={`${baseClasses} backdrop-blur-[20px] border border-white/16 ${className}`}
                style={{
                    backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.03) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)"
                }}
            >
                <span className="font-['Outfit',sans-serif] font-medium text-[14px] leading-[20px] text-white/64">
                    {text}
                </span>

                {/* Inner Shadows for Hover State */}
                <div className="absolute inset-0 pointer-events-none rounded-[8px] shadow-[inset_0px_1px_12px_0px_rgba(255,255,255,0.12),inset_0px_1px_24px_6px_rgba(255,255,255,0.16)]" />
            </button>
        );
    }

    // Default State
    return (
        <button
            onClick={onClick}
            className={`${baseClasses} bg-white/3 border border-white/16 hover:bg-white/5 ${className}`}
        >
            <span className="font-['Outfit',sans-serif] font-medium text-[14px] leading-[20px] text-white/64">
                {text}
            </span>
        </button>
    );
}
