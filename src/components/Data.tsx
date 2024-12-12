import Image from 'next/image'
import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'

function Data() {
  return (
    <div className="bg-white w-full min-h-[661.13px] flex flex-col md:flex-row items-center justify-center p-6 md:p-12">
      <div className="flex flex-col items-start text-start md:mr-2 md:max-w-[50%]"> {/* Reduced margin to 2 */}
        <h1 className="font-bold text-black text-4xl md:text-[72px] leading-tight md:leading-[87.14px] tracking-tight mb-2 md:mb-4">
          100% your 
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
            data
          </span>
        </h1>

        <p className="font-normal text-black text-base md:text-lg leading-relaxed tracking-tight max-w-[700px] mb-2 md:mb-4"> {/* Reduced margin to 2 */}
          The app is open source and your notes are saved to an open format, so you&apos;ll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no one but yourself can access them.
        </p>

        <button className="flex items-center justify-center gap-2 w-[219px] h-[63px] mt-4 text-lg text-white bg-customLightBlue rounded-lg hover:bg-customBlue transition duration-300">
          Read more <IoIosArrowRoundForward />
        </button>
      </div>

      <div className="mt-4 md:mt-0 flex justify-center md:max-w-[50%]"> {/* Reduced margin to 4 */}
        <Image
          src="/data.png"
          alt="Data"
          height={700}
          width={700}
          className="object-contain"
        />
      </div>
    </div>
  )
}

export default Data
