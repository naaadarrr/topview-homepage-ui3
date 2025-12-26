"use client";

import React from "react";

const logos = [
  "http://localhost:3845/assets/71c280bee9c50ffe4e674a7eb45212edeb7c5468.svg",
  // Removed Cider logo (http://localhost:3845/assets/ed6e849fbef08b61a9fb57c7a2b41842101c0320.svg) due to persistent stretching/aspect ratio issues
  "http://localhost:3845/assets/3a869589157a326811492255b973364486527755.svg",
  "http://localhost:3845/assets/2c1a683f23a3d531a013a65c9b2a62c44a1a93a1.svg",
  "http://localhost:3845/assets/8f093651daefbafa6d96112042762b7d90cbe27a.svg",
  "http://localhost:3845/assets/2580d259165928820e027eb1c18282a3aa97b264.svg",
  "http://localhost:3845/assets/aa52548c1d524e4a0e6b67f185e13ec3be3be249.svg",
  "http://localhost:3845/assets/95be2355a764020d9dcd455b80fb62703769bed8.svg",
  "http://localhost:3845/assets/75b4f493f4aeb24f25b19e8dc9cc189a2dd1eda0.svg",
  "http://localhost:3845/assets/d56047670f9ba0cdbf174b4dbf4f8ab0353144fa.svg",
  "http://localhost:3845/assets/1a510b3b6794061b15d0824dd671f4ae522a68ae.svg",
  "http://localhost:3845/assets/f5079d98313793650d7f5c3db33e50eac7e98fd7.svg",
  "http://localhost:3845/assets/07ba80b4518b44e459521ef2795674cfd217ddd9.svg",
  "http://localhost:3845/assets/0c1aca781e2233c9539b2bc3c02bc61d69170e8f.svg",
  "http://localhost:3845/assets/ea1326a3d9edb2d0f8c030734f1faa340640f2bc.svg",
];

export default function TrustedBy() {
  return (
    <div className="w-full flex flex-col gap-6 items-center pb-24 pt-0 overflow-hidden">
      <p className="font-['Outfit',sans-serif] text-[20px] leading-[32px] text-[rgba(255,255,255,0.36)] text-center tracking-[0.004px] px-4">
        Trusted by top-tier companies of all sizes
      </p>
      
      {/* Marquee Container */}
      <div className="w-full relative flex overflow-hidden group">
        <div className="flex gap-16 animate-marquee whitespace-nowrap min-w-full items-center opacity-60 group-hover:opacity-100 group-hover:pause transition-opacity duration-300">
          {/* Double the logos to ensure seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 flex items-center justify-center">
              <img 
                src={logo} 
                alt="Partner logo" 
                className="h-[36px] w-auto max-w-[186px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .pause {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
