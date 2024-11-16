import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';

function Customise2() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4 md:px-32 pb-28">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1920px] space-y-10 md:space-y-0 md:space-x-10 mt-32"> {/* Added mt-10 for top margin */}
        
        {/* Image Container */}
        <div className="w-full md:w-[686px] h-[479px] bg-customSkyBlue rounded-lg"></div> {/* Added rounded corners for a modern look */}

        {/* Text Section */}
        <div className="flex flex-col gap-4 justify-center text-center md:text-left md:max-w-[50%]"> {/* Centered text for mobile and left-aligned for desktop */}
          <h2 className="font-bold text-[64px] leading-[1] tracking-[-0.02rem] text-black">
            Customise it to
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
              your needs
            </span>
          </h2>
          <p className="font-normal text-[18px] leading-[30px] tracking-[0.02rem] text-black">
            Customise the app with plugins, custom themes, and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
          </p>
          <button className="flex items-center justify-center w-[219px] h-[63px] mt-8 text-lg text-white bg-customLightBlue rounded-lg transition duration-300 hover:bg-customDarkBlue">
            Let’s Go <IoIosArrowRoundForward />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Customise2;

