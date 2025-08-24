import React, {useRef , useLayoutEffect} from 'react'
import { BsPeopleFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

const Collaboration = () => {
const collaborationRef = useRef(null);

useLayoutEffect(()=>{
  const ctx = gsap.context(()=>{
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger:collaborationRef.current,
        toggleActions:"play none none reverse",
        start: "top 50%",
        end:"bottom 80%",
        scrub:true,
      }
    })
    tl.from(".collaboration-item",{
      y:80,
      opacity:0,
      ease:"power3.out",
      duration:1.5,
      stagger:0.3
    })
  })
  return()=> ctx.revert();
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
    <div className="flex flex-col items-center justify-center w-full bg-white">
          <div ref={collaborationRef} className="flex flex-col items-center justify-center w-200 text-center mb-10 py-40">
            <div className="collaboration-item relative flex items-center justify-center mb-3">
              <BsPeopleFill
                size={18}
                className="absolute left-4 top-3.2 text-white items-center"
              />
              <button className="bg-[#9B0032] px-6 py-2 rounded-full text-white pl-10">
                Collaboration
              </button>
            </div>
            <h2 className="collaboration-item text-3xl font-bold mb-5">Instant sharing keeps work flowing</h2>
            <p className="collaboration-item text-[#736D63] items-center mb-10 text-medium text-[18px]">
             Secure links, real-time syncing, and large file transfers keep your team and partners connected so collaboration stays seamless.
            </p>
            <div className="relative flex items-center justify-center gap-10">
                <div onMouseEnter={mouseEnter} onMouseLeave={mouseleave} className=" collaboration-item relative flex items-center space-x-3">
              <button className="px-10 py-3 font-medium bg-transparent border-2 rounded-2xl pr-20 hover:bg-[#EBEBEB]">
                Learn more
              </button>
              <IoIosArrowRoundForward
                size={30}
                className="absolute top-3 right-8 icon"
              />
              </div>
              <div onMouseEnter={mouseEnter} onMouseLeave={mouseleave} className=" collaboration-item flex items-center gap-2">
              <button className="underline underline-offset-2 decoration-[#817E7E] decoration-1 text-lg font-semibold cursor-pointer text-black">
                Get started free
              </button>
              <FaArrowRight className='icon'/>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full gap-10 mb-40 mx-60">
            <div className="absolute z-90 left-70 top-1080">
          <img src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/index/april-2025-launch/feature-highlight/pv-feature3-1280x800.png?id=a149b360-c2e6-4cbb-aee0-441f915e1603&width=1280&output_type=webp" className="w-170"/>
          </div>
          <div className="relative ml-170">
            <img src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/index/april-2025-launch/feature-highlight/backasset-feature3-900-1200.png?id=77870628-9827-403f-911d-cb63c32d83aa&output_type=webp "alt="Add image" className="w-120 "></img>
          </div>
          </div>
        </div>
  )
}

export default Collaboration