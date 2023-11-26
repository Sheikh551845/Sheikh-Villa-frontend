import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';


export default function BannerContent(src) {
  const navigate=useNavigate()

  const handleClick=()=>
  {
    navigate("/Apartment")
  }

  
  return (
    <div className='w-fit'>
     <div className="hero min-h-screen w-screen" style={{ backgroundImage: `url(${src.src})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }} // Initial state
      animate={{ opacity: 1, scale: 1.2 }} // Animation state
      exit={{ opacity: 0, scale: 0.8 }} // Exit state (optional)
    >
       <h1 className="mb-5 text-2xl md:text-5xl font-bold"> SHEIKH VILLA</h1>
      <p className="mb-5 text-[12px] md:text-2xl w-[250px] md:w-full">Welcome to our SHEIKH VILLA, explore all our services through online! </p>
    </motion.div>
    <motion.button className="bg-opacity-50 p-3 rounded-lg text-xs md:text-lg bg-black text-white mt-4" onClick={handleClick} whileHover={{ scale: 1.5 }}> Get Started</motion.button>
     
    </div>
  </div>
</div>

    </div>

  )
}
