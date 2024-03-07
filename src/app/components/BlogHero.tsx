"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Link, animateScroll as scroll } from "react-scroll";

import logo from "../assets/logo.svg";

import filledArrow from "../assets/filled_arrow.svg";

import { AiOutlineAlignRight } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

export default function Hero() {
  const [navbar, setNavBar] = useState(false);

  const route = useRouter();

  const goToHome = () => {
      route.push("/");
  };

  return (
    <div className="blog-bg px-2 py-6 max-medium:pt-2 relative ">
      {/* the navigation part */}
      <div className=" z-10">
        <nav className=" flex justify-between mx-10 max-medium:mx-0 my-4 mt-0 relative
        pt-[45px] ml-[100px] mr-[60px] 
        max-medium:pt-[20px] max-medium:ml-0 max-medium:mr-0 max-medium:px-5
      max-md:pt-5 max-md:ml-0 max-md:mr-0 max-md:px-5
      max-small:pt-2 
        
        ">
          <div className="z-10 flex space-x-6 cursor-pointer"
          onClick={goToHome}
          >
            {/* <a className="text-white font-semibold cursor-pointer">SPARTA</a> */}
            <Image
              src={logo}
              alt="Logo"
              className="w-[50px] h-[24px] max-md:w-[35px] max-md:h-[20px] max-md:items-start"
            />
          </div>

          <div
            className={`flex gap-[35px] z-30 max-md:pb-10
        max-md:absolute max-md:min-h-[40vh] max-md:left-0 max-md:w-full max-md:flex-col
        max-md:bg-black max-md:bg-opacity-[99%]
        ${navbar ? "max-md:top-[-1rem]" : "max-md:top-[-2000%]"} duration-500
        max-md:justify-center max-md:items-center max-md:gap-5 max-md:py-8 max-md:pb-0
        `}
          >
            <div className="z-10 flex max-md:flex-col max-md:pt-5 max-md:items-center max-md:gap-7 space-x-6">
              <div className="flex self-center ml-8"
              onClick={() => setNavBar(false)}
              >
                <a className="text-white font-medium cursor-pointer
                font-poppins text-[16px]  leading-[-0.54
                "
                
                >블로그</a>
                <Image
                  src={filledArrow}
                  alt="Down arrow"
                  className="fa-solid fa-sort-down text-white cursor-pointer"
                />
              </div>
              <a className="text-white  font-medium cursor-pointer  font-poppins text-[16px] leading-[-0.54"
              onClick={() => setNavBar(false)}
              
              >
                서비스 특징
              </a>
              <a className="text-white font-medium cursor-pointer font-poppins text-[16px]  leading-[-0.54"
              onClick={() => setNavBar(false)}
              
              >강점</a>
              <a className="text-white font-medium cursor-pointer font-poppins text-[16px] leading-[-0.54"
              onClick={() => setNavBar(false)}
              
              >투자사</a>
              <a className="text-white font-medium cursor-pointer font-poppins text-[16px] leading-[-0.54"
              onClick={() => setNavBar(false)}
              
              >
                포트폴리오
              </a>
              <a className="text-white font-medium cursor-pointer font-poppins text-[16px] leading-[-0.54">진행과정</a>
            </div>
          </div>

          {/* Close and open */}
          {!navbar && (
            <AiOutlineAlignRight
              onClick={() => setNavBar(!navbar)}
              className="text-white text-xl cursor-pointer md:hidden z-10"
            />
          )}

          {navbar && (
            // <div className="">
            <AiOutlineClose
              onClick={() => setNavBar(!navbar)}
              className="text-white text-xl cursor-pointer md:hidden z-[1000]"
            />
            // </div>
          )}
        </nav>
      </div>

      {/* the hero header */}
      <div className="z-10 text-center my-[10rem] max-small:my-[4rem] relative">
        <h2 className="text-white text-[60px] max-medium:text-[50px] max-small:text-[35px] font-semibold leading-14 mb-4">
          블로그 서비스
        </h2>
        <h4 className="text-white text-base font-normal leading-17">
          IT 외주, 개발 비즈니스 꿀팁 블로그 서비스
        </h4>
      </div>
    </div>
  );
}
