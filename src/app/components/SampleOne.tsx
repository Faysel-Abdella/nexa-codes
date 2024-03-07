import React from "react";
import Image from "next/image";

import sampleOne from "../assets/sample_one.svg";
import sampleTwo from "../assets/sample_two.svg";

const SampleOne = () => {
  return (
    <main className="flex flex-col justify-center items-center  bg-[#fff]">
      <section className=" border-[1px] border-solid border-[#D9D9D9] shadow-sample-shadow">
        <div className="flex flex-col">
          <header
            className="bg-[#D8E5F3] py-[21px] px-[120px] flex justify-center items-center
          max-medium:px-[50px]
          max-small:px-[25px]
          max-small:py-2
          max-extraSmall:px-[20px]
          max-extraSmall:py-[5px]
          "
          >
            <h3
              className="text-[30px] font-semibold tracking-[-1.2px] text-[#3480D2]
            max-extraSmall:text-[20px]
            "
            >
              모두의 노래방
            </h3>
          </header>
          <main className="flex gap-0 px-[31px] py-[33px]">
            <aside>
              <Image src={sampleOne} alt="sample_one" />
            </aside>
            <aside>
              <Image src={sampleTwo} alt="sample_one" />
            </aside>
          </main>
        </div>
      </section>

      <section
        className=" mt-[62px]
      max-extraSmall:mt-[40px]
      "
      >
        <div>
          <h3
            className="text-[28px] text-[#333] text-center font-semibold tracking-[-1.2px]
          max-extraSmall:text-[16px] max-extraSmall:text-nowrap
          "
          >
            직접 기획/개발/운영 240만 다운로드앱
          </h3>

          <div
            className="pl-12 mt-5
          max-extraSmall:mt-3
          "
          >
            <h3
              className="text-[20px] text-[#A4A4A4] font-normal tracking-[-0.9px]
            relative before:absolute before:content-[' '] before:w-[6px] before:h-[6px] before:bg-[#A4A4A4]  before:rounded-full
            before:top-[50%] before:transform before:translate-y-[-50%] before:left-[-24px]
            max-extraSmall:text-[14px]
            "
            >
              리뷰 1.6만개, 평점 4.8점
            </h3>
            <h3
              className="text-[20px] text-[#A4A4A4] font-normal tracking-[-0.9px]
            relative before:absolute before:content-[' '] before:w-[6px] before:h-[6px] before:bg-[#A4A4A4]  before:rounded-full
            before:top-[50%] before:transform before:translate-y-[-50%] before:left-[-24px]
            max-extraSmall:text-[14px]

            "
            >
              음악 카테고리 7위(구글스토어)
            </h3>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SampleOne;
