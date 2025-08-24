import React from 'react'
import { cardData } from '../assets/Data'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef, useLayoutEffect} from 'react'

gsap.registerPlugin(ScrollTrigger);

const Empower = () => {
  const cardRef = useRef(null);

  useLayoutEffect(()=>{
    const ctx = gsap.context(()=>{
      const tl = gsap.timeline({
        scrollTrigger:{
          trigger:cardRef.current,
          toggleActions: "play none none none",
          start: "top 80%",
          end:"top 50%",
        }
      })
      tl.from(".cardRef-cards",{
        opacity:0,
        duration:1.5,
        ease:"power3.inOut",
      })
    })
    return ()=> ctx.revert()
  },[])


  return (
    <div className='bg-white text-black py-20'>
        <h1 className='text-center font-semibold text-4xl mt-10'>Dropbox empowers across industries</h1>
      <div ref={cardRef} className=" cardRef-cards grid grid-cols-2 gap-6 max-w-6xl mx-auto px-4 py-20 cursor-pointer">
  {cardData.map((card, index) => (
      <div
      key={index}
      className="flex bg-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300"
      >
      <img
        src={card.image}
        alt={card.title}
        className="object-cover w-48 h-auto"
      />
      <div className="p-5 flex flex-col justify-center">
        <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{card.description}</p>
        <a
          href={card.link}
          className="flex items-center text-black font-medium hover:underline"
          >
          {card.buttonText}
          <span className="ml-1">→</span>
        </a>
      </div>
    </div>
  ))}
</div>
</div>
  )
}

export default Empower