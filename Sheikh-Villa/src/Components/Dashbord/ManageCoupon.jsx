import React, { useContext, useState } from 'react'
import { AuthContext } from '../AuthProvider';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import ComponentTitle from '../ComponentTitle';
import DashContentFormat from './DashContentFormat';

export default function ManageCoupon() {
    const{user,AllApartment, AllCoupon,AllCouponRefetch}=useContext(AuthContext)
    AllCouponRefetch()
    const [show, setshow_modal_X] = useState(true);
    const axiosPublic = useAxiosPublic();
    console.log(AllCoupon)
    const IdleApartments = AllApartment?.filter(data => data.status== "idle");
    console.log(IdleApartments)

    const [formData, setFormData] = useState({});
 
        const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
        
      };

      const handleSubmit = async (e) => {

        e.preventDefault();

        console.log(formData)
        
    
        const res = await axiosPublic.post('/AllCoupon', formData);
         
  
        if (res.data.insertedId) {
            
         
          Swal.fire('Created', ' Announcement has been created.', 'success');
          setFormData({couponCode:" ", Percentage:" ",Description:" ",apartment_no:" "})
          AllCouponRefetch()
          setshow_modal_X(false)
         
        }
    
          
       
      };


      const handleDeleteItem = (coupon) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosPublic.delete(`/AllCoupon/${coupon._id}`);
                 console.log(res.data.deletedCount)
                if (res.data.deletedCount > 0) {
                    
                    AllCouponRefetch();
                    Swal.fire('Deleted', ' coupon has been deleted.', 'success');
                   
                }


            }
        });
    }
   

    return (
        <DashContentFormat>
              <>
        <div className="">
          <div className="">
            <div
              className={`${
                show ? "hidden" : "flex"
              } container mx-auto  items-center justify-center `}
            >
              <div className="container mx-auto flex justify-center items-center  relative">
                <button
                  onClick={() => setshow_modal_X(true)}
                  className="bg-black bg-opacity-70 text-white py-5 px-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white rounded"
                >
                  Create Coupon
                </button>
              </div>
            </div>
            <div
              className={`${
                show ? "flex" : "hidden"
              }  mx-auto bg-white  py-9`}
            >
              <div className="mx-auto relative">
                <svg
                  onClick={() => setshow_modal_X(false)}
                  className="cursor-pointer absolute right-4 -top-10 z-10"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.28033 6.21967C6.98744 5.92678 6.51256 5.92678 6.21967 6.21967C5.92678 6.51256 5.92678 6.98744 6.21967 7.28033L10.9393 12L6.21967 16.7197C5.92678 17.0126 5.92678 17.4874 6.21967 17.7803C6.51256 18.0732 6.98744 18.0732 7.28033 17.7803L12 13.0607L16.7197 17.7803C17.0126 18.0732 17.4874 18.0732 17.7803 17.7803C18.0732 17.4874 18.0732 17.0126 17.7803 16.7197L13.0607 12L17.7803 7.28033C18.0732 6.98744 18.0732 6.51256 17.7803 6.21967C17.4874 5.92678 17.0126 5.92678 16.7197 6.21967L12 10.9393L7.28033 6.21967Z"
                    fill="#373737"
                  />
                </svg>
                <form onSubmit={handleSubmit} className="w-[15rem] md:w-fit flex flex-col gap-3">
          <div className="form-control flex lg:gap-12 flex-col lg:flex-row flex-wrap lg:items-center lg:justify-center mx-auto">
          <div>
              <label className="label">
                <span className="label-text text-bold text-black">coupon code</span>
              </label>
              <input
                type="text"
                placeholder="coupon code"
                className="input border-black w-[15rem] md:w-96"
                name="couponCode"
                value={formData.couponCode}
                onChange={handleChange}
                required
              />
            </div>
           
         
          </div>
          <div className="form-control lg:flex lg:gap-12 flex-row flex-wrap lg:items-center lg:justify-center mx-auto">
          <div>
              <label className="label">
                <span className="label-text text-bold text-black">Percentage</span>
              </label>
              <input
                type="number"
                placeholder="Discount Percentage"
                className="input border-black w-[15rem] md:w-96"
                name="Percentage"
                value={formData.Percentage}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-control lg:flex lg:gap-12 flex-row flex-wrap lg:items-center lg:justify-center mx-auto">
          <div>
              <label className="label">
                <span className="label-text text-bold text-black">Description</span>
              </label>
              <textarea
                type="text"
                placeholder="Discount Description"
                className="input border-black w-[15rem] md:w-96"
                name="Description"
                value={formData.Description}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center mr-3">
          <label className="label">
                <span className="label-text text-bold text-black">Discount For</span>
              </label>
           
           <select
            className="input border-black max-w-fit text-center"
            name="apartment_no"
            value={formData.apartment_no}
             onChange={handleChange}
             required

            >
  {
  IdleApartments?.map((Apartment, index) => (
    <option value={Apartment.apartment_no} key={index}>{Apartment.apartment_no}</option>
  
  ))
  }

 </select>
       </div>
    
          <div className="form-control mt-6 p-0 ">
            <hr className="h-[1px] bg-black my-14" />
            <div className="flex flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row gap-x-4 gap-y-4">
              <button className="bg-green-500 rounded hover:bg-black transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full " onClick={handleSubmit}>
               Submit
              </button>
            </div>
          </div>
        </form>
              </div>
            </div>
          </div>
        </div>

        <div>

      <ComponentTitle Title={"All Coupons"}></ComponentTitle>
            
            <div>
                <div className="overflow-x-auto mb-10">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Apartment</th>
                                <th>coupon code</th>
                                <th>percentage</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                AllCoupon?.map((coupon, index) => <tr key={coupon._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        {coupon.apartment_no}
                                    </td>
                                    <td>
                                        {coupon.couponCode}
                                    </td>
                                    <td className="">{coupon.Percentage}%</td>
                                    
                                    <td>
                                        <button
                                            onClick={() => handleDeleteItem(coupon)}
                                            className="btn btn-ghost btn-lg">
                                            <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                        </button>
                                    </td>
                                </tr>)
                            }
                        </tbody>


                    </table>
                </div>
            </div>
        </div>
      </>
        </DashContentFormat>
    
    );
  }
  
