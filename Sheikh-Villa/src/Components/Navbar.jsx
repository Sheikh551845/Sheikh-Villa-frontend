import React, { useContext, useState } from 'react'
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import DarkNav from './DarkNav';
import { FaBuildingColumns } from 'react-icons/fa6';


export default function Navbar() {

    const {user,logout,setTheme,theme}=useContext(AuthContext)
    const [isClicked, setIsClicked] = useState(false);
    const navigate=useNavigate()

    const handleImageClick = () => {
      setIsClicked(!isClicked);
    };
    
    return (
      <div>
  {
          theme ==="light"?  
          <div className="fixed z-10 bg-opacity-30 bg-black flex justify-between items-center w-screen justify-items-center shadow-xl p-3  mt-0 "> 
     <div>
        <div className=" flex items-center">
        <FaBuildingColumns className=' text-2xl md:text-4xl text-center text-white'></FaBuildingColumns>
                              
                                <h3 className=" text-white font-bold tracking-normal leading-tight ml-3 text-xl md:text-3xl text-center"> SHEIKH VILLA</h3>
                            </div>
        </div>
     <div>
     <div className="hidden lg:block">
      <ul className="mt-5 flex gap-6 mr-5 ">
  
    
        
      <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "underline" : ""}
              >
                <li className=" text-white cursor-pointer h-full flex items-center text-sm hover:text-indigo-700 tracking-normal transition duration-150 ease-in-out">
     
    Home
  </li>
              </NavLink>

              <NavLink
                to="/Apartment"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "underline" : ""}
              >
                <li className=" text-white cursor-pointer h-full flex items-center text-sm hover:text-indigo-700 tracking-normal transition duration-150 ease-in-out">
     
    Apartment
  </li>
              </NavLink>

              <NavLink
                to="/Registration"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "underline" : ""}
              >
                <li className=" text-white cursor-pointer h-full flex items-center text-sm hover:text-indigo-700 tracking-normal transition duration-150 ease-in-out">
     
    Registration
  </li>
              </NavLink>
  
  
        
             
  
             
        
       
      </ul>
    </div>
  
  
  
  
  
  
  
  
    <div className="dropdown mr-6 relative">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <div className="absolute right-20">
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-opacity-30 bg-black  rounded-box w-32 flex flex-col gap-3">
        <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "underline" : ""}
              >
                <li className=" text-white cursor-pointer h-full flex items-center text-sm hover:text-indigo-700 tracking-normal transition duration-150 ease-in-out">
     
    Home
  </li>
              </NavLink>

              <NavLink
                to="/Registration"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "underline" : ""}
              >
                <li className=" text-white cursor-pointer h-full flex items-center text-sm hover:text-indigo-700 tracking-normal transition duration-150 ease-in-out">
     
    Apartment
  </li>
              </NavLink>

              <NavLink
                to="/Registration"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "underline" : ""}
              >
                <li className=" text-white cursor-pointer h-full flex items-center text-sm hover:text-indigo-700 tracking-normal transition duration-150 ease-in-out">
     
    Registration
  </li>
              </NavLink>
  
  
        
              
        
       
        </ul>
        </div>
        
      </div>
     </div>
     
      {user && Object.keys(user).length > 0?    
      <div className="flex justify-center items-center gap-4  ml-3">
     
      
     <div className="avatar  relative">
      <div
        className="w-6 md:w-12 rounded-full ring ring-offset-base-100 ring-offset-2 hover:cursor-pointer"
        onClick={handleImageClick}
      >
        {user?.photoURL !== null ? (
          <img src={user.photoURL} alt="User Avatar" />
        ) : (
          <img src="https://i.ibb.co/3MJwzX0/pngegg-1.png" alt="Default Avatar" />
        )}
      </div>

      {isClicked && (
        <div className=" absolute bg-black bg-opacity-70 text-white p-2 rounded max-w-max h-[170px] top-10 right-5  ">
        
            <p
            className="text-white  mt-3 mb-4 max-w-fit md:text-sm mx-auto"
           
          >
            {user.displayName}
          </p>
          
          <button
            className="text-white p-1 w-full md:h-10 md:p-3 bg-black rounded-lg text-xs lg:text-white m-1   "
            onClick={()=>navigate("/Dashboard")}
          >
           Dashboard
          </button>
         
         
           
          
          <button
            className="text-white p-1 w-full md:h-10 md:p-3 bg-black rounded-lg text-xs lg:text-white m-1 "
            onClick={logout}
          >
            Logout
          </button>
         
         


        </div>
      )}
    </div>
        
       
  
        <button onClick={()=>setTheme("dark")}><img className=" w-5 h-5 md:w-8 md:h-8 rounded-full"  src="https://i.ibb.co/KsDQxZ1/moon.png" alt="" /></button>
      
      </div> :
  
  <div className="flex justify-center items-center gap-4 mr-4">
    <NavLink to="/Login">
    <button className=" text-white p-1 md:w-22 md:h-12 md:p-3 bg-black rounded-lg text-xs lg:text-base">Log In</button>
  </NavLink>
  
  
        <button onClick={()=>setTheme("dark")}><img className=" w-5 h-5 md:w-8 md:h-8 rounded-full"  src="https://i.ibb.co/KsDQxZ1/moon.png" alt="" /></button>
  </div>
  }
  
     
     </div>
     :
     
     <DarkNav></DarkNav>
  
  
      }
      </div>
      
    )
}