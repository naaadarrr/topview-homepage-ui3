"use client";

import { Box, Center } from "@chakra-ui/react";
import SectionWithTitle from "@/app/(components)/SectionWithTitle";
import HeroSection from "@/app/(components)/hero/HeroSection";
import VideoCarousel from "@/app/(components)/hero/VideoCarousel";
import TrustedBy from "@/app/(components)/hero/TrustedBy";
import TemplateSection from "@/app/(components)/hero/TemplateSection";

export default function Body() {
  return (
    <Center bg="#000" h="100%">
      <Box w="100%" h="100%" display="flex" flexDirection="column">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Video Carousel */}
        <SectionWithTitle>
          <VideoCarousel />
        </SectionWithTitle>

        {/* 3. Trusted By (Logo Wall replacement) */}
        <TrustedBy />

        {/* 4. Template Sections */}
        <div className="flex flex-col gap-[48px] mt-[48px]">
          <TemplateSection />
          <TemplateSection title="Avatar 4" showTabs={true} cardType="avatar" />
          <TemplateSection title="Product Avatar" showTabs={true} cardType="avatar" />
        </div>
      </Box>
    </Center>
  );
}
