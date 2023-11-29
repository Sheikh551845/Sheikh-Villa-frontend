import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../AuthProvider'
import { HashLoader } from 'react-spinners'
import DashNav from './DashNav'

export default function DashDataLoading({children}) {

    const {loading,AgreementLoading,AllApartmentLoading,AllUserLoading,theme,AllAnnouncementLoading,AllCouponLoading}=useContext(AuthContext)

 

   
   


    if (loading || AgreementLoading || AllApartmentLoading || AllUserLoading || AllAnnouncementLoading||AllCouponLoading) 
    return <div >
    {
      theme =="dark"? <div><DashNav></DashNav> <div  className="flex justify-center items-center h-screen"><HashLoader size={80} color='white'/></div></div>:<div><DashNav></DashNav> <div className="flex justify-center items-center h-screen">
        <HashLoader size={80} color="#36d7b7" /></div>
      </div>
    }
 
</div>

  return (

        children
        
           

       
  )
}
