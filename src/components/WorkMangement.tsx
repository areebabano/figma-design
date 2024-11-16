import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function WorkManagement() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 py-10 space-y-20">
      
      {/* First Section: Project Management */}
      <div
        className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-[1200px] space-y-10 md:space-y-0 md:space-x-10"
        style={{
          backgroundImage: "url('/bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left center",
          backgroundSize: "contain",
          padding: "40px", // Add padding for better spacing
        }}
      >
        {/* Text Section */}
        <div className="flex flex-col gap-4 justify-center text-center md:text-left md:max-w-[50%]">
          <h1 className="font-bold text-black text-4xl md:text-[72px] leading-tight md:leading-[87.14px] tracking-tight">
            Project 
            <span
              style={{
                backgroundImage: "url('/text2.png')",
                backgroundPosition: "bottom",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                display: "inline-block",
                marginTop: "10px",
              }}
              className="relative"
            >
              Management
            </span>
          </h1>
          <p className="font-normal text-black text-lg md:text-[18px] leading-relaxed">
            Images, videos, PDFs, and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </p>
          <button className="flex items-center justify-center gap-2 w-[219px] h-[63px] mt-6 md:mt-14 text-lg text-white bg-customLightBlue rounded-lg transition duration-300 hover:bg-customDarkBlue">
            Get Started <IoIosArrowRoundForward />
          </button>
        </div>

        {/* Image Container */}
        <div className="flex w-full md:w-[50%] h-[447px] bg-customSkyBlue rounded-lg"></div>
      </div>

      {/* Second Section with Image and Text */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1200px] space-y-10 md:space-y-0">
        
        {/* Image Section */}
        <div className="w-full md:w-[50%] flex justify-center md:pr-24 py-10"> {/* Add right padding for spacing */}
          <Image
            src="/workimage.png"
            alt="Work Image"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col gap-4 justify-center text-center md:text-left md:max-w-[50%]">
          <h1 className="font-bold text-black text-4xl md:text-[72px] leading-tight md:leading-[87.14px] tracking-tight">
            Work
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
              Together
            </span>
          </h1>
          <p className="font-normal text-black text-lg md:text-[18px] leading-relaxed">
            With whitespace, share your notes with your colleagues and
            collaborate on them. You can also publish a note to the internet and
            share the URL with others.
          </p>
          <button className="flex items-center justify-center gap-2 w-[219px] h-[63px] mt-6 md:mt-14 text-lg text-white bg-customLightBlue rounded-lg transition duration-300 hover:bg-customDarkBlue">
            Try it now <IoIosArrowRoundForward />
          </button>
        </div>
      </div>
    </div>
  );
}

export default WorkManagement;

