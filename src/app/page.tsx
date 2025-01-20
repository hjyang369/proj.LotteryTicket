"use client";

import S from "@/style/home.module.css";
import Image from "next/image";
//
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const buttonStyle =
  "w-[130px] h-[40px] text-white rounded-[5px] py-2.5 px-6 bg-transparent transition-all duration-300 ease-in-out relative inline-block shadow-[inset_2px_2px_2px_0px_rgba(255,_255,_255,_0.5),_7px_7px_20px_0px_rgba(0,_0,_0,_0.1),_4px_4px_5px_0px_rgba(0,_0,_0,_0.1)] focus:outline-none relative right-[20px] bottom-[20px] border-0 shadow-none w-[130px] h-[40px] leading-[42px] perspective-[230px]";
const spanStyle =
  "bg-gradient-to-t  block absolute w-[130px] h-[40px] shadow-[inset_2px_2px_2px_0px_rgba(255,_255,_255,_0.5),_7px_7px_20px_0px_rgba(0,_0,_0,_0.1),_4px_4px_5px_0px_rgba(0,_0,_0,_0.1)] rounded-[5px] m-0 text-center box-border transition-all duration-300";
const first = "from-pink-500 to-yellow-500";
const seconde = "from-purple-500 to-yellow-500";

export default function Home() {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const [randomImage, setRandomImage] = useState("");

  useEffect(() => {
    const imageArr = [
      "/lotto_example1.png",
      "/lotto_example2.png",
      "/lotto_example3.png",
      "/lotto_example4.png",
    ];

    const getRandomImage = () => {
      return imageArr[Math.floor(Math.random() * imageArr.length)];
    };

    const imageUrl = getRandomImage();
    setRandomImage(imageUrl);
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-10 px-4 py-32 ">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-400 text-transparent bg-clip-text text-shadow-white">
        내 맘대로 복권
      </h1>
      <div>
        <Image
          src={randomImage || "/lotto_example1.png"}
          alt="default lotto"
          width={180}
          height={60}
          priority
        />
      </div>

      <div className="flex gap-4">
        <button
          className={`${buttonStyle} ${S.customButton}`}
          onClick={copyToClipboard}
        >
          <span className={`${spanStyle} ${first}`}>
            {copied ? "링크 복사 완료" : "Click!"}
          </span>
          <span className={`${spanStyle} ${first}`}>
            {copied ? "링크 복사 완료" : "결과 공유하기"}
          </span>
        </button>
        <button
          className={`${buttonStyle} ${S.customButton}`}
          onClick={() => router.push("/create")}
        >
          <span className={`${spanStyle} ${seconde}`}>Click!</span>
          <span className={`${spanStyle} ${seconde}`}>나도 만들기</span>
        </button>
      </div>
    </div>
  );
}
