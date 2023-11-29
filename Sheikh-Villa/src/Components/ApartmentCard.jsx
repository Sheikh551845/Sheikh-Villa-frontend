import React, { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { AuthContext } from './AuthProvider';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import Swal from 'sweetalert2'
import useAxiosPublic from '../Hooks/useAxiosPublic';



export default function ApartmentCard(Apartment) {
    const {user,AllAgreement}=useContext(AuthContext)
    const axiosPublic = useAxiosPublic();
    const [clicked,setClicked]=useState(false)
    const dateObject = new Date();
  
        const year = dateObject.getFullYear();
        const month = String(dateObject.getMonth() + 1).padStart(2, '0'); 
        const day = String(dateObject.getDate()).padStart(2, '0');
  
       const currentDate = `${year}-${month}-${day}`;
          
          
  
   
   
    const navigate =useNavigate()
  
   
  
    const handleAgreement = async () => {
      setClicked(true)
      
      
      if (!user) {
      
        navigate('/Login');
        toast.error('Please login ');
      } else {
     
        
        const info = {
          UserName: user?.displayName,
          UserEmail: user?.email,
          floor_no: Apartment.Apartment.floor_no,
          rent: Apartment.Apartment.rent,
          apartment_no: Apartment.Apartment.apartment_no,
          block_name: Apartment.Apartment.block_name,
          status: 'pending',
          Submit_date: currentDate,
          Accept_date: ''
        };
        
     
        
        const findA = AllAgreement?.find(Agreement => Agreement.apartment_no == info.apartment_no);
      
        try {
          if (!findA) {
  
    
            const res = await axiosPublic.post('/Agreement', info);
           
    
            if (res.data.insertedId) {
             
              Swal.fire('Submitted', ' Agreement has been submitted.', 'success');
             
            }
            
          } else {
          
            toast.error('This agreement already submitted');
          }
        } catch (error) {
         
        }
      }
     
    };
    
    
  
    return (
      <div className='col-span-1 cursor-pointer group '>
        <div className='flex flex-col gap-2 w-full bg-black bg-opacity-60 rounded-lg '>
          <div
            className='
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              rounded-xl
            '
          >
            <img
              className='
                object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition
              '
              src={`${Apartment.Apartment.apartment_image}`}
              alt='Room'
            />
   {Apartment.Apartment.status!="rented" &&
            
            <motion.div
              className='
              absolute
              top-3
              right-3
            '
            whileHover={{ scale: 1.1 }}
            >
             {clicked || user?.email=='mama@mami.com'?<button className='bg-gray-500 p-4 rounded-lg text-black' onClick={handleAgreement} disabled>Submitted</button>:<button className='bg-green-500 p-4 rounded-lg' onClick={handleAgreement}>Agreement</button>} 
            </motion.div>
  }
            {Apartment.Apartment.status=="rented" &&
              <div
                className='
                 absolute
                 bottom-3
                 right-3
                 flex
                 justify-center
                 items-center gap-2
                        '
              >
                <p className="text-red-600 font-bold text-xl">Rented</p>
                <img src="https://i.ibb.co/4VLWhXp/pngwing-com.png" alt=""  className="w-10 h-10"/>
  
              </div>
            }
  
          </div>
          <div className='p-4'>
            <div className='flex gap-2  justify-center items-center mb-2 border border-1 border-white'>
  
              <p className=' text-lg font-bold text-white'>{Apartment.Apartment.apartment_no}</p>
            </div>
            <div className='flex gap-2  items-center'>
              <p className='font-semibold text-lg text-white'>Rent :</p>
              <p className=' text-lg text-green-300'>{Apartment.Apartment.rent}</p></div>
  
            <div className='flex gap-2  items-center'>
              <p className='font-semibold text-lg text-white'>Block :</p>
              <p className=' text-lg text-blue-300'>{Apartment.Apartment.block_name}</p>
            </div>
  
            <div className='flex gap-2  items-center'>
              <p className='font-semibold text-lg text-white'>Floor :</p>
              <p className=' text-lg text-blue-300'>{Apartment.Apartment.floor_no}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  