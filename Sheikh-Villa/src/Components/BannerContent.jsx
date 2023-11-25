import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';


export default function BannerContent(src) {
  const navigate=useNavigate()

  const handleClick=()=>
  {
    navigate("/")
  }

  console.log(src.src)
  return (
    <div>
     <div className="hero min-h-screen w-screen" style={{ backgroundImage: `url(${src.src})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }} // Initial state
      animate={{ opacity: 1, scale: 1 }} // Animation state
      exit={{ opacity: 0, scale: 0.8 }} // Exit state (optional)
    >
       <h1 className="mb-5 text-3xl md:text-5xl font-bold"> SHEIKH VILLA</h1>
      <p className="mb-5 text-sm md:text-2xl">Welcome to our SHEIKH VILLA, explore all our services through online! </p>
    </motion.div>
    <motion.button className="btn bg-black text-white" onClick={handleClick} whileHover={{ scale: 1.1 }}> Get Started</motion.button>
     
    </div>
  </div>
</div>

    </div>

  )
}
