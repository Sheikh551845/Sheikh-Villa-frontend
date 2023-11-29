import React, { useContext } from 'react'
import DashContentFormat from './DashContentFormat'
import { AuthContext } from '../AuthProvider'
import { FaBullhorn } from 'react-icons/fa6'

export default function AnnouncementsCard({Announcement}) {
    const{user}=useContext(AuthContext)
    console.log(Announcement.Date)
    return (

        
      <div className="">
         <DashContentFormat>
      
         
          <div className="card  sm:w-72 md:w-full bg-base-100 shadow-xl h-fit">
    
         
    <div className="card-body">
    <div className='flex justify-between items-center'> <FaBullhorn className="text-2xl font-bold text-green-600"></FaBullhorn>
    <div>Date: {Announcement.Date}</div>
    </div>
      <div className='flex flex-col gap-3 justify-start pt-10 '>
        
       <div>
       <h2 className="text-lg ">
       <span className='font-bold '> Announcement Title:</span>  {Announcement.Title}
      </h2>
       </div>
      <div>
      <p className='text-normal pb-28 p-2 border-2 '>{Announcement.Announcement}</p>
      </div>
      
      </div>
      
  
     
  
     
      
  
     
     
      
  
     
    </div>
  </div>
        
         </DashContentFormat>
        
      </div>
    )
  }
  