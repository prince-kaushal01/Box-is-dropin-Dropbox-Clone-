import React from 'react'
import {motion} from 'framer-motion'
import img1 from "../assets/figma.svg"
import img2 from "../assets/greenhouse.svg"
import img3 from "../assets/hydro.svg"
import img4 from "../assets/jamf.svg"
import img5 from "../assets/marykay.svg"
import img6 from "../assets/mclaren.svg"
import img7 from "../assets/sundance.svg"
import img8 from "../assets/wag.svg"


const marque = () => {
  return (
    <motion.div 
    initial={{x : 0}}
    animate={{x : "-100%"}}
    transition={{duration : 45 , ease : 'linear', repeat: Infinity }}
    className='flex gap-20 mb-20'>
      <img src={img1} alt="" className='h-50'/>
      <img src={img2} alt="" className='h-50'/>
      <img src={img3} alt="" className='h-50'/>
      <img src={img4} alt="" className='h-50'/>
      <img src={img5} alt="" className='h-50'/>
      <img src={img6} alt="" className='h-50'/>
      <img src={img7} alt="" className='h-50'/>
      <img src={img8} alt="" className='h-50'/>
      <img src={img1} alt="" className='h-50'/>
      <img src={img2} alt="" className='h-50'/>
      <img src={img3} alt="" className='h-50'/>
      <img src={img4} alt="" className='h-50'/>
      <img src={img5} alt="" className='h-50'/>
      <img src={img6} alt="" className='h-50'/>
      <img src={img7} alt="" className='h-50'/>
      <img src={img8} alt="" className='h-50'/>
    </motion.div>
  )
}

export default marque