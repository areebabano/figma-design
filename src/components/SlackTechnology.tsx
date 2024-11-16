import Image from 'next/image'
import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'

function SlackTechnology() {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center w-full bg-customBlue py-10 px-4 md:px-4 h-[700.4px]"
      style={{
        backgroundImage: "url('/element.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Image Section */}
      <div className="w-full md:w-[45%] flex justify-center"> {/* Adjusted width to 45% */}
        <Image
          src="/techno.png"
          alt="Work Image"
          width={500} // Reduced width
          height={250} // Reduced height for balance
          className="rounded-lg object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col gap-2 justify-center text-center md:text-left mr-16 md:w-[45%]"> {/* Adjusted width to 45% */}
        <h1 className="font-bold text-white text-3xl md:text-[60px] leading-tight md:leading-[72px] tracking-tight mb-2"> {/* Reduced font size */}
          Work with Your Favorite Apps Using whitepace
        </h1>
        <p className="font-normal text-white text-lg md:text-[16px] leading-relaxed mb-4"> {/* Reduced font size */}
        Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
        </p>
        <button className="flex items-center justify-center gap-2 w-[200px] h-[50px] mt-4 md:mt-6 text-lg text-white bg-customLightBlue rounded-lg transition duration-300 hover:bg-customDarkBlue">
          Read more <IoIosArrowRoundForward />
        </button>
      </div>
    </div>
  )
}

export default SlackTechnology



