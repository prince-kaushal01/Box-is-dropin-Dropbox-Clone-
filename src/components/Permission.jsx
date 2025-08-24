import { FaArrowRight } from "react-icons/fa6";
import { MdLock } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import {useRef , useLayoutEffect} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
 const landingRef = useRef(null);
 const permissionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".landing-items", {
        duration: 1,
        opacity: 0,
        x: -70,
        stagger: 0.2,
      },"+=1");

      tl.from(".landing-buttons", {
        duration: 1,
        opacity: 0,
        y: 70,
        stagger: 0.1,
      },"-=0.6");

      tl.from(".landing-video", {
        duration: 0.5,
        opacity: 0,
      },"-=0.7");
    }, landingRef);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(()=>{
    const ctx = gsap.context(()=>{
      const tl = gsap.timeline({
        scrollTrigger:{
          trigger:permissionRef.current,
          start:"top 80%",
          end:"top 20%",
          toggleActions: "play none none reverse",
          scrub:true
        }
      })
      tl.from(".text",{
        y:"80",
        opacity:0,
        duration:0.8,
        stagger:0.3,
        ease:"power3.out"
      })
    })
    return ()=> ctx.revert() 
  },[])

  const mouseEnter = (e)=> {
    gsap.to(e.currentTarget.querySelector(".icon"),{
      x:4,
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
    < >
      <div ref={landingRef} className="bg-[#f8f3ec] h-screen w-full flex items-center justify-between px-25 mt-10 gap-10">
        <div className="flex flex-col justify-center w-130 mt-20">
          <h2 className="  font-semibold text-5xl landing-items">Find anything.</h2>
          <h2 className=" font-semibold text-5xl mb-5 landing-items">Protect everything.</h2>
          <p className=" text-[#524a3ed1] text-xl font-normal leading-8 landing-items">
            Find, organize, and protect your work with Dropbox Dash. Now with
            advanced search for video, images, and team members—plus generative
            AI capabilities across even more connected apps.
          </p>
          <div className="flex items-center mt-8 gap-10">
            <div onMouseEnter={mouseEnter} onMouseLeave={mouseleave} className=" relative flex items-center space-x-3 landing-buttons">
              <button className=" px-13 py-6 bg-blue-600 hover:bg-[#0057E5] text-white font-semibold rounded-2xl cursor-pointer ">
                What's new with Dash
              </button>
              <FaArrowRight className="icon absolute top-7 right-3 mr-5 text-white"/>
            </div>
            <div onMouseEnter={mouseEnter} onMouseLeave={mouseleave} className="flex items-center gap-2 font-semibold landing-buttons">
              <button className=" underline font-semibold text-xl cursor-pointer text-black ">
                Try Dropbox free
              </button>
              <FaArrowRight className="icon"/>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-[60%] h-screen landing-video">
          <video
            src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/index/april-2025-launch/hero/dash-multimedia-search-homepage-ui-transparent-1080xauto-v3.webm"
            className="h-full w-full landing-video"
            autoPlay
            muted
            loop
            playsInline
          ></video>
        </div>
      </div>

      {/* {PERMISSION PAGE START} */}
  
      <div className="flex flex-col items-center justify-center h-screen w-full bg-[#f8f3ec]">
        <div ref={permissionRef} className="flex flex-col items-center justify-center w-200 text-center mb-10">
          <div className="text relative flex items-center justify-center mb-3">
            <MdLock className="absolute left-4 top-3.2 text-white items-center" />
            <button className="bg-[#283750] px-6 py-2 rounded-full text-white pl-10">
              Permissions
            </button>
          </div>
          <h2 className="text text-3xl font-bold mb-3">Protect all your content</h2>
          <p className="text text-[#736D63] items-center mb-5 ">
            Dash makes it easy to find files across apps and safeguard sensitive
            content. With AI-powered search and universal access controls, your
            team stays connected, efficient, and secure.
          </p>
          <div onMouseEnter={mouseEnter} onMouseLeave={mouseleave} className=" relative text">
            <button className="px-10 py-3 font-medium bg-transparent border-2 cursor-pointer rounded-2xl pr-20 hover:bg-[#EBEBEB]">
              Learn more
            </button>
            <IoIosArrowRoundForward
              size={30}
              className="icon absolute top-3 right-8"
             
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-screen w-full bg-[#f8f3ec] mb-20">
        <div className="flex items-center justify-center w-full gap-10 mb-10">
          <div className="absolute z-90 left-70 top-400">
            <video
              src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/test/homepageredesign2024/dash-security-transparent-ui-1080x674-v2.webm"
              autoPlay
              muted
              loop
              playsInline
              className="w-160"
            />
          </div>
          <div className="relative">
            <img
              src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/dash-image-1800x2160.png?id=aa947c66-d522-4b18-acce-9849eacf5dba&width=1920&output_type=webp"
              alt="Add image"
              className="w-120 ml-170"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
