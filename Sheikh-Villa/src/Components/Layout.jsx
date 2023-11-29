import React, { useContext } from 'react'


import { AuthContext } from './AuthProvider';
import Footer from './Footer';

import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import IsLoading from './Isloading';

export default function Layout() {
    const{theme, setTheme}=useContext(AuthContext);

    return (
      <div>
              <IsLoading>
         <div>
         {
        theme ==="dark"? 
        <div className="bg-black">
        <Navbar></Navbar>
        <div className="min-h-screen"> 
         <Outlet></Outlet>
        </div>
       
        <Footer></Footer>
        
      </div>
      :
      <div className="">
        <Navbar></Navbar>
        <div className="min-h-screen"> 
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
        
      </div>
  
      }
      </div>
      </IsLoading>
      </div>
    
     
     
     
    )
}