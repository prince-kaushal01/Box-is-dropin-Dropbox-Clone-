import { PiGlobeBold } from "react-icons/pi";
import DropboxLogo from "/Dropbox-logo.png";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Navbar = () => {
  const  navRef = useRef()
  useLayoutEffect(()=>{
    const ctx = gsap.context(()=>{
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".nav-item",{
        duration: 1,
        y:-50,
        opacity:0,
        stagger:0.1,
      })
    },  navRef)
    return()=> ctx.revert();
  }, []);

  const leftLinks = ["Products", "Solutions", "Enterprise", "Pricing"];
  const rightLinks = ["Contact Sales", "Get app", "Sign up", "Log in"];

  return (
    <nav
    ref={navRef}
      className="bg-white w-full fixed top-0 shadow-sm z-[999] px-6 py-4 flex items-center justify-between text-black"
    >
      {/* Left Section */}
      <div className="flex items-center gap-10 font-semibold">
        <img src={DropboxLogo} alt="Dropbox" className="h-12 w-12 nav-item" />
        <h3 className="text-2xl font-bold -ml-6 nav-item cursor-pointer">Dropbox</h3>
        {leftLinks.map((text) => (
          <p key={text} className="hover:text-blue-700 transition-colors nav-item cursor-pointer">
            {text}
          </p>
        ))}
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6 font-semibold ">
        <span className="nav-item">
          <PiGlobeBold size={20} className="text-black" />
        </span>
        {rightLinks.map((text) => (
          <p key={text} className="hover:text-blue-700 transition-colors cursor-pointer nav-item">
            {text}
          </p>
        ))}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl ml-4 text-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer nav-item">
          Get started
        </button>
      </div>
      
    </nav>
  );
};

export default Navbar;
