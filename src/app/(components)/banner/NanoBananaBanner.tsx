/* eslint-disable @next/next/no-img-element */
import React from "react";

const imgPicNanoBananaPro =
    "http://localhost:3845/assets/2e6e7c0e785985877fe0805d27ddf70ab8540b3b.png";
const img =
    "http://localhost:3845/assets/a1487dee85fcdac3ce064c065ad721d044054d1b.svg";

export default function NanoBananaBanner() {
    return (
        <div
            className="bg-gradient-to-r from-[#ede574] via-[#e1f5c4] to-[#ede574] via-50% relative w-full h-[48px]"
            data-name="Nano Banana 活动banner"
            data-node-id="4020:1445"
        >
            <div
                className="absolute content-stretch flex gap-[24px] items-center left-[calc(50%-0.5px)] top-1/2 translate-x-[-50%] translate-y-[-50%]"
                data-name="文案内容"
                data-node-id="4020:1446"
            >
                <div
                    className="h-[40px] relative shrink-0 w-[348px]"
                    data-node-id="4020:1458"
                >
                    <div
                        className="absolute left-0 size-[40px] top-0"
                        data-name="pic_nano banana pro"
                        data-node-id="4020:1447"
                    >
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <img
                                alt=""
                                className="absolute h-[119.54%] left-[-24.52%] max-w-none top-[-9.54%] w-[152.1%]"
                                src={imgPicNanoBananaPro}
                            />
                        </div>
                    </div>
                    <p
                        className="absolute font-sans leading-[20px] left-[48px] not-italic text-[15px] font-semibold text-black text-nowrap top-[10px] tracking-[-0.3px]"
                        data-node-id="4020:1448"
                    >
                        Get 365 Days of Free Banana Pro
                    </p>
                    <div
                        className="absolute bg-black content-stretch flex items-center left-[272px] pl-[10px] pr-[12px] py-[4px] rounded-[20px] top-[6px]"
                        data-name="折扣"
                        data-node-id="4020:1449"
                    >
                        <p
                            className="font-sans font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.28px]"
                            data-node-id="4020:1452"
                        >
                            43% OFF
                        </p>
                    </div>
                </div>
                <div
                    className="content-stretch flex gap-[2px] items-center relative shrink-0"
                    data-node-id="4020:1453"
                >
                    <p
                        className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-sans font-semibold leading-[20px] not-italic relative shrink-0 text-[15px] text-black text-nowrap tracking-[-0.3px] underline cursor-pointer"
                        data-node-id="4020:1454"
                    >
                        Learn More
                    </p>
                    <div
                        className="h-[20px] relative shrink-0 w-[20px]"
                        data-name="arrow-forward-long"
                        data-node-id="4020:1455"
                    >
                        <div className="absolute inset-[10.42%_4.17%]">
                            <div
                                className="absolute inset-[-9.38%_-6.25%]"
                                style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}
                            >
                                <img alt="" className="block max-w-none size-full" src={img} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_0px_12px_0px_rgba(241,201,255,0.2),inset_0px_1px_8px_0px_rgba(255,255,255,0.12),inset_0px_1px_20px_6px_rgba(255,255,255,0.16)]" />
        </div>
    );
}
