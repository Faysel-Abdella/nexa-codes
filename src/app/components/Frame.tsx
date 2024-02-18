import Image from 'next/image';

import React from 'react';

export default function Frame({ image }: any) {
    // console.log(image)
  return (
    <div>
      <Image
        src={image}
        alt='Our produts'
        className='rounded-xl border border-gray-100 max-small:w-50% max-small:w-50%  max-small:border-0 max-small:mb-[2rem]'
      />
    </div>
  );
}
