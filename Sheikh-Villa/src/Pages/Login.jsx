import React, { useContext } from 'react'

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SocialLogin from '../Components/SocialLogin';
import { AuthContext } from '../Components/AuthProvider';




export default function Login() {




    const{login,googleSignIn}=useContext(AuthContext)


    const navigate=useNavigate();

    const handleSubmit = (event) => {
      event.preventDefault();




      const email = event.target.email.value;
      const password = event.target.password.value;



      if (password.length < 6) {
           toast.error('Password must be at least 6 characters');
          return;
      }


      // login
      login(email, password)
          .then(res => {
              toast.success('User logged in successfully');
              navigate('/')
          })
          .catch(error => {
              toast.error(error.message)
          })




            }
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
    <div className="mx-auto pt-40 md:pt-44">
    <div className="relative flex  w-72  md:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto  mb-10">
<div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-r from-gray-600 to-gray-600  bg-clip-border text-white shadow-lg shadow-gray-600">
  <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
    Sign In
  </h3>
</div>
<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                      <form onSubmit={handleSubmit} className="card-body">

                          <div className="form-control">
                              <label className="label">
                                  <span className="label-text">Email</span>
                              </label>
                              <input type="text" placeholder="email" className="input input-bordered" name='email' required />
                          </div>

                          <div className="form-control">
                              <label className="label">
                                  <span className="label-text">Password</span>
                              </label>
                              <input type="text" placeholder="password" className="input input-bordered" name='password' required />
                          </div>
                          <div className="form-control mt-6 p-0">
                  <button className="btn  bg-gradient-to-r from-gray-600 to-gray-600 text-white" type='submit'>Log In</button>
                          </div>

                      </form>
                      <p className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
    Don't have an account?
    <a
      href="/Registration"
      className="ml-1 block font-sans text-sm font-bold leading-normal text-pink-500 antialiased"
    >
       Registration
             </a>
  </p>
  <div className="py-3">
         <div className="divider">continue with</div>
            <div className="flex justify-around ">
                <button
                    onClick={() =>handleSocialLogin()}
                    className="btn btn-neutral btn-sm">Google</button>

            </div>
    </div>
                  </div>
</div>
  </div>

  )
}