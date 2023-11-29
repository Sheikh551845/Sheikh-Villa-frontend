import React, { useContext, useState } from 'react'
import { AuthContext } from '../AuthProvider'
import DashContentFormat from './DashContentFormat';
import ComponentTitle from '../ComponentTitle';

export default function PaymentHistory() {
    const{user,AllPayment,AllPaymentRefetch}=useContext(AuthContext)
    const test=[1,2,3,4,5,6,7,8,9,10,11,12]
    const UserPayment = AllPayment?.filter(data => data.email== user.email);
    const[SearchData,SetSearchData]=useState(UserPayment)

    const handleChange=(e)=>
    {
        
        const Searched = UserPayment?.filter(data => data.month== e.target.value);
        console.log(Searched)
        if(e.target.value=='All')
        {
            SetSearchData(UserPayment)
        }
        else if(!Searched)
        {
            SetSearchData([])
        }
        else
        SetSearchData(Searched)
        
        
        console.log(SearchData)
    }
  return (
    <DashContentFormat>
        <ComponentTitle Title={"Payment History"}></ComponentTitle>
             <div>
            
            <div>
            <div className="flex  justify-end mb-5 ">
<div className="flex flex-col items-center justify-center mr-3">
            <label className="label">
                  <span className="label-text text-bold text-black">View By Month</span>
                </label>
                <select
        className="input border-black w-[100px]"
        name="assignmentType"
        
        onChange={handleChange}
        required
      >
        <option value="All" >All</option>
        {
            test.map((Value,index)=>
            <option value={Value} key={index}>{index+1}</option>
           )
        }
        
        
  
      </select>
            </div>
            </div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead className='bg-black bg-opacity-70 text-white text-lg '>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Email</th>
                                <th>Apartment</th>
                                <th>Payment</th>
                                <th>PaymentDate</th>
                                <th>For Month</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                SearchData?.map((payment, index) => <tr key={payment._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                   
                                    <td>
                                        {payment.email}
                                    </td>
                                    <td className="">{payment.apartment_no}</td>
                                    <td>
                                        {payment.price} USD
                                    </td>
                                    <td>
                                        {payment.PaymentDate}
                                    </td>
                                    <td>
                                        {payment.month}
                                    </td>
                                    
                                  
                                </tr>)
                            }
                        </tbody>


                    </table>
                </div>
            </div>
        </div>
        </DashContentFormat>
  )
}
