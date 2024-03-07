"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Link, animateScroll as scroll } from "react-scroll";

import { AiOutlineAlignRight } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

import navBarLinks from "../data/navBarLinks";

import logo from "../assets/logo.svg";

const NavBar = () => {
  const [navbar, setNavBar] = useState(false);
  const route = useRouter();

  const goToBlog = (page: string) => {
    if (page == "/blog") {
      route.push("/blog");
    }
    setNavBar(false)
  };

  return (
    <header className="max-container">
      <nav
        className="flex justify-between items-center max-md:items-start pt-[30px] ml-[100px] mr-[60px] 
        max-medium:pt-[20px] max-medium:ml-0 max-medium:mr-0 max-medium:px-5
      max-md:pt-5 max-md:ml-0 max-md:mr-0 max-md:px-5
      max-small:pt-2 
      "
      >
        <div className="max-md:items-start">
          <Image
            src={logo}
            alt="Logo"
            className="w-[76px] h-[104px] max-md:w-[35px] max-md:h-[20px] max-md:items-start"
          />
        </div>

        <div
          className={`flex gap-[35px]
        max-md:absolute max-md:min-h-[40vh] max-md:left-0 max-md:w-full max-md:flex-col
        max-md:bg-black max-md:bg-opacity-[99%]
        ${navbar ? "max-md:top-[0]" : "max-md:top-[-2000%]"} duration-500
        max-md:justify-center max-md:items-center max-md:gap-5 max-md:py-4
        `}
        >
          {navbar && (
            <div className="self-end pr-3">
              <AiOutlineClose
                onClick={() => setNavBar(!navbar)}
                className="text-white text-xl cursor-pointer md:hidden z-[1000]"
              />
            </div>
          )}
          {navBarLinks.map((nav) => (
            <Link
              key={Math.random()}
              to={nav.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={2}
              className="cursor-pointer"
              onClick={() => goToBlog(nav.to)}
            >
              <span className="text-[#fff] z-[1000] font-poppins text-[16px] font-medium leading-[-0.54]">
                {nav.label}
              </span>
            </Link>
          ))}
        </div>

        {!navbar && (
          <AiOutlineAlignRight
            onClick={() => setNavBar(!navbar)}
            className="text-white text-xl cursor-pointer md:hidden "
          />
        )}
      </nav>
    </header>
  );
};

export default NavBar;
