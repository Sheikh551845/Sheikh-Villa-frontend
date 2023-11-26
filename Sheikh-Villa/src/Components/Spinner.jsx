import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider';
import { CircleLoader, BounceLoader } from 'react-spinners';

export default function Spinner() {
    const {theme}=useContext(AuthContext);
  return (
    <div className="flex justify-center items-center h-[60vh] md:h-[80vh]">
         {
            theme =="dark"? <BounceLoader size={100} color='white'/>: <BounceLoader size={100}  color="#36d7b7" />
          }
    
    </div>
  )
}
