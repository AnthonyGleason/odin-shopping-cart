import {React, useState} from "react";

export default function ShopItem(props){
  const [quantity, setQuantity] = useState(1);
  const [cart,setCart,ID,name,price] = [props.cart,props.setCart,props.ID,props.name,props.price];
  return(
    <div className="shop-item">
      <div className="item-info">
        <div>{name}</div>
        <div>${price}</div>
      </div>
      <input onChange={(e)=>{handleQuantityChange(parseInt(e.target.value), setQuantity)}} className="item-quantity" />
      <button onClick={()=>{handleAddToCart(quantity,cart,setCart,ID,name,price)}} className="add-to-cart">Add to cart</button>
    </div>
  )
};

let handleQuantityChange = function(input,setQuantity){
  setQuantity(input);
};

let handleAddToCart = function(quantity,cart,setCart,ID,name,price){
  let newCart = cart;
  newCart.push({
    ID: ID,
    name: name,
    price: price,
    quantity: quantity,
  })
  setCart(newCart);
};