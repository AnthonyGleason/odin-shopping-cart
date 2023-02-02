import {React} from 'react';

//import components
import ShopItem from './ShopItem.js';

export default function Shop(props){
  let cart, setCart;
  [cart,setCart] = [props.cart,props.setCart];
  return(
    <div className='shop'>
      {cart.map((item)=>{
        return(
          <ShopItem key={item.itemID} itemID={item.itemID} itemName={item.itemName} />
        )
      })}
   </div>
  )
}