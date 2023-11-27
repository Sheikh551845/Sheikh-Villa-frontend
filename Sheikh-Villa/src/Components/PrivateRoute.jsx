import React, { useContext } from 'react'

import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { HashLoader } from 'react-spinners';
import { AuthContext } from './AuthProvider';
import Navbar from './Navbar';

export default function PrivateRoute({children}) {
    const { user, loading ,theme} = useContext(AuthContext);


    
    if (loading) 
    return <div className="flex justify-center items-center h-screen">
    {
      theme =="dark"? <div><Navbar></Navbar><HashLoader size={100} color='white'/></div>:<div><Navbar></Navbar><HashLoader size={100} color="#36d7b7"/></div>
    }
 
</div>
    

    if (!user?.email) {
        toast.error("Please Log In ")
        
        return <Navigate to='/login' />
    }



    return children;
}