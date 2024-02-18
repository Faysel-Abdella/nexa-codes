"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Link, animateScroll as scroll } from "react-scroll";

import filledArrow from "../assets/filled_arrow.svg"

import { AiOutlineAlignRight } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";


export default function Hero() {
    const [navbar, setNavBar] = useState(false);

    return (
        <div
            className='blog-bg px-2 py-6 max-medium:pt-2 relative '

        >

            {/* the navigation part */}
            <div className=' z-10'>
                <nav className='p-4 flex justify-between mx-10 max-medium:mx-0 my-4 relative'>
                    <div className='z-10 flex space-x-6'>
                        <a  className='text-white font-semibold cursor-pointer'>
                            SPARTA
                        </a>
                    </div>


                    <div
                        className={`flex gap-[35px] z-30 max-md:pb-10
        max-md:absolute max-md:min-h-[40vh] max-md:left-0 max-md:w-full max-md:flex-col
        max-md:bg-black max-md:bg-opacity-[99%]
        ${navbar ? "max-md:top-[0]" : "max-md:top-[-2000%]"} duration-500
        max-md:justify-center max-md:items-center max-md:gap-5 max-md:py-4
        `}
                    >


                        <div className='z-10 flex max-md:flex-col max-md:pt-5 max-md:items-start max-md:gap-7 space-x-6'>
                            <div className='flex self-center'>
                                <a  className='text-white font-medium cursor-pointer'>
                                    블로그
                                </a>
                                <Image src={filledArrow} alt="Down arrow" className='fa-solid fa-sort-down text-white cursor-pointer'/>
                            </div>
                            <a  className='text-white  font-medium cursor-pointer'>
                                서비스 특징
                            </a>
                            <a  className='text-white font-medium cursor-pointer'>
                                강점
                            </a>
                            <a  className='text-white font-medium cursor-pointer'>
                                투자사
                            </a>
                            <a  className='text-white font-medium cursor-pointer'>
                                포트폴리오
                            </a>
                            <a  className='text-white font-medium cursor-pointer'>
                                진행과정
                            </a>
                        </div>

                    </div>



                    {/* Right section */}
                    <div className='z-10 flex space-x-6'>
                        <a className='text-white underline cursor-pointer'>
                            KR
                        </a>
                        <a className='text-white  cursor-pointer'>
                            EN
                        </a>
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
            <div className='z-10 text-center my-[10rem] max-small:my-[4rem] relative'>
                <h1 className='text-white text-[60px] max-medium:text-[50px] max-small:text-[35px] font-semibold leading-14 mb-4'>
                    블로그 서비스
                </h1>
                <h4 className='text-white text-base font-normal leading-17'>
                    IT 외주, 개발 비즈니스 꿀팁 블로그 서비스
                </h4>
            </div>
        </div>
    );
}
