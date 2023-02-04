import React from "react";

export default function CartTotalItem(props){
  const [cart,setCart] = [props.cart,props.setCart];
  return(
    <div className="cart-total" style={{display: 'none'}}>
      <div className="item-name">Cart Total</div>
      <div className="item-price">Total: ${(Math.round(100*(calcTotalPrice(cart)))/100)}</div>
      <div className="item-quantity">{calcTotalQuantity(cart)} item(s) in cart</div>
      <button className="remove-item" onClick={()=>{handleItem(setCart,cart)}}>Remove All Items</button>
    </div>
  )
}
let calcTotalPrice = function(cart){
  let total = 0;
  cart.forEach((item)=>{
    total=(item.price*item.quantity)+total;
  });
  return total;
};
let calcTotalQuantity = function(cart){
  let total = 0;
  cart.forEach((item)=>{
    total=item.quantity+total;
  });
  return total;
};
let handleItem = function(setCart,cart){
  setCart([]);

  //if cart will be empty add cart is currently empty notice
  document.querySelector('.cart-notice').style.display='flex';
  //hide cart total
  document.querySelector('.cart-total').style.display='none';
}