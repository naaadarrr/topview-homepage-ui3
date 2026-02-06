"use client";

import { motion } from "framer-motion";

const logos = [
  "/branding/logo-item-01.svg",
  "/branding/logo-item-02.svg",
  "/branding/logo-item-03.svg",
  "/branding/logo-item-04.svg",
  "/branding/logo-item-05.svg",
  "/branding/logo-item-06.svg",
  "/branding/logo-item-07.svg",
  "/branding/logo-item-08.svg",
  "/branding/logo-item-09.svg",
  "/branding/logo-item-10.svg",
  "/branding/logo-item-11.svg",
];

export default function TrustedBy() {
  const doubledLogos = [...logos, ...logos];

  return (
    <div className="w-full flex flex-col gap-6 items-center pb-24 pt-0 overflow-hidden">
      <p className="font-['Outfit',sans-serif] text-[20px] leading-[32px] text-[rgba(255,255,255,0.36)] text-center tracking-[0.004px] px-4">
        Trusted by top-tier companies of all sizes
      </p>

      {/* Infinite Scroll Container */}
      <div className="w-full relative flex overflow-hidden">
        <motion.div
          className="flex gap-16 whitespace-nowrap min-w-full items-center opacity-60 hover:opacity-100 transition-opacity duration-300"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          style={{ display: "flex", width: "fit-content" }}
        >
          {doubledLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 flex items-center justify-center">
              <img
                src={logo}
                alt="Partner logo"
                className="h-[36px] w-auto max-w-[186px] object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
