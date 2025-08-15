import React from 'react'
import { discover } from '../assets/Data.jsx'

const Discover = () => {
  return (
    <div className='px-40 py-20 bg-[#F7F5F2] w-full '>
        <h1 className='text-4xl font-semibold text-center mt-10'>Discover, learn, thrive with Dropbox</h1>
        <div className='grid grid-cols-3 gap-5 mt-10 max-w-6xl overflow-hidden mx-auto mb-20 h-[520px]'>
            {discover.map((item, index) => (
                <div key={index} className='relative bg-white hover:shadow-lg transition-shadow duration-300 cursor-pointer rounded-2xl flex flex-col'>
                    <img src={item.image} alt={item.title} className='w-96 h-50 object-cover rounded-2xl p-3' />
                    <h3 className='ml-5 font-bold text-[#726C62] mb-3'>{item.subtitle}</h3>
                    <p className='ml-5 font-semibold text-lg mb-5'>{item.title}</p>
                    <p className='ml-5 text-base text-[#928E86] font-medium mb-10'>{item.description}</p>
                    <a href={item.linkUrl} className='absolute bottom-10 left-0 ml-5 text-[#1E1919] font-semibold underline mb-1'>
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