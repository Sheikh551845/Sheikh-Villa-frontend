import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutFrom from "./CheckoutFrom";
import DashContentFormat from "./DashContentFormat";
import ComponentTitle from "../ComponentTitle";


// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
export default function MakePayment() {
  return (
    <DashContentFormat>
        <ComponentTitle Title={"Make Payment"}></ComponentTitle>
        <div>
      <Elements stripe={stripePromise}>
                   <CheckoutFrom></CheckoutFrom>
                </Elements>
    </div>
    </DashContentFormat>
    
  )
}
