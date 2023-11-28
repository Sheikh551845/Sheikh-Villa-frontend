import React, { useContext } from 'react'
import DashContentFormat from './DashContentFormat'
import { AuthContext } from '../AuthProvider'
import { FaBullhorn } from 'react-icons/fa6'

export default function AnnouncementsCard() {
    const{user}=useContext(AuthContext)
    return (

        
      <div className="">
         <DashContentFormat>
      
         
          <div className="card  sm:w-72 md:w-full bg-base-100 shadow-xl h-fit">
    
         
    <div className="card-body">
    <div> <FaBullhorn className="text-2xl font-bold"></FaBullhorn></div>
      <div className='flex flex-wrap gap-3 items-center justify-start pt-10 '>
        
       
      <h2 className="text-lg font-bold">
        Announcement:
      </h2>
      <p className='text-normal pb-32 pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, sed tenetur repellendus sequi similique, praesentium fugit esse optio, voluptatibus commodi earum maiores. Odio suscipit ex, voluptates reprehenderit quod temporibus asperiores.</p>
      </div>
      
  
     
  
     
      
  
     
     
      
  
     
    </div>
  </div>
        
         </DashContentFormat>
        
      </div>
    )
  }
  