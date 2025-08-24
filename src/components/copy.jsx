import React from 'react'
import Navbar from './components/Navbar'
import Permission from './components/Permission'
import Content from './components/Content'
import Collaboration from './components/Collaboration'
import Security from './components/Security'
import Footer from './components/Footer'
import Empower from './components/Empower'
import Discover from './components/Discover'


const App = () => {
  return (
    <div id="main-container" className='bg-white flex flex-col items-center data-scroll-container'>
      <Navbar />
      <Permission />
      <Content />
      <Collaboration />
      <Security />
      <Empower />
      <Discover />
      <Footer />
    </div>
  )
}

export default App

// Security.jsx

import React from 'react';
import { TbShieldLock } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import Marque from './marque'
import gsap from 'gsap';
import { useRef, useLayoutEffect } from 'react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Security = () => {
 
   const securityref = useRef(null);

 useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: securityref.current,
        scroller: "#main-container",
        start: "top 80%",
        end:"top 50%",
        toggleActions: "play none none reverse", 
        scrub:true,

      }
    });
    tl.from(".security-container",{
      duration: 1.5,
      scale:0.8
    })
    })
    return()=>ctx.revert();
  },[])

  useLayoutEffect(()=>{
    const ctx = gsap.context(()=>{
      const tl = gsap.timeline({defaults: {ease: "power3.inOut"}})
      tl.from(".security-cards",{
        opacity:0,
        x:-100,
        duration:2
      })
    },securityref)
    return ()=> ctx.revert()
  },[])

    const mouseEnter = (e)=> {
    gsap.to(e.currentTarget.querySelector(".icon"),{
      x:8,
      duration:0.3,
      ease:"power3.out",
    })
  }

  const mouseleave = (e) => {
    gsap.to(e.currentTarget.querySelector(".icon"),{
      x:0,
      duration:0.3,
      ease:"power3.inOut"
    })
  }

  return (
    <>
     <div ref={securityref} className="security-container flex flex-col items-center justify-center w-full px-15">
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
            <div onMouseEnter={mouseEnter} onMouseLeave={mouseleave} className="relative flex items-center space-x-3">
              <button className="hover:bg-[#44464A] px-10 py-3 font-medium bg-transparent border-2 rounded-2xl pr-20 cursor-pointer">
                Get started free
              </button>
              <IoIosArrowRoundForward
                size={30}
                className="absolute top-3 right-8 icon"
              />
            </div>
            <div onMouseEnter={mouseEnter} onMouseLeave={mouseleave} className="flex items-center gap-2">
              <button className="underline underline-offset-4 decoration-[#8C8C8C] decoration-1 text-lg font-semibold cursor-pointer text-white">
                Learn more
              </button>
              <FaArrowRight className='icon'/>
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-center w-full gap-10 mb-40 mx-60">
          <div className="security-cards absolute top-215 left-90">
            <img
              src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/security/hero/security-left-1.png?id=a9586e97-cdca-47f1-84f6-8e1b8492c225&output_type=webp"
              alt="Add image"
              className="w-55"
            />
          </div>
          <div className="security-cards z-10 absolute left-95 top-185">
            <img
              src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/security/hero/security-left-2.png?id=c2b49cbb-0530-4d59-83b0-a04e82bb6cd4&output_type=webp"
              className="w-40"
            />
          </div>
          <div className="security-cards z-20 absolute left-130 top-155">
            <img
              src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/security/hero/security-left-3.png?id=add2f4d9-c3c9-4e43-ad3b-9dfbba483c43&output_type=webp"
              className="w-100"
            />
          </div>
          <div className="security-cards relative z-30 ml-120">
            <img
              src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/security/hero/permissions.png?id=89a89ccc-4eb8-4dd9-8cb3-4897f80c7f36&output_type=webp"
              className="w-150"
            />
          </div>
        </div>
        <div className=' flex items-center justify-center w-full'>
          <h2 className='text-[#939391] font-medium text-md'>Trusted by the biggest companies in the world</h2>
        </div>
      <Marque />
      </div>
    </div>
    </>
  )
}

export default Security