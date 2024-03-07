import React from "react";

import Image from "next/image";

import separator from "../assets/separator.svg";

const AboutCompany = () => {
  return (
    <section className="max-container bg-white">
      <div className="flex flex-col justify-center items-center">
        <div className="text-center mb-[20px]">
          <h2
            className="text-black text-[30px] font-normal tracking-[-0.9] font-['Noto Sans KR']
          max-medium:text-[26px]
          max-small:text-[20px]
          "
          >
            외주 개발 업체의 진짜 문제점,
          </h2>
          <h2
            className="text-black text-[30px] font-normal tracking-[-0.9] font-['Noto Sans KR']
          max-medium:text-[26px]
          max-small:text-[20px]

          "
          >
            본인들의 서비스를 성공시키지 못했습니다
          </h2>
        </div>

        <Image src={separator} alt="separator" className="max-small:h-10" />

        <div
          className="text-center mt-[20px]
        max-medium:mt-[10px]
        "
        >
          <h2
            className="text-[#333] text-[50px] font-bold font-['Noto Sans KR'] tracking-[-1.5] 
          max-medium:text-[35px]
          max-small:text-[22px]

          "
          >
            넥사코드는 자사 서비스의
          </h2>
          <div
            className="relative text-[#333] z-50 text-[50px] font-bold font-['Noto Sans KR'] tracking-[-1.5] 
          after:content-[' '] after:w-full after:h-4  after:absolute after:left-0 after:bottom-3 after:bg-yellow-400 after:z-[-1]
           max-medium:text-[35px] max-medium:after:h-3
           max-small:text-[18px] max-small:after:h-[2px] max-small:after:bottom-1
          "
          >
            성공 경험을 바탕으로 개발합니다
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
