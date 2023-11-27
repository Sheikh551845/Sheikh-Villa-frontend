import React, { useContext } from 'react'

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from './AuthProvider';
import useAxiosPublic from '../Hooks/useAxiosPublic';


export default function SocialLogin() {
    const navigate = useNavigate()
    const {  googleSignIn, AllUser} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
console.log(AllUser)


const handleSocialLogin = () => {
    console.log('Starting handleSocialLogin function');
  
    googleSignIn()
      .then(res => {
        console.log('Google sign-in successful. User email:', res.user.email);
  
        const exist = AllUser?.find(User => User.email === res.user.email);
        const userInfo = {
          name: res.user.displayName,
          email: res.user.email,
          photo: res.user.photoURL,
          role: "user"
        };
  
        console.log('User Info:', exist);
  
        if (!exist) {
            console.log('User already exists. Creating new user entry.');
  
          const axiosPromise = axiosPublic.post('/AllUsers', userInfo);
          axiosPromise.then(data => {
            if (data.data.insertedId) {
              console.log('User entry created successfully. Logging in and navigating to Apartment.');
              toast.success('User logged in successfully');
              navigate('/Apartment');
        
            }
          });
      
          
        } else {
            console.log('User does not exist. Logging in and navigating to Apartment.');
            toast.success('User logged in successfully');
            navigate('/Apartment');
        }
      })
      .catch(error => {
        console.error('Google sign-in error:', error);
        toast.error(error.message);
      });
  
    console.log('End of handleSocialLogin function');
  };
  
  return (
    <div className="py-3">
         <div className="divider">continue with</div>
            <div className="flex justify-around ">
                <button
                    onClick={() =>handleSocialLogin()}
                    className="btn btn-neutral btn-sm">Google</button>

            </div>
    </div>


  )
}