import React from "react";

export default function CartItem(props){
  const [name,price,quantity,ID] = [props.name,props.price,props.quantity,props.ID];
  const [cart,setCart] = [props.cart,props.setCart];

  return(
    <div className="cart-item">
      <div className="item-name">{name}</div>
      <div className="item-price">Subtotal: ${(Math.round(100*(price*quantity))/100)}</div>
      <input value={quantity} type='number' min={1} max={9} onChange={(e)=>{handleQuantityChange(e.target.value,cart,setCart,ID)}} className="item-quantity" />in cart
      <button className="remove-item" onClick={()=>{handleItem(setCart,cart,ID)}}>Remove</button>
    </div>
  )
}

let handleQuantityChange = function(newQuantity){
  if(newQuantity>9 || newQuantity < 1) return 0;
  //find item index
  //split cart into 3 slices
  //update the slice with the quantity
  //setCart keeping slices in same order
};

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

  //if cart will be empty add cart is currently empty notice
  if (cart.length===1) document.querySelector('.cart-notice').style.display='flex';
  if (cart.length===1) document.querySelector('.cart-total').style.display='none';
}