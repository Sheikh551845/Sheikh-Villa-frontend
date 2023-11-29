import React from 'react'
import Banner from '../Components/Banner'
import ComponentTitle from '../Components/ComponentTitle'
import AboutUs from '../Components/AboutUs'
import Offer from '../Components/Offer'
import Location from '../Components/Location'
import Coupons from '../Components/Coupons'

export default function Home() {
  return (
    <div>
     <Banner></Banner>
     <div className="w-full "> 
     <ComponentTitle Title={"About SHEIKH VILLA"}></ComponentTitle>
     </div>
     <div className="w-full ">
     <AboutUs></AboutUs>
     </div>
     
     <div className="w-full "> 
     <ComponentTitle Title={"Our Location"}></ComponentTitle>
     </div>

     <div className="w-full "> 
     <ComponentTitle Title={"Offers"}></ComponentTitle>
     <Coupons></Coupons>
     </div>

     <div className="w-full ">
    <Location></Location>
    </div>

   

    
    </div>
  )
}
