import React, { useEffect, useState } from "react";

import { Select } from "antd";

import Image from "next/image";
import icon from "../assets/search_icon.svg";
import unfilled_icon from "../assets/unfilled_arrow.svg";

import allTags from "../data/allTags";

const BlogSearch = () => {
  let [tags, setTags] = useState<any>([]);

  const initializeTags = () => {
    const newTag: any = Array.from({ length: allTags.length }, () => false);
    setTags(newTag);
  };

  useEffect(() => {
    initializeTags();
  }, []);

  return (
    <div
      className="px-36 mx-auto mt-[15rem] 
    max-medium:px-10
    max-medium:mt-[10rem]
    max-small:mt-[7rem]
    max-small:px-[10px]
    "
    >
      <div
        className="flex items-center space-x-4
      max-midSmall:flex-col-reverse
      max-midSmall:gap-5
      "
      >
        <div className="relative flex items-center w-full bg-white border-gray-300">
          <input
            type="text"
            id="header-search"
            placeholder="제목 & 키워드를 검색해 주세요"
            className="bg-white text-black border border-[#ACACAC] focus:outline-none  w-full py-3 px-10 rounded-full pr-16 
            max-midSmall:pl-5
            max-midSmall:pr-12
            max-midSmall:placeholder:text-[13px]
            "
          />
          <div className="absolute right-4 ">
            <div className="cursor-pointer ">
              <Image
                src={icon}
                alt="search-icon"
                className="w-[29px] h-[30px]"
              />
            </div>
          </div>
        </div>

        <div className="max-midSmall:flex max-midSmall:flex-col max-midSmall:items-center max-midSmall:justify-center">
          <div className="rounded-full">
            <Select
              defaultValue="option_1"
              style={{ width: 110, fontSize: 24, borderRadius: "100px", 
              height: 50 }}
              suffixIcon={<Image
                src={unfilled_icon}
                alt="Down arrow"
                className="w-[16px] h-[10px]"
              />}
              // className="bg-white  rounded-full border border-gray-300 cursor-pointer"         
                   
              options={[
                { value: "option_1", label: "최신순" },
                { value: "option_2", label: "옵션2" },
                { value: "option_3", label: "옵션3" },
              ]}
            />
          </div>

          {/* <div className="flex gap-2 items-center flex-shrink-0 bg-white  px-6 py-3 rounded-full border border-gray-300 cursor-pointer">
            <button
              type="submit"
              className="text-nowrap text-gray-700 text-[15px]"
            >
              최신순
            </button>
            <Image
              src={unfilled_icon}
              alt="Down arrow"
              className="w-[19px] h-[13px]"
            />
          </div> */}

          <p
            className="text-[15px] mt-2 text-veryLight-gray
           midSmall:hidden
          "
          >
            인기순
          </p>
        </div>
      </div>

      <div className="flex justify-between mb-[4rem]">
        <div className="flex flex-wrap flex-row gap-2 mt-2">
          {allTags.map((tag, index) => (
            <div
              className={`flex justify-center items-center border border-light-border rounded-full py-1 px-[16px] cursor-pointer   text-[14px]
              ${tags[index] ? "bg-black text-white" : "text-light-gray"}
            
          `}
              onClick={() => {
                const updatedSelectedTags = [...tags];
                updatedSelectedTags[index] = !updatedSelectedTags[index];
                setTags(updatedSelectedTags);
              }}
            >
              {tag.label}
            </div>
          ))}
        </div>

        <p
          className="text-[18px] mt-2 text-veryLight-gray  mr-8 
        max-midSmall:hidden
        "
        >
          인기순
        </p>
      </div>
    </div>
  );
};

export default BlogSearch;
