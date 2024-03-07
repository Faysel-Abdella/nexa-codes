import React from "react";
import Image from "next/image";

type processProps = {
  step: string;
  icon: any;
  title: string;
  description1: string;
  description2: string;
};

const Process = ({
  step,
  icon,
  title,
  description1,
  description2,
}: processProps) => {
  return (
    <section className="flex flex-col justify-center items-center text-center">
      <div className="w-[51px] h-[51px] bg-[#fff] rounded-full flex justify-center items-center">
        <span className="text-[#000] text-[30px] font-normal">{step}</span>
      </div>

      <div className="mt-[30px]">
        <Image src={icon} alt="process step icon" />
      </div>

      <h2 className="mt-[17px] text-[35px]  font-bold text-[#fff] tracking-[-1.2px]">
        {title}
      </h2>
      <h3 className="mt-[12px] text-[12px] font-normal text-[#fff] tracking-[-0.42px]">
        {description1}
      </h3>
      <h3 className="text-[12px] font-normal tracking-[-0.42px] text-[#fff]">
        {description2}
      </h3>
    </section>
  );
};

export default Process;
