import React from "react";
import SampleOne from "../components/SampleOne";
import SampleTwo from "../components/SampleTwo";

const Samples = () => {
  return (
    <main
      className="max-container flex justify-center items-start gap-[100px] pt-[79px]  bg-[#fff] px-16
    max-largeMedium:flex-col max-largeMedium:items-center 
    max-small:px-9 max-small:gap-[60px]
    "
    id="strength"
    >
      <SampleOne />
      <SampleTwo />
    </main>
  );
};

export default Samples;
