/* eslint-disable */
// @ts-nocheck

import Typewriter from "typewriter-effect";
import { type linkType, type musicType } from "../card/cartdItem";

export default function TypewriterWithVideo({
  type,
  nameToVideo,
  pointer,
  setVideo,
  setImgUrl,
  setRank,
}: {
  type: string;
  nameToVideo: Map<linkType, string> | Map<musicType, string>;
  pointer: number;
  setVideo: (arg: string) => void;
  setImgUrl?: (arg: string) => void;
  setRank?: (arg: string) => void;
}) {
  return (
    <Typewriter
      onInit={(typewriter) => {
        let entries: Array<[linkType, string] | [musicType, string]>;

        if (type === "hook") {
          entries = Array.from(nameToVideo.entries()).reverse();
        } else {
          entries = Array.from(nameToVideo.entries()).reverse() as Array<
            [musicType, string]
          >;
        }

        entries.forEach(([key, value], index) => {
          const text =
            pointer === 0 && type === "hook"
              ? key.textList[pointer]! + "____"
              : key.textList[pointer]!;

          // 计算每个字符的打字间隔
          const delay = 3000 / text.length;
          // 计算每个字符的删除间隔
          const deleteSpeed = 2000 / text.length;
          typewriter
            .changeDelay(delay) // 在这里改变打字延迟
            .typeString(text)
            .callFunction(() => {
              // 使用模运算符来实现循环索引
              const nextIndex = (index + 1) % entries.length;
              const nextKey = entries[nextIndex]![0];
              if (pointer === 0) setVideo(nameToVideo.get(nextKey)!);
              if (type === "music") {
                setImgUrl(nextKey.imgUrls[0]!);
                setRank(nextKey.textList[1]!);
              }
            })
            .pauseFor(1000) // 暂停1秒

            .changeDeleteSpeed(deleteSpeed) // 在这里改变删除延迟
            .deleteAll();
        });

        typewriter.start();
      }}
      options={{
        autoStart: true,
        loop: true,
        // delay: 125, // 这个初始的delay可能会被忽略，因为我们在typeString前改变了它
        // deleteSpeed: 20, // 这个初始的deleteSpeed可能会被忽略，因为我们在deleteAll前改变了它
        cursor: "",
      }}
    />
  );
}
