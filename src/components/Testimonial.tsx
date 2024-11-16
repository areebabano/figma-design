import Image from 'next/image';
import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

function Testimonial() {
  return (
    <div className='bg-white w-full h-[720px] py-10'>
      <h1 className='font-bold text-[70px] text-center text-black leading-[84px] mb-12'>
        What Our Clients 
        <span
          style={{
            backgroundImage: "url('/text3.png')",
            backgroundPosition: "bottom",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            display: "inline-block",
            marginTop: "10px",
            paddingBottom: "10px",
          }}
          className="relative"
        >
          Says
        </span>
      </h1>
      <div className='flex flex-wrap justify-center gap-6'>
        {/* Testimonial Card 1 */}
        <div className='w-[400px] h-[400px] bg-white rounded-2xl shadow-lg'>
          <div className='flex flex-col  gap-8 p-6'>
            <FaQuoteLeft className='text-customBlue' size={50}/>
            <p className='font-normal text-[18px] leading-[30px] text-black border-b-2 border-[#212529] pb-4'>
              Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
            </p>
            <div className='flex items-center gap-4'>
              <Image
                src="/c1.png"
                alt='Client1'
                height={70}
                width={90}
              />
              <div className='flex flex-col gap-2'>
                <p className='font-semibold text-[24px] leading-[36px] text-black'>Oberon Shaw, MCH</p>
                <p className='font-normal text-[16px] leading-[20px] text-black'>Head of Talent Acquisition, North America</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Card 2 */}
        <div className='w-[400px] h-[400px] bg-customLightBlue rounded-2xl shadow-lg'>
          <div className='flex flex-col e gap-8 p-6'>
            <FaQuoteLeft className='text-white' size={50}/>
            <p className='font-normal text-[18px] leading-[30px] text-white border-b-2 border-[#212529] pb-4'>
              Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
            </p>
            <div className='flex items-center gap-4'>
              <Image
                src="/c2.png"
                alt='Client2'
                height={70}
                width={90}
              />
              <div className='flex flex-col gap-2'>
                <p className='font-semibold text-[24px] leading-[36px] text-customBlue'>Oberon Shaw, MCH</p>
                <p className='font-normal text-[16px] leading-[20px] text-white'>Head of Talent Acquisition, North America</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Card 3 */}
        <div className='w-[400px] h-[400px] bg-customLightBlue rounded-2xl shadow-lg'>
          <div className='flex flex-col  gap-8 p-6'>
            <FaQuoteLeft className='text-white' size={50}/>
            <p className='font-normal text-[18px] leading-[30px] text-white border-b-2 border-[#212529] pb-4'>
              Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
            </p>
            <div className='flex items-center gap-4'>
              <Image
                src="/c3.png"
                alt='Client3'
                height={70}
                width={90}
              />
              <div className='flex flex-col gap-2'>
                <p className='font-semibold text-[24px] leading-[36px] text-customBlue'>Oberon Shaw, MCH</p>
                <p className='font-normal text-[16px] leading-[20px] text-white'>Head of Talent Acquisition, North America</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Image */}
      <div className='flex justify-center mt-8'>
        <Image
          src="/slider.png"
          alt='slider'
          height={40}
          width={40}
          className='object-cover'
        />
      </div>
    </div>
  );
}

export default Testimonial;
