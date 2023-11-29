import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../AuthProvider'


export default function AdminPrivate({children}) {

    const {user,AllUser}=useContext(AuthContext)

    const CurrentUser = AllUser?.find(data => data.email== user.email);

 

   
   


    if (CurrentUser.role!='admin') {
    return (
        <div className='text-2xl flex  flex-col gap-4 justify-center items-center my-auto font-bold h-screen'>
        <p>Hello {CurrentUser.name}</p>
        <p>Your is panel{CurrentUser.role}  </p>
        <p>You can't access others panel! </p>
  </div>
    )
    
    }
 

  
     


  return (

        children
        )
}
