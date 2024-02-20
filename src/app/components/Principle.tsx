import React from "react";
import Image from "next/image";

const Principle = ({
  image,
  title,
  title2,
}: {
  image: any;
  title: string;
  title2: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image src={image} alt="one of our principles" />
      <div
        className="mt-[36px] text-center
      max-medium:mt-[25px]
      "
      >
        <p
          className="text-[#333] text-[40px] font-normal tracking-[-1.2px]
        max-small:text-[25px]
        "
        >
          {title}
        </p>
        <p
          className="text-[#333] text-[40px] font-semibold tracking-[-1.2px] relative z-[10]
            after:content-[''] after:w-full after:h-4  after:absolute after:left-0 after:bottom-3 after:bg-yellow-400 after:z-[-2]
        max-small:text-[25px] max-small:after:h-[5px]
        max-small:after:bottom-[6px]

        "
        >
          {title2}
        </p>
      </div>
    </div>
  );
};

export default Principle;
