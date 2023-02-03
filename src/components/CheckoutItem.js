import React from 'react';

export default function CheckoutItem(props){
  const [ID,name,price,quantity] = [props.ID,props.name,props.price,props.quantity];
  return(
    <div className='checkout-item'>
      <div className='checkout-item-name'>{name}</div>
      <div className='checkout-item-price'>Price: ${price}</div>
      <div className='checkout-item-quantity'>Quantity: {quantity}</div>
      <div className='checkout-item-subtotal'>Subtotal: ${price*quantity}</div>
    </div>
  )
}