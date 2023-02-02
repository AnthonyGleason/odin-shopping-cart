import {React} from 'react';

export default function ShopItem(props){
  let itemID,itemName,cart, setCart;
  [itemID,itemName,cart,setCart] = [props.itemID,props.itemName,props.cart,props.setCart];
  let quantity = 1;
  return(
    <div className='shop=item'>
      <div className='item-name'>{itemName}</div>
      <input onChange={(e)=>{quantity=e.target.value}} className='quantity-input' />
      <button onClick={()=>{handleClick(itemID,quantity,itemName,cart,setCart)}} className='add-to-cart'>Add to cart</button>
    </div>
  )
}

let handleClick = function(itemID,quantity,itemName,cart,setCart){
  let newCart = cart;
  newCart.push({
    itemID: itemID,
    itemName: itemName,
    quantity: quantity,
  })
  setCart(newCart);
  console.log(cart);
};