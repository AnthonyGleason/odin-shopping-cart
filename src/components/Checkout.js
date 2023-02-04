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
          <CheckoutItem name={item.name} ID={item.ID} key={item.ID} price={item.price} quantity={item.quantity} img={item.img} />
        )
      })}
      <div className="total">{calcTotal(cart)}</div>
      <form className="checkout-form">
        <button type='button' onClick={()=>{window.location.href = '/checkout/success'}}>Complete Checkout</button>
      </form>
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
  let message = ('Total Price: $'+ (Math.round(100*(totalPrice))/100) +' Total Items: '+totalItems);
  return message;
};