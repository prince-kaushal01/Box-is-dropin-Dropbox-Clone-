import React, { useLayoutEffect, useRef } from 'react'
import { discover } from '../assets/Data.jsx'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

const Discover = () => {
    const discoverRef = useRef(null)

    useLayoutEffect(()=>{
        const ctx = gsap.context(()=>{
            const tl = gsap.timeline({
                scrollTrigger:{
                    trigger:discoverRef.current,
                    toggleActions:"play none none none",
                    start:"top 80%",
                    end:"top 40%",
                }
            })
            tl.from(".discover-cards",{
                opacity:0,
                duration:2,
                ease:"power3.out"
            })
        })
        return()=> ctx.revert()
    },[])
  return (
    <div className='px-40 py-20 bg-[#F7F5F2] w-full '>
        <h1 className='text-4xl font-semibold text-center mt-10 mb-20'>Discover, learn, thrive with Dropbox</h1>
        <div ref={discoverRef} className='discover-cards grid grid-cols-3 gap-5 mt-10 max-w-6xl overflow-hidden mx-auto mb-20 h-[520px]'>
            {discover.map((item, index) => (
                <div key={index} className='relative bg-white hover:shadow-2xl transition-shadow duration-300 cursor-pointer rounded-2xl flex flex-col'>
                    <img src={item.image} alt={item.title} className='w-96 h-50 object-cover rounded-2xl p-3' />
                    <h3 className='ml-5 font-bold text-[#726C62] mb-3'>{item.subtitle}</h3>
                    <p className='m-5 font-semibold text-[15px]'>{item.title}</p>
                    <p className='ml-5 mr-3 text-base text-[#928E86] font-medium mb-10'>{item.description}</p>
                    <a href={item.linkUrl} className='absolute bottom-10 left-1 ml-5 text-[#1E1919] font-semibold underline mb-1'>
                        {item.linkText}
                    </a>
                </div>
            ))}
        </div>
        <h3 className='text-center text-blue-600 text-lg cursor-pointer mb-40'>View more resources</h3>
        <div className=' text-lg max-w-3xl mx-auto flex items-center justify-center mb-10'>
            <p className='ml-5'>Please note: The products or features described may not be released yet. The decision to purchase our services should be made based on features that are currently available.</p>
        </div>
    </div>
  )
}

export default Discover