"use client";

import { motion } from "framer-motion";

const logos = [
  "/logo_item_01.svg",
  "/logo_item_02.svg",
  "/logo_item_03.svg",
  "/logo_item_04.svg",
  "/logo_item_05.svg",
  "/logo_item_06.svg",
  "/logo_item_07.svg",
  "/logo_item_08.svg",
  "/logo_item_09.svg",
  "/logo_item_10.svg",
  "/logo_item_11.svg",
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
            x: [0, "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          whileHover={{ animationPlayState: "paused" }}
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
