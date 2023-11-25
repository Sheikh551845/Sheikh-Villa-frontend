import React, { useContext } from 'react'

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from './AuthProvider';


export default function SocialLogin() {
    const navigate = useNavigate()
    const {  googleSignIn } = useContext(AuthContext);


    const handleSocialLogin = () => {
        googleSignIn()
            .then(res => {
                toast.success('User logged in successfully');
                navigate('/')

            })
            .catch(error => {
                console.log(error)
                toast.error(error.message)

            })
    }
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