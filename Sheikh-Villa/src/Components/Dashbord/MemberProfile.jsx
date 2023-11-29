import React, { useContext } from 'react'
import DashContentFormat from './DashContentFormat'
import { AuthContext } from '../AuthProvider'

export default function MemberProfile() {
  const{user,AllAgreement,AllUser}=useContext(AuthContext)

  const AgreementData = AllAgreement?.filter(data => data.status== 'accepted' &&  data.UserEmail== user.email);


  return (
    <div className="">
       <DashContentFormat>
    
       
        <div className="card  sm:w-72 md:w-full bg-base-100 shadow-xl h-[95vh]">
  
        <figure><img src={user.photoURL} alt="Photo" className='w-full h-full' /></figure>
  <div className="card-body">
    <div className=' border-b border-black
    '>
    <div className='flex flex-wrap gap-3 items-center justify-start '>
    <h2 className="text-lg font-bold">
      Name:
    </h2>
    <p className='text-normal'>{user.displayName}</p>
    </div>
    

    <div className='flex flex-wrap gap-3 items-center justify-start mt-5  mb-20'>
    <h2 className="text-lg font-bold">
      Email:
    </h2>
    <p className='text-sm sm:text-normal'>{user.email}</p>
    </div>
    </div>

    <div className='flex flex-wrap gap-3 items-center justify-start mt-10 '>
    <h2 className="text-lg font-bold">
    Agreement accept date:
    </h2>
    <div className='flex gap-1 flex-wrap'>
    {
  AgreementData?.map((Agreement, index) => (
    <p className='text-normal'key={index} >{Agreement.Accept_date},</p>

    
  ))
  }
    </div>
   
    
    </div>
    
    <div className='flex flex-wrap gap-3 items-center justify-start mt-5 '>
    <h2 className="text-lg font-bold">
    Apartment :
    </h2>
    <div className='flex gap-1 flex-wrap'>
    {
  AgreementData?.map((Agreement, index) => (
    <p className='text-normal'key={index} >{Agreement.apartment_no},</p>

    
  ))
  }
    </div>
   
    </div>
    

    <div className='flex flex-wrap gap-3 items-center justify-start mt-5 '>
    <h2 className="text-lg font-bold">
    Floor :
    </h2>
    <div className='flex gap-1 flex-wrap'>
    {
  AgreementData?.map((Agreement, index) => (
    <p className='text-normal'key={index} >{Agreement.floor_no},</p>

    
  ))
  }
    </div>
    
    </div>
    <div className='flex flex-wrap gap-3 items-center justify-start mt-5 '>
    <h2 className="text-lg font-bold">
    Block :
    </h2>
    <div className='flex gap-1 flex-wrap'>
    {
  AgreementData?.map((Agreement, index) => (
    <p className='text-normal'key={index} >{Agreement.block_name},</p>

    
  ))
  }
    </div>
    
    </div>
    

   
  </div>
</div>
      
       </DashContentFormat>
      
    </div>
  )
}
