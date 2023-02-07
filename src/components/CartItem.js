import React from 'react';

export default function CartItem(props){
  //destructure props
  const [name,quantity,price,ID] = [props.name,props.quantity,props.price,props.ID];
  const [cart,setCart] = [props.cart, props.setCart];
  return(
    <div className='cart-item'>
      <div className='cart-item-name'>{name}</div>
      <div className='cart-item-info'>
        <input className='cart-item-quantity' onChange={(e)=>{handleQuantityChange(ID,e.target.value,cart,setCart)}} value={quantity} min={1} max={9} type={'number'} /> 
        <div className='cart-item-cost'>${(Math.round(100*(price*quantity))/100)}</div>
      </div>
    </div>
  )
}

let handleQuantityChange = function(ID,quantity,cart,setCart){
  let index;
  cart.forEach((item)=>{
    if (item.ID===ID) index=cart.indexOf(item);
  })
  //get cart item that needs updating
  let item = cart[index];
  //check to see if new quantity is over or under accepted range
  if (quantity>9||quantity<1) return 0;
  //update the cart item quantity
  item.quantity=parseInt(quantity);
  //make cart slices
  let a = cart.slice(0,index);
  let b = item;
  let c = cart.slice(index+1,cart.length);
  setCart(a.concat(b).concat(c));
};