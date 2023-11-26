import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider';

export default function  (Title) {
    const{theme}=useContext(AuthContext);
  return (
    <div className="my-3 max-w-fit mx-auto">
       {
        theme ==="dark"? 
        <div>
            <div className="divider"></div> 
              <p className="text-ld md:text-2xl font-bold text-white ">~~~{Title.Title}~~~</p>
            <div className="divider"></div> 

        </div>
        :
        <div>
             <div className="divider"></div> 
              <p className="text-ld md:text-2xl font-bold text-black">~~~{Title.Title}~~~</p>
            <div className="divider"></div> 
        </div>
       }
      
    </div>
  )
}
