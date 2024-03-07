import React from "react";

import processes from "../data/processes";
import Process from "../components/Process";
import { processType } from "../data/processes";

const Processes = () => {
  return (
    <section className="processes-section pt-[125px] pb-[160px] mt-10"
    id="processes"
    >
      <main>
        <h2 className="text-[#fff] text-5xl  text-center font-bold tracking-[-1.5px]
        max-medium:text-2xl max-small:text-xl 
        ">
          진행과정
        </h2>
        <div className="flex justify-center items-center">
          <div
            className="mt-[73px] grid grid-cols-4 gap-y-[140px] 
          max-largeMedium:grid-cols-2
          max-small:grid-cols-1
          max-small:gap-y-[65px]
          "
          >
            {processes.map((step: processType) => (
              <Process
                key={step.step}
                step={step.step}
                icon={step.icon}
                title={step.title}
                description1={step.description1}
                description2={step.description2}
              />
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default Processes;
