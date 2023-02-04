import React from 'react';

export default function CheckoutItem(props){
  const [name,price,quantity,img] = [props.name,props.price,props.quantity,props.img];
  return(
    <div className='checkout-item'>
      <div className='checkout-item-name'>{name}</div>
      <div className='checkout-item-price'>Price: ${(Math.round(100*(price*quantity))/100)}</div>
      <div className='checkout-item-quantity'>Quantity: {quantity}</div>
      <div className='checkout-item-subtotal'>Subtotal: ${(Math.round(100*(price*quantity))/100)}</div>
      <img className='checkout-item-img' src={img} alt={name} />
    </div>
  )
}