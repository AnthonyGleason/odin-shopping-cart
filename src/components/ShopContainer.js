import React from "react";
import ShopItem from './ShopItem.js';

export default function ShopContainer(props){
  const [cart,setCart,shopArray] = [props.cart,props.setCart,props.shopArray];
  return(
    <div className="shop-item-container">
      {shopArray.map((item)=>{
        return(
          <ShopItem cart={cart} setCart={setCart} key={item.ID} ID={item.ID} name={item.name} price={item.price} />
        )
      })}
    </div>
  )
}