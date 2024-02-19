import Image from "next/image";

const BlogPost = ({ id, header, description, image, date }: any) => {
  return (
    <div className='my-16 max-small:my-12'>
      <p className='text-gray-300 text-[16px] leading-5 mb-6'>{date}</p>
      <div className='flex gap-6 content-center pb-16 border-b-0.5 border-light-border
      max-small:pb-10
      max-small:gap-4
      '>
        <Image
          src={image}
          alt='Blogger image'
          className="h-[91px] w-[91px] rounded-[10px]
          max-small:h-[54px]
          max-small:w-[54px]
          "
        />
        <div>
          <div className=' text-[26px] leading-10 text-black font-extrabold  mb-2
          max-midSmall:text-[20px]
          max-midSmall:font-bold
          max-small:text-[16px]
          max-small:leading-5
          '>
            {header}
          </div>
          <div className='text-[16px] text-black leading-5 font-normal
          max-midSmall:text-[14px]
          max-small:text-[13px]
          max-small:self-start
          '>{description}</div>
        </div>
      </div>
    </div>
  );
}

export default BlogPost



