import React from "react";

const HeroSection = () => {
  return (
    // <div className="flex items-center justify-center h-[929px] bg-customBlue px-32 pb-28">
    <div
      className="flex items-center justify-center min-h-screen bg-customBlue px-6 md:px-16 lg:px-32 py-10 md:py-20"
      style={{
        backgroundImage: "url('/wave.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-center justify-between w-[1920px] mb-[-20]">
        {/* Text Section */}
        <div className="flex flex-col gap-4 justify-center">
          <h2 className="font-bold text-[64px] leading-[77.45px] tracking-[-0.02rem] text-white">
            Get More Done with Whitespace
          </h2>
          <p className="font-normal text-[18px] leading-[30px] tracking-[0.02rem] text-white">
            Project management software that enables your teams to collaborate,
            plan, analyze, and manage everyday tasks.
          </p>
          <button className="flex items-center justify-center w-[219px] h-[63px] mt-14 text-lg text-white bg-customLightBlue rounded-lg">
            Try Whitespace Free
          </button>
        </div>

        {/* Image Container */}
        <div className="w-[824px] h-[549px] gap-[4px] bg-customSkyBlue">
        </div>
      </div>
    </div>
  );
};

export default HeroSection

