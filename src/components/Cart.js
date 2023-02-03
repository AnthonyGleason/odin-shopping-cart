import React from "react";
import CartItem from './CartItem.js';

export default function Cart(props){
  let [cart,setCart]=[props.cart,props.setCart]
  return(
    <div className="cart">
      {cart.map((item)=>{
        return(
          <CartItem name={item.name} ID={item.ID} key={item.ID} price={item.price} quantity={item.quantity} cart={cart} setCart={setCart} />
        )
      })}
    </div>
  )
}