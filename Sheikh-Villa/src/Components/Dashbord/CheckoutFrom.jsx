import React, { useContext } from 'react'
import { CardElement,  useElements , useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";


import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { AuthContext } from "../AuthProvider";

export default function CheckoutFrom() {
  
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosPublic = useAxiosPublic();
   

    const { AllUserRefetch, AllUser, AllAgreement, AllApartment, AllApartmentRefetch,user,AllPaymentRefetch } = useContext(AuthContext)
    AllUserRefetch();
    
    
   
    const AcceptedAgreement = AllAgreement?.find(data => data.status == "accepted" &&  data.UserEmail == user.email);

    const navigate = useNavigate();
    const dateObject = new Date();

    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, '0'); 
    const day = String(dateObject.getDate()).padStart(2, '0');

   const currentDate = `${year}-${month}-${day}`;
   const giveable= AcceptedAgreement.rent/100
   console.log(giveable)

   const [formData, setFormData] = useState({
    email: user.email,
    floor_no: AcceptedAgreement.floor_no,
  
    block_name: AcceptedAgreement.block_name,
    apartment_no: AcceptedAgreement.apartment_no,
    rent: AcceptedAgreement.rent ,
    PaymentDate: currentDate,
    price: `${giveable}`
   
});
console.log(formData)
 
        const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
        
      };


      

      useEffect(() => {
          if (AcceptedAgreement.rent > 0) {
              axiosPublic.post('/create-payment-intent', { price: giveable})
                  .then(res => {
                      console.log(res.data.clientSecret);
                      setClientSecret(res.data.clientSecret);
                  })
          }
  
      }, [axiosPublic, AcceptedAgreement.rent])
   

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error);
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod)
            setError('');
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                // now save the payment in the database
              

                const res = await axiosPublic.post('/AllPayment', formData);
                console.log('payment saved', res.data);
                AllPaymentRefetch();
                if (res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank you for the taka paisa",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/Dashboard/PaymentHistory')
                }

            }
        }

    }

    return (
        <div className="w-full ">
       
        <div className="bg-white rounded shadow-xl mt-7 py-7 px-10 w-fit mx-auto ">
      <form onSubmit={handleSubmit} className="w-[15rem] md:w-fit flex flex-col gap-3">
      <div className="form-control lg:flex lg:gap-12 flex-row flex-wrap lg:items-center lg:justify-center mx-auto">
          <div>
            <label className="label">
              <span className="label-text text-bold text-black">Email </span>
            </label>
            <input
               name="email"
               value={formData.email}
            
              placeholder={formData.email}
              className="input border-black w-[15rem] md:w-96"
              readOnly
            />
          </div>
        </div>
     
   
        <div className="form-control lg:flex lg:gap-12 flex-row flex-wrap lg:items-center lg:justify-center mx-auto">
          <div>
            <label className="label">
              <span className="label-text text-bold text-black">Payment Date </span>
            </label>
            <input
               name="PaymentDate"
               value={formData.PaymentDate}
             
              placeholder={formData.PaymentDate}
              className="input border-black w-[15rem] md:w-96"
              readOnly
            />
          </div>
        </div>
        <div className="form-control lg:flex lg:gap-12 flex-row flex-wrap lg:items-center lg:justify-center mx-auto">
          <div>
            <label className="label">
              <span className="label-text text-bold text-black">floor_no </span>
            </label>
            <input
               name="floor_no"
               value={formData.floor_no}
              
              placeholder={formData.floor_no}
              className="input border-black w-[15rem] md:w-96"
              readOnly
            />
          </div>
        </div>
        <div className="form-control lg:flex lg:gap-12 flex-row flex-wrap lg:items-center lg:justify-center mx-auto">
          <div>
            <label className="label">
              <span className="label-text text-bold text-black">Payment Amount in USD</span>
            </label>
            <input
               name="rent"
               value={formData.rent}
              
              placeholder={`${giveable}`}
              className="input border-black w-[15rem] md:w-96"
              readOnly
            />
          </div>
        </div>

        <div className="form-control flex lg:gap-12 flex-col lg:flex-row flex-wrap lg:items-center lg:justify-center mx-auto">
          <div>
              <label className="label">
                <span className="label-text text-bold text-black">Month  </span>
              </label>
              <input
                type="number"
                placeholder="which month’s rent you want to pay"
                className="input border-black w-[15rem] md:w-96"
                name="month"
                value={formData.month}
                onChange={handleChange}
                required
              />
            </div>
           
         
          </div>
  
        <div className="form-control mt-6 p-0">
          <hr className="h-[1px] bg-black my-14" />
          <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-red-600">{error}</p>
            {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
        </div>
      </form>
      </div>
      </div>

       
    );
};

