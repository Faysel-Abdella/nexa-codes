import React from "react";

import Image from "next/image";

import secondSampleOne from "../assets/second_sample_one.svg";
import secondSampleTwo from "../assets/second_sample_two.svg";
import secondSampleThree from "../assets/second_sample_three.svg";

const SampleTwo = () => {
  return (
    <main className=" flex flex-col justify-center items-center ">
      <section className=" border-[1px] border-solid border-[#D9D9D9] shadow-sample-shadow">
        <div className="flex flex-col">
          <header
            className="bg-[#D8E5F3] py-[21px] px-[50px]
           max-medium:px-[50px]
          max-small:px-[25px]
          max-extraSmall:px-[20px]
          max-extraSmall:py-[5px] max-extraSmall:text-nowrap
          "
          >
            <h3
              className="text-[30px] font-semibold tracking-[-1.2px] text-[#3480D2] flex justify-center items-center
            max-extraSmall:text-[16px]
            "
            >
              스마일 코인노래방(강서구청점)
            </h3>
          </header>

          <main
            className="flex gap-[5px] pt-[37px] pb-[29px] px-[29px] 
          max-extraSmall:pt-[25px]
          max-extraSmall:pb-[20px]
          max-extraSmall:px-[15px]
          "
          >
            <aside className="flex flex-col gap-[4px]">
              <div>
                <Image src={secondSampleOne} alt="one of our samples" />
              </div>
              <div>
                <Image src={secondSampleTwo} alt="one of our samples" />
              </div>
            </aside>

            <aside className="max-extraSmall:flex-grow">
              <div className="max-extraSmall:h-full">
                <Image
                  src={secondSampleThree}
                  alt="one of our samples"
                  className="max-extraSmall:h-full"
                />
              </div>
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
            O2O서비스 확장 테스트 베드
          </h3>

          <div
            className="pl-16 mt-5
            max-extraSmall:mt-3
            max-extraSmall:pl-4
          "
          >
            <h3
              className="text-[20px] text-[#A4A4A4] font-normal tracking-[-0.9px]
            relative before:absolute before:content-[' '] before:w-[6px] before:h-[6px] before:bg-[#A4A4A4]  before:rounded-full
            before:top-[50%] before:transform before:translate-y-[-50%] before:left-[-24px]
            max-extraSmall:text-[14px]
            "
            >
              노래방 DX 시스템 직영 운영, 개발
            </h3>
            <h3
              className="text-[20px] text-[#A4A4A4] font-normal tracking-[-0.9px]
            relative before:absolute before:content-[' '] before:w-[6px] before:h-[6px] before:bg-[#A4A4A4]  before:rounded-full
            before:top-[50%] before:transform before:translate-y-[-50%] before:left-[-24px]
            max-extraSmall:text-[14px]
            "
            >
              21개 호실, 50평 이상의 매장 무인운영
            </h3>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SampleTwo;
