"use client";

import Image from "next/image";
//
import { useState } from "react";
import { TEMPLATE_STYLE_LIST } from "./_components/constant";

export default function Create() {
  const [lotteryFile, setLotteryFile] = useState<File | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState(
    TEMPLATE_STYLE_LIST[0].style
  );

  const [percent, setPercent] = useState(1);

  const updateFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    if (!file) return;
    if (selectedTemplate) {
      setSelectedTemplate("");
    }

    setLotteryFile(file[0]);
  };

  const handlePercent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value < 1 || value > 100) {
      alert("1 ~ 100의 값만 입력 가능합니다.");
      setPercent(value < 1 ? 1 : 100);
      return;
    }
    setPercent(value);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-10 px-4 py-32 ">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-400 text-transparent bg-clip-text text-shadow-white">
        내 맘대로 복권 만들기
      </h1>
      <div
        className={`${
          selectedTemplate ? selectedTemplate : ""
        } w-[600] h-[300]`}
      >
        {/* TODO 그림판 */}
        {lotteryFile && (
          <Image
            src={URL.createObjectURL(lotteryFile)}
            alt="유저가 업로드한 복권 이미지"
            className="w-full h-full object-cover"
            width={600}
            height={300}
            priority
            draggable={false}
          />
        )}
      </div>
      <div className="w-full flex flex-col items-center gap-3">
        템플릿을 적용해보세요!
        <div className="w-full flex flex-wrap justify-center gap-2 max-w-md">
          {TEMPLATE_STYLE_LIST.map((template) => {
            return (
              <button
                key={template.id}
                className={`${template.style} w-20 h-20 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 `}
                onClick={() => setSelectedTemplate(template.style)}
              />
            );
          })}
        </div>
      </div>
      <label className="cursor-pointer w-[300] border border-yellow-600 p-3 rounded-md">
        <div className="text-center text-amber-500">이미지 직접 올리기</div>
        <div className="text-center text-amber-500">(권장 사이즈: 600*300)</div>
        <input className="hidden" type="file" onChange={updateFile} />
      </label>
      <div className="flex items-center gap-3">
        몇 퍼센트로 복권이 당첨되나요?
        <input
          type="number"
          min={1}
          max={100}
          value={percent}
          className="bg-slate-300 rounded-md outline-none appearance-none p-1"
          onChange={handlePercent}
        />
        %
      </div>
      <button className="w-[200px] bg-amber-500 p-3 text-white rounded-md hover:animate-jelly">
        완성
      </button>
    </div>
  );
}
