import Image from "next/image";

export default function HowCard({ detailedImage, text, header, buttonText }: any) {
  return (
    <div className='relative max-medium:mx-[4rem] max-extraSmall:mx-[2rem] '>
      <Image
        src={detailedImage}
        alt='Detailed'
        className='inline h-[520px] max-medium:h-[350px] max-extraSmall:h-[260px] max-medium:w-[700px] rounded-[30px]'
        priority={true}
        placeholder="blur"

      />
      <div className='absolute max-medium:top-[30%] max-extraSmall:top-[20%] max-medium:translate-y-[-50%] inset-0 mb-[4rem] mt-[7rem]  max-medium:mt-[4rem] max-small:mt-[2rem]  font-normal medium:mb-[1rem] '>
        <h3 className='text-white font-semibold text-[44px] max-largeMedium:text-4xl max-medium:text-3xl max-midSmall:text-2xl max-small:text-xl max-extraSmall:text-lg max-verySmall:text-[13px] leading-[70px] max-extraSmall:leading-[25px] max-verySmall:leading-[20px] tracking-tighter mb-[1rem]  mx-[6rem] max-midSmall:mx-[3rem] max-extraSmall:mx-[1rem]     text-center'>
          {header}
        </h3> 

        <div className='text-center max-largeMedium:mx-[25%] max-small:mx-[10%] max-extraSmall:mx-[5%] font-normal mx-[35%] max-medium:mt-7'>
          <div className=' text-align:center'>
            <p className='font-normal max-largeMedium:text-sm max-medium:text-xs max-extraSmall:text-[14px] max-verySmall:text-[12px] text-base text-white max-small:text-xs mb-[2rem]'>
              {text}
            </p>
          </div>
          <button className='bg-white rounded-full px-4 py-2 max-midSmall:px-4 max-small:px-3 text-xs:px-2  max-verySmall:text-small-size max-midSmall:text-xs max-extraSmall:text-[14px] text-black'>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

