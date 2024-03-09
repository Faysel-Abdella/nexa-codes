import React from "react";
import Image from "next/image";

const Feature = ({
  textColor,
  number,
  text01,
  text02,
  imageFile,
  bgColor,
  borderColor,
  btnText,
  btnTextColor,
  btnBorderColor,
}: any) => {
  return (
    <div
      className={`bg-[#${bgColor}] text-${textColor} flex flex-col justify-center items-center pb-[52px] pt-[50px] px-[40px] border border-[#${borderColor}]`}
    >
      <p className={`mb-[29px] text-center text-[35px] font-medium`}>
        {number}
      </p>
      <p className=" text-center text-[35px] font-medium">{text01}</p>
      <p className=" mb-[40px] text-center text-[35px] font-medium">{text02}</p>
      <Image loading="lazy" src={imageFile} alt="feature" width={242} height={150} />
      <div
        className={`mt-[30px] flex justify-center items-center w-[302px] h-[69px] rounded-[34.50px] border border-[#${btnBorderColor}]`}
      >
        <span
          className={`text-center text-[${btnTextColor}]  text-[25px] font-light font-['Pretendard']`}
        >
          {btnText}
        </span>
      </div>
    </div>
  );
};

export default Feature;
