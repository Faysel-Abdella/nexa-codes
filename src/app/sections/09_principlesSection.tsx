import React from "react";

import principleOne from "../assets/principles/principleOne.png";
import principleTwo from "../assets/principles/principleTwo.png";
import principleThree from "../assets/principles/principleThree.png";
import Principle from "../components/Principle";

const Principles = () => {
  return (
    <section
      className="max-container pt-[178px] pb-[220px] bg-[#fff]
    max-medium:pt-[120px] max-medium:pb-[160px]
    max-small:pt-[80px]
    "
    >
      <h2
        className="text-[#333] text-[50px] text-center font-light tracking-[-1.5px] 
      max-small:text-[26px]
      max-small:px-1
      "
      >
        넥사코드를 선택하세요!
      </h2>
      <h2
        className="text-[#333] text-[50px] text-center font-bold tracking-[-1.5px]
      max-small:text-[26px]
      max-small:px-1
      
      "
      >
        넥사코드의 프로젝트 원칙 3가지!
      </h2>

      <div
        className="flex justify-center items-center gap-[15px] mt-[54px] px-10
      max-medium:flex-col max-medium:gap-[65px]
      max-small:px-3
      "
      >
        <Principle
          image={principleOne}
          title="단순한 개발회사 X"
          title2="비즈니스 파트너 O"
        />
        <Principle
          image={principleTwo}
          title="책임감을 가지고"
          title2="약속은 반드시 지킵니다"
        />
        <Principle
          image={principleThree}
          title="고객의 성공에"
          title2="최선을 다합니다"
        />
      </div>
    </section>
  );
};

export default Principles;
