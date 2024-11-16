import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'

function YourWork() {
  return (
    <div className='w-full h-[574px] bg-customBlue'
    style={{
        backgroundImage: "url('/bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        backgroundSize: "contain",
        padding: "40px", // Add padding for better spacing
      }}
    >
        <div className='flex flex-col items-center w-[1481] h-[259px] p-28'>
            <h1 className="font-bold text-white text-4xl md:text-[72px] leading-tight md:leading-[87.14px] tracking-[-0.02px] mb-4">Your work, everywhere
            <span
          style={{
            backgroundImage: "url('/text1.png')",
            backgroundPosition: "bottom",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            display: "inline-block",
            marginTop: "10px",
            paddingBottom: "10px",
          }}
          className="relative"
        >     you are
        </span>
                 </h1>
            <p className="font-normal text-white text-lg md:text-[18px] leading-[30px] tracking-[-0.02px] text-center">
            Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
          </p>
          <button className="flex items-center justify-center gap-2 w-[219px] h-[63px] mt-6 md:mt-14 text-lg text-white bg-customLightBlue rounded-lg">
            Try Taskey <IoIosArrowRoundForward />
          </button>
        </div>

      
    </div>
  )
}

export default YourWork
