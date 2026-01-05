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
  },
  {
    title: "Holiday Sale",
    description: "Clone top competitor video ads as your own",
    image: imgFigure1,
  },
  {
    title: "VEO 4",
    description: "Clone top competitor video ads as your own",
    image: imgFigure2,
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
  {
    title: "SORA 2",
    description: "Clone top competitor video ads as your own",
    image: imgFigure3,
  },
];

export default function VideoCarousel() {
  const [isLaptop, setIsLaptop] = React.useState(false);

  React.useEffect(() => {
    const checkScreen = () => {
      // Laptop screens often have logical widths up to 1536px or 1728px (High DPI)
      // Setting breakpoint to 1600px to cover most laptops as "small" size
      setIsLaptop(window.innerWidth < 1600);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

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
              size={isLaptop ? 'small' : 'default'}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

