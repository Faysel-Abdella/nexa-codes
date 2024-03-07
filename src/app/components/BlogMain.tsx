import Image from "next/image";

const BlogPost = ({ id, header, description, image, date }: any) => {
  return (
    <div className='my-16 max-small:my-6'>
      <p className='text-gray-300 text-[16px] leading-5 mb-6 max-small:text-[12px] max-small:mb-2'>{date}</p>
      <div className='flex gap-6 content-center pb-16 small:border-b-0.5 small:border-light-border
      max-small:pb-3
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
          <h3 className=' text-[26px] leading-10 text-black font-extrabold  mb-2
          max-midSmall:text-[20px]
          max-midSmall:font-semibold
          max-small:text-[13px]
          max-small:leading-5
          '>
            {header}
          </h3>
          <h4 className='text-[16px] text-black leading-5 font-normal
          max-midSmall:text-[14px]
          max-small:text-[13px]
          max-small:hidden
          '>{description}</h4>
        </div>
        
      </div>
      <h4 className='small:hidden text-[16px] text-black leading-5 font-normal
          max-midSmall:text-[14px]
          max-small:text-[13px]
          border-b-0.5 border-light-border
          pb-10
          '>{description}</h4>
    </div>
  );
}

export default BlogPost



