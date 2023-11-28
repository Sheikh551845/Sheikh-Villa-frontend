import { FaEdit, FaTrashAlt } from "react-icons/fa";


import Swal from "sweetalert2";

import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import DashContentFormat from "./DashContentFormat";
import { toast } from "react-toastify";




const ManageMember = () => {
    const{AllUserRefetch,AllUser}=useContext(AuthContext)
const TotalMember = AllUser?.filter(data => data.role== 'member');
   
    const axiosPublic = useAxiosPublic();

    const handleDeleteItem = (user) => {
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
                const Users = await axiosPublic.patch(`/User/${user._id}`, {"role":"user"});
                console.log(Users)
               if(Users?.data?.modifiedCount > 0){
                   AllUserRefetch();
                   toast.success(`${user.name} is now a user`)
                  
               }

            }
        });
    }

    return (
        <DashContentFormat>
             <div>
            
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                TotalMember.map((user, index) => <tr key={user._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={user.photo} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {user.name}
                                    </td>
                                    <td className="">{user.email}</td>
                                    
                                    <td>
                                        <button
                                            onClick={() => handleDeleteItem(user)}
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
        </DashContentFormat>
       
    );
};

export default ManageMember;