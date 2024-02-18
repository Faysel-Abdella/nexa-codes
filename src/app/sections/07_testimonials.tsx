import React from 'react';
import { userTestimonial } from "../data/userTestimonials";
import Testimonial from '../components/Testimonial';
import Marquee from 'react-fast-marquee';

export default function Testimonials() {
  return (
    <div className='my-[15rem]'>
      <Marquee direction='left' gradient={true} gradientWidth={100} speed={20}>
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
