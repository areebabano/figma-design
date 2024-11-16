import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'

function Customise1() {
  return (
    <div className="flex items-center justify-center h-[759px] bg-customBlue px-32 pb-28]">
      <div className="flex items-center justify-between w-[1921px] mb-[-20]">
        {/* Text Section */}
        <div className="flex flex-col gap-4 justify-center">
          <h2 className="font-bold text-[64px] leading-[77.45px] tracking-[-0.02rem] text-white">
          Use as 
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
              Extension
            </span>
          
          </h2>
          <p className="font-normal text-[18px] leading-[30px] tracking-[0.02rem] text-white">
          Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.

          </p>
          <button className="flex items-center justify-center w-[219px] h-[63px] mt-14 text-lg text-white bg-customLightBlue rounded-lg">
          Let’s Go <IoIosArrowRoundForward/>
          </button>
        </div>

        {/* Image Container */}
        <div className="w-[686px] h-[479px] gap-[4px] bg-customSkyBlue">
        </div>
      </div>
    </div>
  )
}

export default Customise1