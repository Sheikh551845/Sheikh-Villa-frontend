import React from 'react'
import DashNav from './DashNav'
import DashLogo from './DashLogo'
import { Outlet } from 'react-router-dom'

export default function DashboardLayout() {
  return (
    <div>
       
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 ">
            <div className=''>
            <DashNav className=''></DashNav>
            </div>
        
        <div className=' col-span-2 sm:col-span-3 lg:col-span-4 xl:col-span-6 '>
            <Outlet></Outlet>
        </div>
        </div>
      
    </div>
  )
}
