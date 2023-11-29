import React, { useContext } from 'react'

import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { HashLoader } from 'react-spinners';
import { AuthContext } from './AuthProvider';
import Navbar from './Navbar';
import Spinner from './Spinner';

export default function IsLoading({children}) {
    const { loading, AgreementLoading ,AllApartmentLoading,AllUserLoading,AllAnnouncementLoading} = useContext(AuthContext);


    
    if (loading || AgreementLoading || AllApartmentLoading || AllUserLoading || AllAnnouncementLoading) 
    {
    return(
    <div><Navbar></Navbar> <Spinner></Spinner></div>
    )
      
    }
 

    

   



    return( children) ;
}