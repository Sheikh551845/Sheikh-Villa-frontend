import React, { useContext } from 'react'
import UserProfile from './UserProfile'
import { AuthContext } from '../AuthProvider';
import DashDataLoading from './DashDataLoding';
import AdminProfile from './AdminProfile';
import MemberProfile from './MemberProfile';

export default function DashHome() {

  const { user,AllUser}=useContext(AuthContext)


  const CurrentLogged = AllUser?.find(data => data.email== user.email);
  

  return (
    <DashDataLoading>
      <div className='text-2xl flex  flex-col gap-4 justify-center items-center my-auto font-bold h-screen'>
            <p>Hello {CurrentLogged.name}</p>
            <p>Well come to {CurrentLogged.role} panel </p>
      </div>
     
    </DashDataLoading>
   
  )
}
