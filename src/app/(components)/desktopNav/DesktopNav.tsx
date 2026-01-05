/* eslint-disable @next/next/no-img-element */
"use client";
import React, { lazy } from "react";
// import Link from "next/link";
import { useSession } from "next-auth/react";
import { useDisclosure } from "@chakra-ui/react";
import { trackGAEvent } from "@/utils/ga";
import { useRouter } from "next/navigation";
import DesktopNavMenuModal from "./DesktopNavMenuModal";

const LoginModal = lazy(() => import("@/app/(components)/login/LoginModal"));
const UserInfoContent = lazy(
    () => import("@/app/(components)/login/UserInfoContent"),
);

const imgTopview =
    "http://localhost:3845/assets/85e96141385697c920ac821b75f9d1de68d4502e.svg";
const imgIcon =
    "http://localhost:3845/assets/10dbc82f710a75e9b5720403d1b683ad28dc4354.svg";

const imgChevron = "/icons/dropdown-icon.svg";

type SidebarUpgradeProps = {
    className?: string;
    onClick?: (e: React.MouseEvent) => void;
};

function SidebarUpgrade({ className, onClick }: SidebarUpgradeProps) {
    return (
        <div
            className={`group/signup ${className}`}
            data-name="State=Default"
            data-node-id="4306:1269"
            onClick={onClick}
        >
            <div
                className="content-stretch flex items-center justify-center relative shrink-0 w-full z-10"
                data-node-id="I4306:1269;4020:1244"
            >
                <div
                    className="flex flex-col font-['Outfit',sans-serif] font-bold justify-center leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white"
                    data-node-id="I4306:1269;4020:1245"
                >
                    Start for Free
                </div>
            </div>

            {/* Default State Background */}
            <div className="absolute inset-0 bg-[#3643ff] rounded-[12px] transition-opacity duration-300 group-hover/signup:opacity-0" />

            {/* Hover State Background */}
            <div className="absolute inset-0 opacity-0 group-hover/signup:opacity-100 rounded-[12px] transition-opacity duration-300"
                style={{ backgroundImage: "linear-gradient(rgb(51, 65, 255) 0%, rgb(129, 162, 252) 100%), linear-gradient(90deg, rgb(54, 67, 255) 0%, rgb(54, 67, 255) 100%)" }} />

            {/* Default Inner Shadow */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_20px_6px_rgba(255,255,255,0.16)] rounded-[12px] transition-opacity duration-300 group-hover/signup:opacity-0" />

            {/* Hover Inner Shadows */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover/signup:opacity-100 shadow-[inset_0px_0px_12px_0px_rgba(241,201,255,0.2),inset_0px_1px_8px_0px_rgba(255,255,255,0.12),inset_0px_1px_20px_6px_rgba(255,255,255,0.16)] rounded-[12px] transition-opacity duration-300" />
        </div>
    );
}

type LoginBtnGroupProps = {
    className?: string;
    onClick?: (e: React.MouseEvent) => void;
};

function LoginBtnGroup({ className, onClick }: LoginBtnGroupProps) {
    return (
        <div
            className={`group/login ${className}`}
            data-name="State=Default"
            data-node-id="4020:1264"
            onClick={onClick}
        >
            <div
                className="font-['Outfit',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white z-10"
                data-node-id="4020:1260"
            >
                Log in
            </div>

            {/* Default State Background */}
            <div className="absolute inset-0 rounded-[12px] transition-opacity duration-300 group-hover/login:opacity-0"
                style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.08) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.08) 100%)" }} />

            {/* Hover State Background */}
            <div className="absolute inset-0 opacity-0 group-hover/login:opacity-100 rounded-[12px] transition-opacity duration-300"
                style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0.24) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.08) 100%)" }} />

            {/* Default Inner Shadow */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_24px_6px_rgba(255,255,255,0.16)] rounded-[12px] transition-opacity duration-300 group-hover/login:opacity-0" />

            {/* Hover Inner Shadows */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover/login:opacity-100 shadow-[inset_0px_0px_12px_0px_rgba(241,201,255,0.2),inset_0px_1px_8px_0px_rgba(255,255,255,0.12),inset_0px_1px_20px_6px_rgba(255,255,255,0.16)] rounded-[12px] transition-opacity duration-300" />
        </div>
    );
}

export default function DesktopNav() {
    const { data: session } = useSession();
    const { isOpen: isLoginOpen, onOpen: onLoginOpen, onClose: onLoginClose } = useDisclosure();
    const { isOpen: isMenuOpen, onOpen: onMenuOpen, onClose: onMenuClose } = useDisclosure();
    const router = useRouter();

    // Using the actual menu items from Figma
    const menuItems = [
        { name: "Use cases", hasIcon: true },
        { name: "AI tools", hasIcon: true },
        { name: "Resources", hasIcon: true },
        { name: "Ad Library", hasIcon: false },
        { name: "API", hasIcon: false },
        { name: "Pricing", hasIcon: false },
    ];

    const handleLogin = (e: React.MouseEvent) => {
        e.stopPropagation();
        trackGAEvent("offical.home", "getStartFreeBtn.topRight.click", "");
        onLoginOpen();
    };

    return (
        <div className="w-full h-[64px] flex justify-between items-center px-[16px] md:px-[32px] relative backdrop-blur-[25px] bg-[rgba(0,0,0,0.64)]">
            {/* Logo 区域 - Updated to use stable Cloudfront source */}
            <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => router.push("/")}
            >
                <div className="relative w-[132px] h-[26px]">
                    <img
                        alt="TopView"
                        className="block w-full h-auto"
                        src="https://d1735p3aqhycef.cloudfront.net/official-website/public/tools/topview_logo.png"
                    />
                </div>
            </div>

            {/* 中间菜单 */}
            <div className="flex items-center justify-center gap-[0px]">
                {menuItems.map((item) => {
                    const isActive = item.name === "AI tools" && isMenuOpen;
                    return (
                        <div
                            key={item.name}
                            onClick={() => {
                                if (item.name === "AI tools") {
                                    onMenuOpen();
                                }
                            }}
                            className={`
                                group flex items-center gap-[4px] px-[16px] py-[8px] cursor-pointer rounded-full transition-all whitespace-nowrap
                                ${isActive ? "bg-[rgba(255,255,255,0.16)] text-white" : "text-[rgba(255,255,255,0.64)] hover:bg-[rgba(255,255,255,0.16)] hover:text-white"}
                            `}
                        >
                            <span className="text-[16px] font-normal font-['Outfit',sans-serif] leading-[24px] transition-colors whitespace-nowrap">
                                {item.name}
                            </span>
                            {item.hasIcon && (
                                <div className={`relative w-6 h-6 transition-all duration-300 ${isActive ? "rotate-180 opacity-100" : "opacity-80 group-hover:opacity-100"}`}>
                                    <img
                                        alt=""
                                        className="block max-w-none size-full brightness-0 invert"
                                        src={imgChevron}
                                    />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* 右侧按钮 */}
            <div className="flex gap-[8px] items-center">
                {session ? (
                    <UserInfoContent isHideName />
                ) : (
                    <>
                        <LoginBtnGroup
                            className="flex items-center justify-center px-[18px] py-[10px] relative rounded-[12px] cursor-pointer overflow-hidden backdrop-blur-[20px]"
                            onClick={handleLogin}
                        />
                        <SidebarUpgrade
                            className="flex flex-col items-center justify-center px-[18px] py-[10px] relative rounded-[12px] cursor-pointer overflow-hidden"
                            onClick={handleLogin}
                        />
                    </>
                )}
            </div>

            {/* 弹窗组件 */}
            <LoginModal
                isOpen={isLoginOpen}
                onClose={onLoginClose}
                callbackUrl={"/dashboard/home"}
            />
            <DesktopNavMenuModal
                isOpen={isMenuOpen}
                onClose={onMenuClose}
            />
        </div>

    );
}
