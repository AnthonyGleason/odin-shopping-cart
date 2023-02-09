import React from "react";

export default function CheckoutComplete(){
  return(
    <div className="checkout-complete">
      <div className="checkout-text">
        Your order number is #{Math.floor(Math.random()*10000)}. Thank you for your order!
      </div>
    </div>
  )
}