import React from "react";

export default function CartItem(props){
  const [name,price,quantity,ID] = [props.name,props.price,props.quantity,props.ID];
  const [cart,setCart] = [props.cart,props.setCart];

  return(
    <div className="cart-item">
      <div className="item-name">{name}</div>
      <div className="item-price">${(Math.round(100*(price*quantity))/100)}</div>
      <div className="item-quantity">{quantity}</div>
      <button className="remove-item" onClick={()=>{handleItem(setCart,cart,ID)}}>Remove from cart</button>
    </div>
  )
}

let handleItem = function(setCart,cart,ID){
  //find index at item id
  let index;
  cart.forEach((item)=>{
    if(item.ID===ID){
      index=cart.indexOf(item);
    }
  })
  let a = cart.slice(0,index);
  let b = cart.slice(index+1,cart.length);
  setCart(a.concat(b));
}