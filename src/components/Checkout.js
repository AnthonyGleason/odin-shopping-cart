import React from "react";
import { useLocation } from "react-router-dom";
import CheckoutItem from "./CheckoutItem";

export default function Checkout(){
  let location = useLocation();
  let cart=location.state;
  return(
    <div className='checkout'>
      {cart.map((item)=>{
        return(
          <CheckoutItem name={item.name} ID={item.ID} key={item.ID} price={item.price} quantity={item.quantity} />
        )
      })}
      <div className="total">{calcTotal(cart)}</div>
    </div>
  )
};

let calcTotal = function(cart){
  let totalPrice=0;
  let totalItems=0;
  cart.forEach((item)=>{
    totalPrice=totalPrice+(item.price*item.quantity);
    totalItems=totalItems+item.quantity;
  })
  let message = ('Total Price: $'+ totalPrice +' Total Items: '+totalItems);
  return message;
}