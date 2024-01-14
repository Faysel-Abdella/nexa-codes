import React from "react";
import Service from "../components/Service";

import serviceOne from "../assets/service_one.svg";
import serviceTwo from "../assets/service_two.svg";

const Services = () => {
  return (
    <main
      className="max-container px-20 pt-[315px] bg-[#fff]
    max-medium:pt-[200px]
    max-small:pt-[150px]
    max-small:px-0
    "
    >
      <h2
        className="text-[#000] text-[50px] text-center font-bold tracking-[-1.5px]
      max-medium:text-[40px]
      max-small:text-[25px]
      "
      >
        넥사코드가 잘 하는 것
      </h2>

      <div
        className="flex justify-between mt-[90px] 
      max-medium:mt-[65px] max-medium:flex-col max-medium:gap-10
      "
      >
        <Service
          title="앱 개발"
          description="개발하지 못하면 환불해드립니다"
          image={serviceOne}
        />
        <Service
          title="홈페이지 제작"
          description="평범한 웹 부터 모니터링/관리자웹까지"
          image={serviceTwo}
        />
        <Service
          title="검색엔진 최적화"
          description="광고노출? NO!"
          description2="자연스럽게 최상단 노출 OK"
          image={serviceOne}
        />
      </div>
    </main>
  );
};

export default Services;
