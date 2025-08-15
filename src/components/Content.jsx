import React from "react";
import { FaRegFolder } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";

const Content = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center w-full bg-white">
      <div className="flex flex-col items-center justify-center w-200 text-center mb-10 py-40">
        <div className="relative flex items-center justify-center mb-3">
          <FaRegFolder
            size={18}
            className="absolute left-4 top-3.2 text-white items-center"
          />
          <button className="bg-[#BE4B0A] px-6 py-2 rounded-full text-white pl-10">
            Content managment
          </button>
        </div>
        <h2 className="text-3xl font-bold mb-3">Stay organized and on track</h2>
        <p className="text-[#736D63] items-center mb-5 text-medium text-[18px]">
          Smart organization and suggestions, natural language search, and
          seamless integrations mean everything is easy to find and intuitive to
          manage—all within Dropbox cloud storage, so your team can focus on
          their work.
        </p>
        <div className="relative flex items-center justify-center gap-10">
            <div className="relative flex items-center space-x-3">
          <button className="px-10 py-3 font-medium bg-transparent border-2 rounded-2xl pr-20">
            Learn more
          </button>
          <IoIosArrowRoundForward
            size={30}
            className="absolute top-3 right-8"
          />
          </div>
          <div className="flex items-center gap-2">
          <button className="underline underline-offset-2 decoration-[#817E7E] decoration-1 text-lg font-semibold cursor-pointer text-black">
            Get started free
          </button>
          <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full gap-10 mb-20 mx-60">
        <div className="absolute z-90 left-70 top-745">
      <img src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/index/april-2025-launch/feature-highlight/pv-feature2-1280x800.png?id=d0e99d43-f243-4a0c-83b9-b7840b017288&width=1280&output_type=webp" className="w-170"/>
      </div>
      <div className="relative ml-170">
        <img src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/index/april-2025-launch/feature-highlight/backasset-feature2-900-1200.png?id=72ec06b3-115c-4ad5-8f8a-9c9345094f93&output_type=webp" alt="Add image" className="w-120 "></img>
      </div>
      </div>
    </div>
    </>
  );
};

export default Content;
