"use client"

import { useEffect, useState } from 'react';
import { userTestimonial } from '../data/userTestimonials';
import Testimonial from '../components/Testimonial';
import Marquee from 'react-fast-marquee';

export default function Testimonials() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const gradientWidth = windowWidth > 900 ? 600 : 100;

  if (typeof window === 'undefined') {
    return null; // Return null or a loading indicator if running in a non-browser environment
  }

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