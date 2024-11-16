import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Header() {
  return (
    <div className="flex items-center h-[92px] justify-between bg-customBlue border-b border-blue-900 px-[130px]">
      <div className="flex items-center gap-2">
        {/* Logo  */}
        <Image src="/logo.png" alt="Logo" height="20" width="40" />
        <h3 className="font-bold text-[28px] leading-[33.89px]">whitepace</h3>
      </div>

      {/* Navigations  */}
      <ul className="flex items-center justify-center gap-[40px] ml-auto">
        <li className="flex items-center gap-[8px]">
          Products
          <Image src="/vector.png" alt="Logo" height="20" width="20" />
        </li>
        <li className="flex items-center gap-[8px]">
          Solutions
          <Image src="/vector.png" alt="Logo" height="20" width="20" />
        </li>
        <li className="flex items-center gap-[8px]">
          Resources
          <Image src="/vector.png" alt="Logo" height="20" width="20" />
        </li>
        <li className="flex items-center gap-[8px]">
          Prices
          <Image src="/vector.png" alt="Logo" height="20" width="20" />
        </li>
      </ul>
      {/* button  */}
      <div className="flex gap-4 px-2">
        <button className="w-[106px] h-[60px] bg-customYellow rounded-lg text-customBlue font-medium text-[18px] leading-[23px] tracking-[-0.02px]">
          Login
        </button>
        <button className="w-[207px] h-[60px] flex items-center justify-center gap-[10px] bg-customLightBlue rounded-lg font-medium text-[18px] leading-[23px] tracking-[-0.02px]">
          Try Whitepace free <IoIosArrowRoundForward />{" "}
        </button>
      </div>
    </div>
  );
}

export default Header;
