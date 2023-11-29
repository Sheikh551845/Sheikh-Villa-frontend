import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import CouponCard from './CouponCard'
import DashContentFormat from './Dashbord/DashContentFormat'

export default function Coupons() {
    const{AllCoupon}=useContext(AuthContext)
  return (
    <DashContentFormat>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mx-auto ">
        {
  AllCoupon?.map((Coupon, index) => (
    <CouponCard key={index} Coupon={Coupon}></CouponCard>
 
  ))
  }
      
    </div>
    </DashContentFormat>
   
  )
}
