import Image from 'next/image';
import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';

function FreeTrial() {
  return (
    <div className='w-full h-[705px] bg-customBlue flex flex-col justify-center items-center'>
      <h1 className='font-bold text-[72px] text-center text-white leading-[87.14px] tracking-[-0.02px] mb-4'>
        Try Whitepace <br/> today
      </h1>
      <p className='font-normal text-[24px] text-center text-white leading-[32px] tracking-[-0.02px] mb-6'>
        Get started for free.<br/> Add your whole team as your needs grow.
      </p>
      <button className="flex items-center justify-center text-center gap-2 w-[219px] h-[63px] mt-6 md:mt-6 text-lg text-white bg-customLightBlue rounded-lg transition duration-300 hover:bg-customDarkBlue">
        Try Taskey Free <IoIosArrowRoundForward />
      </button>
      <p className='font-normal text-[24px] text-center text-white leading-[32px] tracking-[-0.02px] mt-12'>
        On a big team? Contact sales
      </p>
      <div className='flex gap-6 justify-center mt-10'>
        <Image
          src="/i1.png"
          alt='icon1'
          height={30}
          width={50}
          className='object-contain'
        />
        <Image
          src="/i2.png"
          alt='icon2'
          height={30}
          width={50}
          className='object-contain'
        />
        <Image
          src="/i3.png"
          alt='icon3'
          height={30}
          width={50}
          className='object-contain'
        />
      </div>
    </div>
  );
}

export default FreeTrial;
