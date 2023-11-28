import React, { useContext } from 'react'
import { AuthContext } from '../AuthProvider'
import { HashLoader } from 'react-spinners'

export default function DashDataLoading({children}) {

    const {loading,AgreementLoading,AllApartmentLoading,AllUserLoading}=useContext(AuthContext)
  return (
    <div>
        {
            loading || AgreementLoading || AllApartmentLoading || AllUserLoading?
            <div  className="flex justify-center items-center h-screen"><HashLoader size={80} color='#36d7b7'/></div>:
            children

        }

      
    </div>
  )
}
