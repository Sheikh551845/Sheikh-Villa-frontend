import React from 'react'
import DashNav from './DashNav'
import DashLogo from './DashLogo'
import { Outlet } from 'react-router-dom'

export default function DashboardLayout() {
  return (
    <div>
        <DashLogo></DashLogo>
        <div className="grid grid-cols-6">
            <div>
            <DashNav></DashNav>
            </div>
        
        <div className='col-span-5 bg-yellow-300'>
            <Outlet></Outlet>
        </div>
        </div>
      
    </div>
  )
}
