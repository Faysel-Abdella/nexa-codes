"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic'


const HowCard = dynamic(() => import('../components/HowCard'))
// import HowCard from '../components/HowCard';
import simple1 from '../assets/how_nexa_works/simple1.png';
import simple2 from '../assets/how_nexa_works/simple2.png';
import simple3 from '../assets/how_nexa_works/simple3.png';
import detail1 from '../assets/how_nexa_works/detail1.jpg';
import detail2 from '../assets/how_nexa_works/detail2.png';
import detail3 from '../assets/how_nexa_works/detail3.png';

const HowNexaWorks = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isDetailMode1, setDetailMode1] = useState(true);
  const [isDetailMode2, setDetailMode2] = useState(false);
  const [isDetailMode3, setDetailMode3] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 900);
    };

    if (typeof window !== 'undefined') {
      setIsSmallScreen(window.innerWidth <= 900);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);


  const toggleDetailMode1 = () => {
    setDetailMode1(true);
    setDetailMode2(false);
    setDetailMode3(false);
  };

  const toggleDetailMode2 = () => {
    setDetailMode2(true);
    setDetailMode1(false);
    setDetailMode3(false);
  };

  const toggleDetailMode3 = () => {
    setDetailMode3(true);
    setDetailMode1(false);
    setDetailMode2(false);
  };

  return (
    <div className='max-container px-4 max-medium:px-0 mt-[200px]'>
      <h2 className='text-center tracking-tight text-5xl  max-medium:text-2xl max-small:text-xl max-midSmall:text-lg  font-bold text-black my-[6rem] max-medium:my-[2rem] max-small:my-[1.5rem] max-verySmall:my-[1rem]'>
        넥사코드는 어떻게 일할까요?
      </h2>

      <div className={`flex gap-[1rem] ${isSmallScreen ? 'flex-col' : ''}`}>
        {isDetailMode1 || isSmallScreen ? (
          <HowCard
            detailedImage={detail1}
            text='결코, 고객을 탓하지 않습니다
            고객의 성공에 기여하기 위해 성심을 다합니다'
            header='프로젝트를 진단해 방향성과
            성장성을 같이 고민합니다'
            buttonText='프로세스'
          />
        ) : (
          <div className='relative'>
            <Image
              src={simple1}
              className='inline w-[430px] h-[520px]'
              alt='Simple 1'
              placeholder="blur"
              loading="lazy"

            />
            <button
              onMouseOver={toggleDetailMode1}
              className='text-6xl bg-D3D3D pt-1 pb-2 px-4 rounded-full font-thin absolute bottom-[2rem] right-8 text-white cursor-pointer'
            >
              +
            </button>
          </div>
        )}

        {isDetailMode2 || isSmallScreen ? (
          <HowCard
            detailedImage={detail2}
            text='겪어보지 않으면 모르는 부분들을 경험으로 짚어드립니다
            위험을 예방하고 제품 출시로 달려갑니다'
            header='미끼견적과 가짜 포트폴리오로
            고객을 현혹하지 않아요'
            buttonText='검증된 공식'
          />
        ) : (
          <div className='relative'>
            <Image
              src={simple2}
              className='inline w-[430px] h-[520px]'
              alt='Simple 2'
              placeholder="blur"
              loading="lazy"


            />
            <button
              onMouseOver={toggleDetailMode2}
              className='text-6xl bg-D3D3D pt-1 pb-2 px-4 rounded-full font-thin absolute bottom-[2rem] right-8 text-white cursor-pointer'
            >
              +
            </button>
          </div>
        )}

        {isDetailMode3 || isSmallScreen ? (
          <HowCard
            detailedImage={detail3}
            text='담당 매니저가 체계적인 프로세스로
            기획부터 개발까지 이끌어 드립니다'
            header='고객서비스를 확인, 자사의 기획/
               개발/운영 노하우를 제안하고 적용합니다'
            buttonText='진정성'
          />
        ) : (
          <div className='relative'>
            <Image
              src={simple3}
              className='inline w-[430px] h-[520px]'
              alt='Simple 3'
              placeholder="blur"
              loading="lazy"

            />
            <button
              onMouseOver={toggleDetailMode3}
              className='text-6xl bg-D3D3D pt-1 pb-2 px-4 rounded-full font-thin absolute bottom-[2rem] right-8 text-white cursor-pointer'
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default HowNexaWorks;