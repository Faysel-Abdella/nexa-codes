// partners.tsx
import React from 'react';
import Image from 'next/image';
import logos  from '../data/partnersData';




const PartnersLogo = () => {
    return (
        <div className="grid items-center justify-center justify-items-center grid-cols-2 gap-[40px] max-verySmall:grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
          {logos.map((icon, index) => (
            <div key={index} className={`w-1/2 h-1/2 flex items-center justify-center ${index == 14 ? "max-sm:col-span-2" : ""}`}>
              <Image
                src={icon.src}
                alt="Partner logo"
                // width={100}
                // height={100}
                className="object-cover  "
              />
            </div>
          ))}
        </div>
      );
}

export default PartnersLogo;



