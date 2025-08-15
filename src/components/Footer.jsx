import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
    <div className="bg-black h-sxreen flex flex-col text-white py-10 px-40 w-full">
      <div className="flex justify-between gap-10 mb-10">
      <div>
        <h2 className="text-2xl font-semibold mb-8">Dropbox</h2>
        {["Desktop app","Mobile app","Integrations","Features","Solutions","Security","Early access","Templates","Free tools"].map((item, index) => (
          <p key={index} className="hover:underline cursor-pointer text-md mb-4">
            {item}
          </p>
        ))}
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-8">Products</h2>
        {["Plus","Professional","Business","Enterprise","Dash","Reclaim.ai","Dropbox Sign","DocSend","Plans","Product updates"].map((item,index)=>(
          <p key={index} className="hover:underline cursor-pointer text-md mb-4">
            {item}
          </p>
        ))}
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-8">Features</h2>
        {["Send large files","Send long videos","Cloud photo storage","Secure file transfer","Password manager","Cloud backup","Edit PDFs","Electronic signatures","Convert to PDF"].map((item, index) => (
          <p key={index} className="hover:underline cursor-pointer text-md mb-4">
            {item} 
            </p>))}
      </div>
      <div className="">
        <h2 className="text-2xl font-semibold mb-8">Support</h2>
        {[
          "Help center","Contact us","Privacy & terms","Cookie policy", "Cookies & CCPA preferences","AI principles","Sitemap", "Learning resources",
        ].map((item,index)=>(
          <p key={index} className="hover:underline cursor-pointer text-md mb-4">
            {item}
          </p>
        ))}
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-8">Resources</h2>
        {[
          "Blog" , "Events", "Customer stories", "Resources library", "Developers", "Community forums", "Referrals", "Reseller partners", "Integration partners", "Find a partner",
        ].map((item, index) => (
          <p key={index}
          className="hover:underline cursor-pointer text-md mb-4"
          >
            {item}
          </p>
        ))}
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-8">Company</h2>
        {["About us", "Jobs Investor", "relations", "Our impact"].map(
          (item, index) => (
            <p
              key={index}
              className="hover:underline cursor-pointer text-md mb-4"
            >
              {item}
            </p>
          )
        )}
      </div>
      </div>
      <div className="flex gap-5">
        <FaXTwitter size={30}/>
        <FaFacebook size={26}/>
        <FaYoutube size={26}/>
      </div>
      <div className="border border-b-1 border-[#353332] mt-10 w-[150px]">
      </div>
    </div>
    
    </>
  );
};

export default Footer;
