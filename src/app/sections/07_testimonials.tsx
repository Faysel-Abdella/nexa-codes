"use client"

import { useEffect, useState } from "react";
import { userTestimonial } from "../data/userTestimonials";
import Testimonial from '../components/Testimonial';
import Marquee from 'react-fast-marquee';

export default function Testimonials() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const gradientWidth = windowWidth > 900 ? 600 : 100;
  return (
    <div className='my-[15rem]'>
      <Marquee direction='left' gradient={true} gradientWidth={gradientWidth} speed={20}>
        {userTestimonial.map((user) => (
          <Testimonial
            key={user.id}
            description1={user.description1}
            description2={user.description2}
            description3={user.description3}
            name={user.name}
            location={user.location}
          />
        ))}
      </Marquee>
    </div>
  );
}
