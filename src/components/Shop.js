import React from 'react';

//import components
import CartItem from './CartItem';
import ShopItem from './ShopItem';

//import css
import '../styles/shop.css';
//import images
import pencils from '../assets/pencils.jpg';

export default function Shop(){
  return(
    <div className='shop'>
      <div className='shop-item-container'>
        <ShopItem img={pencils}/>
        <ShopItem img={pencils}/>
        <ShopItem img={pencils}/>
        <ShopItem img={pencils}/>
        <ShopItem img={pencils}/>
        <ShopItem img={pencils}/>
        <ShopItem img={pencils}/>
        <ShopItem img={pencils}/>
        <ShopItem img={pencils}/>
        <ShopItem img={pencils}/>
      </div>
      <div className='cart'>
        <div className='quantity'> Total Items: 0</div>
        <div className='cart-item-container'>
          <CartItem />
        </div>
        <div className='total-cost'>Total Cost: $0</div>
        <button className='checkout-button' type='submit'>Checkout</button>
      </div>
    </div>
  )
}