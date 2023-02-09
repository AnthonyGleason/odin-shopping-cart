import React from 'react';
import {useLocation, Link} from 'react-router-dom';

import CheckoutItem from './CheckoutItem';

export default function Checkout(){
  let location = useLocation();
  let cart = location.state;
  let totalItems=0;
  let totalPrice=0;

  return(
    <div className='checkout'>
      <div className='checkout-item-container'>
        {cart.map((item)=>{
          totalItems=totalItems+item.quantity;
          totalPrice=totalPrice+(item.quantity*item.price);
          return(
            <CheckoutItem name={item.name} key={Math.random()} price={item.price} quantity={item.quantity} />
          )
        })}
      </div>
      <div className='total-quantity'>Total Item(s): {totalItems}</div>
      <div className='total-price'>Total Cost: ${(Math.round(100*(totalPrice))/100)}</div>
      <Link to={'/checkout/success'} className='checkout-link'><button className='complete-checkout'>Complete Checkout</button></Link>
    </div>
  )
}