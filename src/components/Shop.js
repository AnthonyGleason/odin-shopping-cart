import {React, useState} from 'react';
import {Link} from 'react-router-dom';

//import components
import CartItem from './CartItem';
import ShopItem from './ShopItem';

//import css
import '../styles/shop.css';

//import shop item array
import shopArray from '../shopItems';

export default function Shop({cart,setCart}){
  let totalPrice=0;
  let totalItems=0;
  return(
    <div className='shop'>
      <div className='shop-item-container'>
        {
          shopArray.map((item)=>{
            return(
              <ShopItem cart={cart} setCart={setCart} img={item.img} name={item.name} price={item.price} desc={item.desc} ID={item.ID} key={Math.random()} />
            )
          })
        }
      </div>
      <div className='cart'>
        <div className='cart-item-container'>
        {
          cart.map((item)=>{
            totalPrice=totalPrice+(item.price*item.quantity);
            totalItems=totalItems+item.quantity;
            return(
              <CartItem ID={item.ID} name={item.name} price={item.price} quantity={item.quantity} key={Math.random()} cart={cart} setCart={setCart} />
            )
          })
        }
        </div>
        <div className='total-cost'>Total Cost: ${(Math.round(100*(totalPrice))/100)}</div>
        <div className='total-items'>Total Items: {totalItems}</div>
        <Link to={'/checkout'} state={cart} className='shop-checkout'>
          <button className='checkout-button' type='button'>Checkout</button>
        </Link>
        <div classname='remove-button-container'>
          <button onClick={()=>{setCart([])}}className='remove-button' type='button'>Remove All</button>
        </div>
      </div>
    </div>
  )
}