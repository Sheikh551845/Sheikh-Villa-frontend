import React, { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { RiCoupon3Line } from "react-icons/ri";


export default function CouponCard(Coupon) {
 
  
  

  return (
    <div className='col-span-1 cursor-pointer group '>
      <div className='flex flex-col gap-2 w-full bg-black bg-opacity-60 rounded-lg '>
        <div
          className='
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          '
        >
          <img
            className='
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            '
            src="https://i.ibb.co/MsNbSfv/front-1.png"
            alt='Room'
          />

          
          <motion.div
            className='
            absolute
            top-3
            right-3
            flex
            gap-2
            justify-end
            items-center
          '
          whileHover={{ scale: 1.1 }}
          >
            <div>
            <RiCoupon3Line className="text-5xl text-green-500 "></RiCoupon3Line>
            </div>
             
             <div>
             <input className='bg-yellow-500 rounded-lg text-black text-lg w-fit p-3 text-center' placeholder={Coupon.Coupon.couponCode} value={Coupon.Coupon.CouponCode}  readOnly/>
             </div>
       
          </motion.div>

         

        </div>
        <div className='p-4'>
          <div className='flex gap-2  justify-center items-center mb-2 border border-1 border-white'>

            <p className=' text-lg font-bold text-white'>{Coupon.Coupon.apartment_no}</p>
          </div>
          <div className='flex gap-2  items-center'>
            <p className='font-semibold text-lg text-white'>Discount :</p>
            <p className=' text-lg text-green-300'>{Coupon.Coupon.Percentage}%</p></div>

          <div className='flex gap-2  items-center'>
            <p className='font-semibold text-lg text-white'>Description :</p>
            <p className=' text-lg text-blue-300'>{Coupon.Coupon.Description}</p>
          </div>

          <div className='flex gap-2  items-center'>
            <p className='font-semibold text-lg text-white'>Coupon Code :</p>
            <p className=' text-lg text-green-500'>{Coupon.Coupon.couponCode}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
