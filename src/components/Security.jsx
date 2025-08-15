import React from 'react'
import { TbShieldLock } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import Marque from './marque';


const copy = () => {
  return (
    <div>
         <div className="flex flex-col items-center justify-center w-full px-15">
      <div className=" overflow-x-hidden flex flex-col items-center justify-center w-full rounded-2xl text-center mb-10 bg-black text-white">
        <div className="flex flex-col items-center justify-center w-200 text-center mb-10 py-40">
          <div className="flex items-center justify-center mb-3">
            <TbShieldLock size={45} className="text-white items-center" />
          </div>
          <h2 className="text-3xl font-bold mb-5">
            Security never comes second
          </h2>
          <p className="text-[#9F9F9F] items-center mb-10 text-medium text-[18px]">
            From industry-leading encryption and tamper-proof documents to
            version history and recovery, Dropbox keeps your intellectual
            property safe and never sells or shares your data.
          </p>
          <div className="relative flex items-center justify-center gap-10">
            <div className="relative flex items-center space-x-3">
              <button className="px-10 py-3 font-medium bg-transparent border-2 rounded-2xl pr-20">
                Get started free
              </button>
              <IoIosArrowRoundForward
                size={30}
                className="absolute top-3 right-8"
              />
            </div>
            <div className="flex items-center gap-2">
              <button className="underline underline-offset-4 decoration-[#8C8C8C] decoration-1 text-lg font-semibold cursor-pointer text-white">
                Learn more
              </button>
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full gap-10 mb-40 mx-60">
          <div className="absolute top-1480 left-70">
            <img
              src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/security/hero/security-left-1.png?id=a9586e97-cdca-47f1-84f6-8e1b8492c225&output_type=webp"
              alt="Add image"
              className="w-55"
            />
          </div>
          <div className="z-10 absolute left-75 top-1450">
            <img
              src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/security/hero/security-left-2.png?id=c2b49cbb-0530-4d59-83b0-a04e82bb6cd4&output_type=webp"
              className="w-40"
            />
          </div>
          <div className="z-20 absolute left-110 top-1418">
            <img
              src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/security/hero/security-left-3.png?id=add2f4d9-c3c9-4e43-ad3b-9dfbba483c43&output_type=webp"
              className="w-100"
            />
          </div>
          <div className="z-30 relative ml-100">
            <img
              src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/security/hero/permissions.png?id=89a89ccc-4eb8-4dd9-8cb3-4897f80c7f36&output_type=webp"
              className="w-150"
            />
          </div>
        </div>
        <div className='flex items-center justify-center w-full mb-'>
          <h2 className='text-[#939391] font-medium text-md'>Trusted by the biggest companies in the world</h2>
        </div>
      <Marque />
      </div>
    </div>
    </div>
  )
}

export default copy