import React from 'react';
import bg from '../assets/blog-bg.png';

export default function Hero() {
  return (
    <div
      className=' px-2 py-6 relative'
      style={{ backgroundImage: `url(${bg})`, height: '600px' }}
    >
      <div
        className='absolute inset-0 bg-opacity-75'
        style={{ background: 'rgba(0, 0, 0, 0.3)' }}
      ></div>

      {/* the navigation part */}
      <div>
        <nav className='p-4 flex justify-between mx-10 my-4 relative'>
          <div className='flex space-x-6'>
            <a href='/' className='text-white font-semibold cursor-pointer'>
              SPARTA
            </a>
          </div>

          <div className='flex space-x-6'>
            <div className='flex align-center gap-0.5'>
              <a href='/' className='text-white font-medium cursor-pointer'>
                블로그
              </a>
              <i className='fa-solid fa-sort-down text-white cursor-pointer'></i>
            </div>
            <a href='/' className='text-white font-medium cursor-pointer'>
              서비스 특징
            </a>
            <a href='/' className='text-white font-medium cursor-pointer'>
              강점
            </a>
            <a href='/' className='text-white font-medium cursor-pointer'>
              투자사
            </a>
            <a href='/' className='text-white font-medium cursor-pointer'>
              포트폴리오
            </a>
            <a href='/' className='text-white font-medium cursor-pointer'>
              진행과정
            </a>
          </div>

          {/* Right section */}
          <div className='flex space-x-6'>
            <a href='/' className='text-white underline cursor-pointer'>
              KR
            </a>
            <a href='/' className='text-white  cursor-pointer'>
              EN
            </a>
          </div>
        </nav>
      </div>
      
      {/* the hero header */}
      <div className='text-center my-[10rem] relative'>
        <h1 className='text-white text-6xl font-semibold leading-14 mb-4'>
          블로그 서비스
        </h1>
        <h4 className='text-white text-base font-normal leading-17'>
          IT 외주, 개발 비즈니스 꿀팁 블로그 서비스
        </h4>
      </div>
    </div>
  );
}
