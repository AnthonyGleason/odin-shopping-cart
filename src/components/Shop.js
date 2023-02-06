import {React, useState} from 'react';

//import components
import CartItem from './CartItem';
import ShopItem from './ShopItem';

//import css
import '../styles/shop.css';

//import shop item array
import shopArray from '../shopItems';

export default function Shop(){
  const [cart,setCart] = useState([]);
  let totalPrice=0;
  let totalItems=0;
  return(
    <div className='shop'>
      <div className='shop-item-container'>
        {
          shopArray.map((item)=>{
            return(
              <ShopItem cart={cart} setCart={setCart} img={item.img} name={item.name} price={item.price} desc={item.desc} id={item.ID} key={Math.random()} />
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
              <CartItem name={item.name} price={item.price} quantity={item.quantity} key={Math.random()} />
            )
          })
        }
        </div>
        <div className='total-cost'>Total Cost: ${(Math.round(100*(totalPrice))/100)}</div>
        <div className='total-items'>Total Items: {totalItems}</div>
        <button className='checkout-button' type='button'>Checkout</button>
        <button onClick={()=>{setCart([])}}className='remove-button' type='button'>Remove All</button>
      </div>
    </div>
  )
}