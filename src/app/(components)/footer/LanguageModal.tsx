/* eslint-disable @next/next/no-img-element */
import React from 'react';

const imgClose = "http://localhost:3845/assets/0491f3e472be934ea1a5270282993733d764e736.svg";

type LanguageModalProps = {
    isOpen: boolean;
    onClose: () => void;
    currentLanguage: string;
    onSelect: (language: string) => void;
};

const languages = [
    "English", "Spanish", "French", "German", "Italian", "Japanese",
    "Chinese", "Russian", "Portuguese", "Arabic", "Korean", "Hindi",
    "Dutch", "Turkish", "Swedish", "Norwegian", "Finnish", "Thai"
];

export default function LanguageModal({ isOpen, onClose, currentLanguage, onSelect }: LanguageModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-[800px] bg-[#1C1C1D] rounded-[16px] border border-[#272729] p-[24px] shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between mb-[32px]">
                    <h2 className="text-[20px] font-semibold text-white font-['Outfit',sans-serif]">
                        Select Your Language
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-1 hover:opacity-80 transition-opacity"
                    >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L13 13M1 13L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                {/* Language Grid */}
                <div className="flex flex-wrap gap-x-[12px] gap-y-[8px]">
                    {languages.map((language) => {
                        const isSelected = language === currentLanguage;
                        return (
                            <div
                                key={language}
                                onClick={() => {
                                    onSelect(language);
                                    onClose();
                                }}
                                className={`
                                    flex items-center px-[12px] py-[6px] rounded-[4px] cursor-pointer transition-all w-[240px]
                                    ${isSelected ? 'bg-[#2C2C2E]' : 'hover:bg-[rgba(255,255,255,0.05)]'}
                                `}
                            >
                                <span className={`text-[14px] font-['Outfit',sans-serif] leading-[20px] font-medium ${isSelected ? 'text-transparent bg-clip-text' : 'text-white'}`}
                                    style={isSelected ? {
                                        backgroundImage: "linear-gradient(89.86deg, #7881FF 0%, #C1C5FF 99.94%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent"
                                    } : {}}>
                                    {language}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
