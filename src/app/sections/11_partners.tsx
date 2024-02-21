// PartnersPage.tsx
import React from 'react';
import bgImage from "../assets/partners_bg.svg"
import PartnersLogo from '../components/PartnersLogo';

const Partners: React.FC = () => {
  return (
    <main className="max-container partners-bg px-20 pt-[100px] pb-[100px]
    medium:py-48
    max-medium:pt-[200px]
    max-small:pt-[150px]
    max-small:px-0"
    >
      <h2
        className="text-[#000] text-[50px] text-center font-bold tracking-[-1.5px] mb-20
      max-medium:text-[40px]
      max-small:text-[25px]"
      >
        주요 클라이언트
      </h2>
      
      <div className="flex items-center justify-center">
        <PartnersLogo/>        
      </div>
    </main>
  );
};

export default Partners;
