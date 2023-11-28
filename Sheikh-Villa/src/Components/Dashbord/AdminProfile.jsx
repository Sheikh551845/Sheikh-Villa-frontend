import React, { useContext } from 'react'
import DashContentFormat from './DashContentFormat'
import { AuthContext } from '../AuthProvider'
import DashDataLoading from './DashDataLoding';

export default function AdminProfile() {
  const{user,AllApartment,AllUser}=useContext(AuthContext)
  const TotalUser = AllUser?.filter(data => data.role== 'user');
  const TotalMember = AllUser?.filter(data => data.role== 'member');
  const TotalRented = AllApartment?.filter(data => data.status=="rented");
  const TotalIdle = AllApartment?.filter(data => data.status=="idle");

  const TotalRentedPercent = ((TotalRented.length)/(AllApartment.length))*100
  const TotalIdlePercent = ((TotalIdle.length)/(AllApartment.length))*100

  return (
    <DashDataLoading>
       <div className="">
       <DashContentFormat>
    
       
        <div className="card  sm:w-72 md:w-full bg-base-100 shadow-xl h-[95vh]">
  
        <figure><img src={user.photoURL} alt="Photo" className='w-full h-full' /></figure>
  <div className="card-body">
    <div className=' border-b border-black
    '>
    <div className='flex flex-wrap gap-3 items-center justify-start '>
    <h2 className="text-sm md:text-lg font-bold">
      Name:
    </h2>
    <p className='text-normal'>{user.displayName}</p>
    </div>
    

    <div className='flex flex-wrap gap-3 items-center justify-start mt-5  mb-20'>
    <h2 className="text-sm md:text-lg font-bold">
      Email:
    </h2>
    <p className='text-sm sm:text-normal'>{user.email}</p>
    </div>
    </div>

    <div className='flex flex-wrap gap-3 items-center justify-start mt-5 mb-2'>
    <h2 className="text-sm md:text-lg font-bold">
    Total Apartments:
    </h2>
    <p className='text-normal'>{AllApartment.length}</p>
    </div>
    <div className='flex flex-wrap gap-3 items-center justify-start mb-2'>
    <h2 className="text-sm md:text-lg font-bold">
    Available Apartments:
    </h2>
    <p className='text-normal'>{TotalIdle.length} ({Math.floor(TotalIdlePercent)}%)</p>
    </div>

    <div className='flex flex-wrap gap-3 items-center justify-start mb-2'>
    <h2 className="text-sm md:text-lg font-bold">
    Rented Apartments:
    </h2>
    <p className='text-normal'>{TotalRented.length} ({Math.floor(TotalRentedPercent)}%)</p>
    </div>
    
    

    <div className='flex flex-wrap gap-3 items-center justify-start mb-2'>
    <h2 className="text-sm md:text-lg font-bold">
    Number of users :
    </h2>
    <p className='text-normal'>{TotalUser.length}</p>
    </div>
    <div className='flex flex-wrap gap-3 items-center justify-start mb-2'>
    <h2 className="text-sm md:text-lg font-bold">
    Number of member :
    </h2>
    <p className='text-normal'>{TotalMember.length}</p>
    </div>
    

   
  </div>
</div>
      
       </DashContentFormat>
      
    </div>
    </DashDataLoading>
   
  )
}
