"use client";

import { Box, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
import SectionWithTitle from "@/app/(components)/SectionWithTitle";
import HeroSection from "@/app/(components)/hero/HeroSection";
import VideoCarousel from "@/app/(components)/hero/VideoCarousel";
import TrustedBy from "@/app/(components)/hero/TrustedBy";
import TemplateSection from "@/app/(components)/hero/TemplateSection";

const imgBgHero = "/bg-hero.png";

export default function Body() {
  return (
    <Center bg="#000" h="100%">
      <Box w="100%" h="100%" display="flex" flexDirection="column" position="relative" overflow="hidden">
        {/* Background Image moved here to cover both Hero and Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 3, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1920px] h-[1080px] z-0 pointer-events-none"
        >
          <img
            src={imgBgHero}
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Video Carousel */}
        <SectionWithTitle px="0">
          <VideoCarousel />
        </SectionWithTitle>

        {/* 3. Trusted By (Logo Wall replacement) */}
        <TrustedBy />

        {/* 4. Template Sections */}
        <div className="flex flex-col gap-[48px] mt-[48px] relative z-10">
          <TemplateSection description="The easiest way to create high-performing video ads for any product." />
          <TemplateSection title="Avatar 4" description="Bring your stories to life with lifelike AI avatars." showTabs={true} cardType="avatar" />
          <TemplateSection title="Product Avatar" description="The easiest way to create high-performing video ads for any product" showTabs={true} cardType="avatar" />
        </div>
      </Box>
    </Center>
  );
}
