import {React, useState} from 'react';

//import components
import CartItem from './CartItem';
import ShopItem from './ShopItem';

//import css
import '../styles/shop.css';

//import shop item array
import shopArray from '../shopItems';

export default function Shop(){
  const [cart,setCart] = useState([{
    name: 'Pencils',
    price: 0.99,
    quantity: 2,
  }]);
  let totalPrice=0;
  let totalItems=0;
  return(
    <div className='shop'>
      <div className='shop-item-container'>
        {
          shopArray.map((item)=>{
            return(
              <ShopItem cart={cart} setCart={setCart} img={item.img} name={item.name} price={item.price} desc={item.desc} id={item.ID} key={item.ID} />
            )
          })
        }
      </div>
      <div className='cart'>
        <div className='quantity'> Total Items: 0</div>
        <div className='cart-item-container'>
        {
          cart.map((item)=>{
            totalPrice=totalPrice+(item.price*item.quantity);
            totalItems=totalItems+item.quantity;
            return(
              <CartItem name={item.name} price={item.price} quantity={item.quantity} key={item.ID} />
            )
          })
        }
        </div>
        <div className='total-cost'>Total Cost: ${totalPrice}</div>
        <div className='total-items'>Total Items: </div>
        <button className='checkout-button' type='submit'>Checkout</button>
      </div>
    </div>
  )
}