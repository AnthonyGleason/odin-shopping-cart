import {React, useState} from "react";

export default function ShopItem(props){
  const [quantity, setQuantity] = useState(1);
  const [cart,setCart,ID,name,price] = [props.cart,props.setCart,props.ID,props.name,props.price];
  return(
    <div className="shop-item">
      <div className="item-info">
        <div>{name}</div>
        <div>${(Math.round(100*(price*quantity))/100)}</div>
      </div>
      <input type={'number'} min={1} max={9} value={quantity} onChange={(e)=>{handleQuantityChange(parseInt(e.target.value),setQuantity)}} className="item-quantity" />
      <button onClick={()=>{handleAddToCart(quantity,cart,setCart,ID,name,price)}} className="add-to-cart">Add to cart</button>
    </div>
  )
};

let handleQuantityChange = function(val,setQuantity){
  if(val>9||val<1) return 0;
  setQuantity(val);
};

let handleAddToCart = function(quantity,cart,setCart,ID,name,price){
  let itemExists=false;
  let index;

  cart.forEach((item)=>{
    if (item.ID===ID){
      itemExists=true;
      index=cart.indexOf(item);
    };
  });

  if (itemExists===true){
    //run if item exists in cart
    //get cart item that needs updating
    let item = cart[index];
    //update the cart item quantity
    item.quantity=item.quantity+quantity;
    //make cart slices
    let a = cart.slice(0,index);
    let b = item;
    let c = cart.slice(index+1,cart.length);
    setCart(a.concat(b).concat(c));
  }else{
    //runs if item doesnt already exist in cart
    setCart(cart.concat({
      ID: ID,
      name: name,
      price: price,
      quantity: quantity,
    }));
  }
  
};