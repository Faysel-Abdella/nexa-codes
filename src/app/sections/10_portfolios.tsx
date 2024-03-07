"use client"


import Slider from 'react-slick';
import portfoliosImages  from '../data/portfolios';
import Frame from '../components/Frame';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export default function SliderFrame() {
  const CustomPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className={`py-4 max-medium:py-2  px-6 max-medium:px-4 max-medium-leading-4 font-thin text-slate-300 bg-474747 absolute top-1/2 -left-[4rem] medium:-left-[8rem] transform -translate-y-1/2 text-3xl medium:text-4xl border border-solid border-white border-opacity-40 rounded-full cursor-pointer`}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
    );
  };

  const CustomNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className={`py-4 max-medium:py-2  px-6 max-medium:px-4 max-medium-leading-4 font-thin text-slate-300 bg-474747 absolute top-1/2 -right-[4rem] medium:-right-[8rem] transform -translate-y-1/2 text-3xl medium:text-4xl border border-solid border-white border-opacity-40 rounded-full cursor-pointer`}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      
      {
        breakpoint: 2200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900, // Use the medium screen size
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 540, // Use the small screen size
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],

    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    customPaging: function (i: any) {
      const totalSlides = portfoliosImages.length;

      // Show only one dot at a time
      if (totalSlides <= 1) {
        return <></>; // Do not render any dots if there is only one slide
      }

      // Calculate the index of the active dot to show
      const activeDotIndex = (this as any).currentSlide % totalSlides;

      // Determine whether the current dot is the active one
      const isActiveDot = i === activeDotIndex;

      // Set the background color based on the active state
      const backgroundColor = isActiveDot ? 'bg-white' : 'bg-gray-500';

      return (
        <div
          key={i}
          className={` mt-[2.5rem] max-small:mt-[4rem]  max-medium:mt-[3rem]`}
        >
          <span
            className={`block h-4 w-4 rounded-full max-medium:h-3 max-medium:w-3 max-small:h-2 max-small:w-2 max-extraSmall:h-3 max-extraSmall:w-3 ${backgroundColor}`}
          ></span>
        </div>
      );
    },
  };

  return (
    <div id='portfolio'>
      <div className='bg-[#000000] pt-[9rem] pb-[12rem] px-[14rem] max-medium:px-[5rem]  max-medium:pb-[6rem] max-medium:pt-[4rem]  max-small:pt-[2rem] max-extraSmall:px-[3.5rem] max-verySmall:px-[2rem] max-small:pb-[7rem]  relative medium:py-50'>
        <h1 className='text-white text-center mb-[4rem] max-medium:mb-[2rem] text-[50px]  max-medium:text-[35px] max-small:mb-[2rem]'>
          포트폴리오
        </h1>

        <Slider {...settings}>
          {portfoliosImages.map((frame) => (
            <Frame key={frame.id} image={frame.frame} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
