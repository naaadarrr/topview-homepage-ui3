"use client";

import {
  Button,
  HStack,
  Flex,
  // Image,
  useDisclosure,
} from "@chakra-ui/react";
// import { HamburgerIcon } from "@chakra-ui/icons";
import { Fragment, lazy, useState } from "react";
import MenuItem from "../(components)/menuItem";
import NavbarMobile from "./header/mobile/navbarMobile";
import { trackGAEvent } from "@/utils/ga";
import BrandLogo from "./header/BrandLogo";
import { prefixed } from "@/utils/media";
import { MENU_LIST, MenuId } from "../(components)/config";
// import { prefixed } from "@/utils/media";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
// import { HamburgerIcon } from "@chakra-ui/icons";
import DesktopNav from "../(components)/desktopNav/DesktopNav";

export type NotionData = {
  pageId: number;
  locale: string;
  titleList: string[];
  textList: string[];
  videoUrl: string;
  imgUrls: string[];
  linkUrl: string;
};

const TutorialVideoModal = lazy(
  () => import("../(components)/HelpCenter/TutorialVideoModal"),
);
const LoginModal = lazy(() => import("@/app/(components)/login/LoginModal"));
const UserInfoContent = lazy(
  () => import("@/app/(components)/login/UserInfoContent"),
);

// 顶部导航栏
export default function ResponsiveNavBar() {
  const path = usePathname();

  const DYNAMIC_MENU_LIST =
    path === "/"
      ? // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
      MENU_LIST.filter((menuItem) => menuItem.id !== MenuId.Home)
      : MENU_LIST;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    isOpen: isOpenTutorialVideoModal,
    onOpen: onOpenTutorialVideoModal,
    onClose: onCloseTutorialVideoModal,
  } = useDisclosure();

  const navButtonGroup = ["Use Cases", "AI tools", "Ads library", "Resources"];
  return (
    <>
      {isMenuOpen ? (
        // 手机版的Navbar
        <NavbarMobile
          textList={navButtonGroup}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      ) : (
        // PC版的Navbar
        <div className="hidden xl:block">
          <DesktopNav />
        </div>
      )}
    </>
  );
}
