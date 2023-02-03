import React from "react";
import { useLocation } from "react-router-dom";
import CartItem from "./CartItem";

export default function Checkout(){
  let location = useLocation();
  console.log(location.state);
  return(
    <div className='checkout'>
      {location.state.map((item)=>{
        return(
          <CartItem name={item.name} ID={item.ID} key={item.ID} price={item.price} quantity={item.quantity} />
        )
      })}
    </div>
  )
}