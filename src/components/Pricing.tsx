import React from "react";
import { LuCheckCircle } from "react-icons/lu";

function Pricing() {
  return (
    <div className="flex flex-col items-center w-full justify-center h-[1100px] bg-white text-black p-6">
      <h1 className="font-bold text-black text-4xl text-center md:text-[72px] leading-tight md:leading-[87.14px] tracking-tight mb-8">
        Choose
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
          Your Plan
        </span>
      </h1>
      <p className="font-normal text-black text-center text-lg md:text-[18px] max-w-4xl leading-[30px] tracking-[0.02px] mb-20">
  Whether you want to get organized, keep your personal life on track, or
  boost workplace productivity, Evernote has the right plan for you.
</p>


      <div className="flex flex-col md:flex-row justify-center gap-6 ">
        {/* Free Plan Card */}
        <div className="bg-white w-[350px] h-[550px] p-6 py-10 mt-10 rounded-lg border border-customYellow flex flex-col items-center shadow-lg">
        <div className="flex flex-col items-start gap-4 mb-6">
            <p className="font-semibold text-black text-lg">Free</p>
            <h4 className="font-bold text-black text-4xl tracking-tight">$0</h4>
            <p className="font-medium text-black text-center mt-2">
              Manage your team and boost productivity
            </p>
          </div>
          <div className="flex flex-col items-start gap-6 mb-6">
            <p className="font-normal text-black text-sm flex items-center">
              <LuCheckCircle className="text-customYellow mr-2" size={18} /> Sync unlimited devices
            </p>
            <p className="font-normal text-black text-sm flex items-center">
              <LuCheckCircle className="text-customYellow mr-2" size={18} /> 10 GB monthly uploads
            </p>
            <p className="font-normal text-black text-sm flex items-center">
              <LuCheckCircle className="text-customYellow mr-2" size={18} /> 200 MB max. note size
            </p>
            <p className="font-normal text-black text-sm flex items-center">
              <LuCheckCircle className="text-customYellow mr-2" size={22} /> Customize Home dashboard and access extra widgets
            </p>
            <p className="font-normal text-black text-sm flex items-center">
              <LuCheckCircle className="text-customYellow mr-2" size={18} /> Connect primary Google Calendar account
            </p>
            <p className="font-normal text-black text-sm flex items-center">
              <LuCheckCircle className="text-customYellow mr-2" size={22} /> Add due dates, reminders, and notifications to your tasks
            </p>
          </div>
          <button className="w-[90%] h-[60px] text-black bg-white border border-customYellow rounded-lg hover:bg-customYellow hover:text-white transition duration-300">
            Get Started
          </button>
        </div>

        {/* Personal Plan Card */}
        <div className="bg-customBlue w-[350px] h-[650px] p-6 py-20 rounded-lg flex flex-col items-center shadow-lg">
        <div className="flex flex-col items-start gap-4 mb-6">
            <p className="font-semibold text-white text-lg">Personal</p>
            <h4 className="font-bold text-customYellow text-4xl tracking-tight">$11.99</h4>
            <p className="font-medium text-white text-center mt-2">
            Manage your team and boost productivity
            </p>
          </div>
          <div className="flex flex-col items-start gap-6 mb-6 text-left w-full">
            <p className="font-normal text-white text-sm flex items-center">
              <LuCheckCircle className="text-customYellow mr-2" size={18} /> Sync unlimited devices
            </p>
            <p className="font-normal text-white text-sm flex items-center">
              <LuCheckCircle className="text-customYellow mr-2" size={18} /> 10 GB monthly uploads
            </p>
            <p className="font-normal text-white text-sm flex items-center">
              <LuCheckCircle className="text-customYellow mr-2" size={18} /> 200 MB max. note size
            </p>
            <p className="font-normal text-white text-sm flex items-center">
              <LuCheckCircle className="text-customYellow mr-2" size={22} /> Customize Home dashboard and access extra widgets
            </p>
            <p className="font-normal text-white text-sm flex items-center">
              <LuCheckCircle className="text-customYellow mr-2" size={18} /> Connect primary Google Calendar account
            </p>
            <p className="font-normal text-white text-sm flex items-center">
              <LuCheckCircle className="text-customYellow mr-2" size={22} /> Add due dates, reminders, and notifications to your tasks
            </p>
          </div>
          <button className="w-[90%] h-[60px] text-white bg-customLightBlue rounded-lg hover:bg-customYellow hover:text-black transition duration-300">
            Get Started
          </button>
        </div>

        {/* Organization Plan Card */}
        <div className="bg-white w-[350px] h-[550px] p-6 py-10 mt-10 rounded-lg border border-customYellow flex flex-col items-center shadow-lg">
          <div className="flex flex-col items-start gap-4 mb-6">
            <p className="font-semibold text-black text-lg">Organization</p>
            <h4 className="font-bold text-black text-4xl tracking-tight">$49.99</h4>
            <p className="font-medium text-black text-center mt-2">
              Manage your team and boost productivity
            </p>
          </div>
          <div className="flex flex-col items-start gap-6 mb-6 text-left w-full">
            <p className="font-normal text-black text-sm flex items-center">
              <LuCheckCircle className="text-customYellow mr-2" size={18} /> Sync unlimited devices
            </p>
            <p className="font-normal text-black text-sm flex items-center">
              <LuCheckCircle className="text-customYellow mr-2" size={18} /> 10 GB monthly uploads
            </p>
            <p className="font-normal text-black text-sm flex items-center">
              <LuCheckCircle className="text-customYellow mr-2" size={18} /> 200 MB max. note size
            </p>
            <p className="font-normal text-black text-sm flex items-center">
              <LuCheckCircle className="text-customYellow mr-2" size={22} /> Customize Home dashboard and access extra widgets
            </p>
            <p className="font-normal text-black text-sm flex items-center">
              <LuCheckCircle className="text-customYellow mr-2" size={18} /> Connect primary Google Calendar account
            </p>
            <p className="font-normal text-black text-sm flex items-center">
              <LuCheckCircle className="text-customYellow mr-2" size={22} /> Add due dates, reminders, and notifications to your tasks
            </p>
          </div>
          <button className="w-[90%] h-[60px] text-black bg-white border border-customYellow rounded-lg hover:bg-customYellow hover:text-white transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
