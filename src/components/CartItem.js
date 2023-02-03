import React from "react";

export default function CartItem(props){
  const [name,price,quantity] = [props.name,props.price,props.quantity];
  return(
    <div className="cart-item">
      <div className="item-name">{name}</div>
      <div className="item-price">{price}</div>
      <div className="item-quantity">{quantity}</div>
    </div>
  )
}