import Image from 'next/image';
import review from '../assets/review.png';

interface testimonial {
  description1?: String,
  description2?: String,
  description3?: String,
  description4?: String,
  description5?: String,
  description6?: String,

  name: String,
  location?: String
}

export default function Testimonial({ description1, description2, description3, description4, name, location }: testimonial) {
  return (
    <div className=' bg-white py-4 w-[320px] h-[410px] rounded-2xl border border-solid border-gray-300 relative mx-4'>
      <div className='flex justify-between items-center border-b border-solid border-gray-300 pb-6 mb-4 mx-2'>
        <div className='text-xs text-light-gray font-semibold'>{name}</div>
        <div className='flex items-center'>
          <Image src={review} className='w-[90px]' alt='5 star' />
          <p className='text-500 font-semibold'>5.0</p>
        </div>

        <div className='text-light-gray text-xs'>{location}</div>
      </div>
      <p className='text-lg leading-5 font-normal text-zinc-950 px-6'>
        {description1}
      </p>
      {description2 && <p className='mt-7 mb-7 text-lg leading-5 font-normal text-zinc-950 px-6'>
        {description2}
      </p>}
      {description3 && <p className=' text-lg leading-5 font-normal text-zinc-950 px-6'>
        {description3}
      </p>}
    
    </div>
  );
}
