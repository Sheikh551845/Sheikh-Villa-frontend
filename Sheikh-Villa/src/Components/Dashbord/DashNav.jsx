import React, { useContext, useState } from 'react'
import { FaBuildingColumns, FaBullhorn, FaFlag } from 'react-icons/fa6';
import { FaHome, FaUsersCog } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import { RiCoupon3Line } from "react-icons/ri";
import DashDataLoading from './DashDataLoding';

export default function DashNav() {
    const { user,AllUser}=useContext(AuthContext)
    const navigate=useNavigate()
  
    const CurrentLogged = AllUser?.find(data => data.email== user.email);

    console.log(CurrentLogged)

    return (
        <DashDataLoading>
              <div className='fixed mr-2'>
           
           <div id="Main" className=" xl:rounded-r bg-black bg-opacity-80 w-fit  h-screen ">
           <div className='flex flex-col justify-between h-full'>
               <div className=''>
               <div className="mt-3 md:mt-6 flex flex-col justify-start items-center   w-full border-white border-b pb-5 mb-5 md:mb-10">
                  
                  <button className="flex justify-center items-center space-x-2 md:space-x-6 w-full  focus:outline-none  focus:text-indigo-400  text-white rounded   " onClick={()=>navigate("/")}>
                   <FaHome className="text-[12px] md:text-lg lg:text-lg "/>
                       <p className="leading-4 text-[12px] md:text-lg lg:text-lg">Home</p>
                   </button>
                   <div className="divide-white"></div> 
                   
                  
               </div>
               {
                   CurrentLogged?.role=='user'&&
                   <div className="mt-3 flex flex-col justify-start items-center  pl-4 w-full pb-5 gap-4">
                  
                   <button className="flex justify-start items-center w-full  space-x-2 md:space-x-6 focus:outline-none text-white focus:text-indigo-400   rounded " onClick={()=>navigate("/Dashboard/UserProfile")}>
                          <FaUser className="text-[12px] md:text-lg lg:text-lg "></FaUser>
                           <p className="leading-4 text-[12px] md:text-lg lg:text-lg">Profile</p>
                       </button>
   
   
                       <button className="flex justify-start items-center w-full  space-x-2 md:space-x-6 focus:outline-none text-white focus:text-indigo-400   rounded "  onClick={()=>navigate("/Dashboard/Announcements")}>
                          <FaBullhorn className="text-[12px] md:text-lg lg:text-lg "></FaBullhorn>
                           <p className="leading-4 text-[12px] md:text-lg lg:text-lg">Announcements</p>
                       </button>
                       
                      
                   </div>
               }

{
                   CurrentLogged?.role=='admin'&&
                   <div className="mt-3 flex flex-col justify-start items-center  pl-4 w-full pb-5 gap-4">
                  
                   <button className="flex justify-start items-center w-full  space-x-1 md:space-x-3 focus:outline-none text-white focus:text-indigo-400   rounded " onClick={()=>navigate("/Dashboard/AdminProfile")}>
                          <FaUser className="text-[12px] md:text-lg lg:text-lg "></FaUser>
                           <p className="leading-4 text-[12px] md:text-lg lg:text-lg">Profile</p>
                       </button>
                       <button className="flex justify-start items-center w-full  space-x-1 md:space-x-3 focus:outline-none text-white focus:text-indigo-400   rounded "  onClick={()=>navigate("/Dashboard/Announcements")}>
                          <FaUsersCog className="text-[12px] md:text-lg lg:text-lg "></FaUsersCog>
                           <p className="leading-4 text-[12px] md:text-lg lg:text-lg">Manage Members</p>
                       </button>
   
   
                       <button className="flex justify-start items-center w-full  space-x-1 md:space-x-3 focus:outline-none text-white focus:text-indigo-400   rounded "  onClick={()=>navigate("/Dashboard/Announcements")}>
                          <FaBullhorn className="text-[12px] md:text-lg lg:text-lg "></FaBullhorn>
                           <p className="leading-4 text-[12px] md:text-lg lg:text-lg">Make Announcement</p>
                       </button>

                       <button className="flex justify-start items-center w-full  space-x-1 md:space-x-3 focus:outline-none text-white focus:text-indigo-400   rounded "  onClick={()=>navigate("/Dashboard/Announcements")}>
                          <FaFlag className="text-[12px] md:text-lg lg:text-lg "></FaFlag>
                           <p className="leading-4 text-[12px] md:text-lg lg:text-lg">Agreement Requests</p>
                       </button>

                       <button className="flex justify-start items-center w-full  space-x-1 md:space-x-3 focus:outline-none text-white focus:text-indigo-400   rounded "  onClick={()=>navigate("/Dashboard/Announcements")}>
                          <RiCoupon3Line className="text-[12px] md:text-lg lg:text-lg "></RiCoupon3Line>
                           <p className="leading-4 text-[12px] md:text-lg lg:text-lg">Manage Coupons
</p>
                       </button>
                       
                      
                   </div>
               }
             
               
               </div>
               

              
               <div className="flex flex-col justify-between items-center h-fit pb-6   px-6  w-full    mt-3 md:mt-10 mb-5 md:mb-3 border-gray-400 border-t pt-2 ">
                   
                   
                    
                       <div className="flex justify-center items-center  space-x-2 flex-wrap flex-col md:flex-row">
                           <div>
                               <img className="rounded-full w-12 h-12" src={user.photoURL} alt="avatar" />
                           </div>
                           <div className="flex justify-start flex-col items-start">
                               <p className="cursor-pointer text-[10px] md:text-lg leading-5 text-white">{user.displayName}</p>
                               <p className="cursor-pointer text-[8px] md:text-sm leading-3 text-gray-300">{user.email}</p>
                           </div>
                       </div>

                           
                      
                
               </div>
               </div>
           </div>
       </div>
        </DashDataLoading>
      
    );
}
