import React from 'react'
import DashNav from './DashNav'
import DashLogo from './DashLogo'
import { Outlet } from 'react-router-dom'
import DashDataLoading from './DashDataLoding'

export default function DashboardLayout() {
  return (

    <div>
       
        <div className=" w-full grid grid-cols-5 xs:grid-cols-6 sm:grid-cols-6 lg:grid-cols-12 xl:grid-cols-14   ">
            <div className='  col-span-2 xs:col-span-2 sm:col-span-2 lg:col-span-3 xl:col-span-2'>
            <DashNav className=''></DashNav>
            </div>
        <DashDataLoading>
        <div className='   col-span-3 xs:col-span-4 sm:col-span-4 lg:col-span-9 xl:col-span-8 '>
            <Outlet></Outlet>
        </div>
        
        </DashDataLoading>
       
        </div>
      
    </div>
  )
}
