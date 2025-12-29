"use client";
import React from "react";
import BannerCard from "./BannerCard";

const imgFigure = "/Figure.png";
const imgFigure1 = "/Figure-1.png";
const imgFigure2 = "/Figure-2.png";
const imgFigure3 = "/Figure-3.png";

const carouselItems = [
  {
    title: "Video Clone Agent",
    description: "Clone top competitor video ads as your own",
    image: imgFigure,
    overlayMain: 'SEEDANCE <span style="color: #fd9b08;">1.5</span> PRO',
    overlaySub: "Native Audio + End Frame + Multi-shot"
  },
  {
    title: "Holiday Sale",
    description: "Clone top competitor video ads as your own",
    image: imgFigure1,
    overlayMain: "Holiday <span style='color: #fd9b08;'>50%</span> Sale",
    overlaySub: "Limited Time Offer"
  },
  {
    title: "VEO 4",
    description: "Clone top competitor video ads as your own",
    image: imgFigure2,
    overlayMain: "VEO <span style='color: #fd9b08;'>4</span>",
    overlaySub: "Next Gen AI Video Generation"
  },
  {
    title: "SORA 2",
    description: "Clone top competitor video ads as your own",
    image: imgFigure3,
    overlayMain: "SORA <span style='color: #fd9b08;'>2</span>",
    overlaySub: "Cinematic Quality Videos"
  },
  {
    title: "SORA 2",
    description: "Clone top competitor video ads as your own",
    image: imgFigure3,
  },
  {
    title: "SORA 2",
    description: "Clone top competitor video ads as your own",
    image: imgFigure3,
  },
  {
    title: "SORA 2",
    description: "Clone top competitor video ads as your own",
    image: imgFigure3,
  },
];

export default function VideoCarousel() {
  return (
    <div className="w-full pb-[96px] pt-0 overflow-hidden flex flex-col items-start px-0 relative">
      <div className="w-full relative overflow-x-auto no-scrollbar scroll-smooth">
        <div className="flex gap-[20px] items-center pl-[32px] pr-0 py-0 w-max">
          {carouselItems.map((item, index) => (
            <BannerCard
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
              overlayMainText={item.overlayMain}
              overlaySubText={item.overlaySub}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

