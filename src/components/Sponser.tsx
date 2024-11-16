import Image from 'next/image'
import React from 'react'

function Sponser() {
  return (
    <div className='bg-white w-full h-[438px] flex flex-col items-center justify-center'>
      <h1 className="font-bold text-black text-4xl text-center md:text-[72px] leading-tight md:leading-[87.14px] tracking-tight mb-20"> {/* Added margin bottom */}
        Our
        <span
          style={{
            backgroundImage: "url('/text2.png')",
            backgroundPosition: "bottom",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            display: "inline-block",
            marginTop: "10px",
            paddingBottom: "10px",
          }}
          className="relative"
        >
          sponsors
        </span>
      </h1>
      <div className='flex justify-center gap-32'> {/* Removed flex-wrap to keep images in a single row */}
        <Image
          src="/apple.png"
          alt='Apple logo'
          height={30}
          width={40}
          className="object-contain"
        />
        <Image
          src="/microsoft.png"
          alt='Microsoft logo'
          height={100}
          width={200}
          className="object-contain"
        />
        <Image
          src="/slack.png"
          alt='Slack logo'
          height={100}
          width={200}
          className="object-contain"
        />
        <Image
          src="/google.png"
          alt='Google logo'
          height={100}
          width={200}
          className="object-contain"
        />
      </div>
    </div>
  )
}

export default Sponser
