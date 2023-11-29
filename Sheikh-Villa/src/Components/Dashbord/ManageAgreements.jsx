import { useContext } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { AiOutlineFileDone } from "react-icons/ai";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { AuthContext } from "../AuthProvider";
import DashContentFormat from "./DashContentFormat";
import { toast } from "react-toastify";





const ManageAgreement = () => {
    
const{AllUserRefetch,AllUser,AllAgreement,AgreementRefetch,AllApartment,AllApartmentRefetch}=useContext(AuthContext)

const PendingAgreement = AllAgreement?.filter(data => data.status== 'pending');
const dateObject = new Date();

const year = dateObject.getFullYear();
const month = String(dateObject.getMonth() + 1).padStart(2, '0'); 
const day = String(dateObject.getDate()).padStart(2, '0');

const currentDate = `${year}-${month}-${day}`;
   
    const axiosPublic = useAxiosPublic();

    const handleDeleteItem = (Agreement) => {
       
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
                const res = await axiosPublic.delete(`/Agreement/${Agreement._id}`);
                 console.log(res.data.deletedCount)
                if (res.data.deletedCount > 0) {
                    
                    AgreementRefetch();
                    Swal.fire('Deleted', ' Agreement has been deleted.', 'success');
                   
                }


            }
        });
    }

    const handleUpdate = async (Agreement) => {

        const findA = AllUser?.find(User => User.email == Agreement.UserEmail);
        const Apartment = AllApartment?.find(data => data.apartment_no== Agreement.apartment_no);
      console.log(currentDate)
        const Agreements =  await axiosPublic.patch(`/AcceptAgreement/${Agreement._id}`, {"status":"accepted", "Accept_date":`${currentDate}`});

      
                   
            const Apart = await axiosPublic.patch(`/Apartment/${Apartment._id}`, {"status":"rented"});
          
          

       
       
        if(Agreements?.data.modifiedCount > 0  && Apart?.data.modifiedCount > 0){
           
            AllApartmentRefetch();
            AgreementRefetch();
            Swal.fire('Accepted', ' Agreement has been accepted.', 'success');
        }

       
      if(findA.role=="user")
      {
        const Users = await axiosPublic.patch(`/User/${findA._id}`, {"role":"member"});
        console.log(Users)
       if(Users?.data?.modifiedCount > 0){
           
        AllUserRefetch();
           toast.success(`${findA.name} is now a member`)
          
       }


      }

       
       


    }

    return (
        <DashContentFormat>
             <div>
            
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-fit lg:w-full border-2 border-black border-collapse">
                        {/* head */}
                        <thead className="  bg-black bg-opacity-80 text-white">
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Floor no</th>
                                <th>Block name</th>
                                <th>Apartment</th>
                                <th>Rent</th>
                                <th>Request date</th>
                    
                                <th>Accept</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                PendingAgreement?.map((Agreement, index) => <tr key={Agreement._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                    {Agreement.UserName}
                                    </td>
                                   
                                    <td className="">{Agreement.UserEmail}</td>
                                    <td>
                                    {Agreement.floor_no}
                                    </td>
                                    <td>
                                    {Agreement.block_name}
                                    </td>
                                    <td className="">
                                    {Agreement.apartment_no}
                                    </td>

                                    <td className="text-right">
                                    ${Agreement.rent}
                                    </td>
                                    <td>
                                    {Agreement.Submit_date}
                                    </td>

                                    <td>
                                        <button
                                            onClick={() => handleUpdate(Agreement)}
                                            className="btn btn-ghost btn-lg">
                                                <AiOutlineFileDone className="text-green-600"/>
                                            
                                        </button>
                                    </td>
                                    
                                    <td>
                                        <button
                                            onClick={() => handleDeleteItem(Agreement)}
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

export default ManageAgreement;
