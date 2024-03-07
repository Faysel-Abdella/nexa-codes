"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import NavBar from "../components/NavBar";

import rightArrow from "../assets/right-arrow.svg";
import herobg from "../assets/herobackground.png"

const HeroSection = () => {
  return (
    <section
      className="hero  relative
    before:content-[' '] before:absolute before:top-0 before:right-0 before:w-full before:h-full before:bg-black before:opacity-50
    "
    >
      <video id="hero-video" className="hero-video "  autoPlay loop muted poster="/images/hero1.png">
        <source src="/Videos/hero_video.mp4" type="video/mp4" />
        Your browser does not support the video tag. Try to use another browser
      </video>
      <nav className="hero-navbar absolute top-0 left-0 right-0 z-10">
        <NavBar />
      </nav>
      <div className="hero-content">
        <div
          className=" flex flex-col justify-center items-center mt-[100px] 
        max-largeMedium:mt-[100px] 
        max-medium:mt-[40px]
        max-extraSmall:mt-[10px]
        "
        >
          <h1
            className="text-center text-white text-[50px]  font-normal font-['Noto Sans KR'] 
         max-largeMedium:text-[40px] 
         max-medium:text-[25px]
         max-extraSmall:text-[18px]
          "
          >
            앱 개발 업체
          </h1>
          <h1
            className="text-center text-white text-[50px]  font-normal font-['Noto Sans KR'] leading-[-1.8]
          max-largeMedium:text-[40px]  
          max-medium:text-[25px]
          max-extraSmall:text-[18px]
          "
          >
            {" "}
            홈페이지 제작 업체
          </h1>
          <div
            className="text-center mt-10  mb-10
          max-largeMedium:mt-5 
          max-medium:mt-3 max-medium:mb-5
          max-extraSmall:mt-2 max-extraSmall:mb-2
          "
          >
            <p
              className=" text-white text-[25px] font-normal font-['Noto Sans KR']
            max-largeMedium:text-[20px] 
            max-medium:text-[16px]
            max-small:font-bold
            max-extraSmall:text-[13px]
            "
            >
              찾고계신다면 저희에게 맡기세요
              <br />
            </p>
            <p
              className="mt-10 max-largeMedium:mt-5 text-white text-[50px] font-bold font-['Noto Sans KR']
            max-largeMedium:text-[40px] 
            max-medium:text-[25px]
            max-small:hidden
            "
            >
              개발하지 못하면 환불해 드립니다
            </p>
          </div>
          <div
            className="flex items-center justify-center gap-5  mt-10  w-[180px] h-[56.67px] bg-white bg-opacity-10 rounded-[50px] border border-white backdrop-blur-[10px] cursor-pointer
          max-[1250px]:mt-0 
          max-medium:w-[100px] max-medium:h-[30px]
          max-extraSmall:w-[60px] max-extraSmall:h-[20px] max-extraSmall:gap-2

          "
          >
            <p
              className="text-white text-[15px] font-normal font-['Noto Sans KR']
            max-medium:text-[12px] 
            max-extraSmall:text-[7px] 
            "
            >
              상담 문의
            </p>
            <div className="cursor-pointer">
              <Image
                src={rightArrow}
                alt="right-arrow"
                className="max-medium:w-[15px] max-medium:h-[15px]
                max-extraSmall:w-[7px] max-extraSmall:h-[7px]
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
