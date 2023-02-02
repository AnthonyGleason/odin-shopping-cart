import {React} from 'react';

//import components
import ShopItem from './ShopItem.js';

export default function Shop(props){
  let cart, setCart;
  [cart,setCart] = [props.cart,props.setCart];
  return(
    <div className='shop'>
        <ShopItem 
        key={0}
        itemID={0} 
        itemName={'Pencils'}
        cart={cart}
        setCart={setCart}
        />
        <ShopItem 
        key={1}
        itemID={1} 
        itemName={'Erasers'}
        cart={cart}
        setCart={setCart}
        />
        <ShopItem 
        key={2}
        itemID={2} 
        itemName={'Markers'}
        cart={cart}
        setCart={setCart}
        />
   </div>
  )
}