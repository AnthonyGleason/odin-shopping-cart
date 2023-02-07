import {React,useState} from 'react';

export default function ShopItem(props){
  //destructure props
  const [ID, name, img, price, desc]=[props.ID,props.name,props.img,props.price,props.desc]
  const [cart,setCart] = [props.cart,props.setCart];
  const [quantity,setQuantity] = useState(1);
  return(
    <div className='shop-item'>
      <img className='shop-item-img' src={img} alt={'test'} />
      <div className='shop-item-name'>{name}</div>
      <div className='shop-item-desc'>{desc}</div>
      <div className='shop-item-price'>${price}</div>
      <div className='shop-button-container'>
        <button type='submit' onClick={()=>handleAdd(ID,name,price,quantity,cart,setCart)}>Add to cart</button>
        <input onChange={(e)=>handleQuantityChange(parseInt(e.target.value),setQuantity)} type={'number'} value={quantity} min={1} max={9} />
      </div>
    </div>
  )
}

let handleQuantityChange = function(newQuantity,setQuantity){
  if (newQuantity<1 || newQuantity>9) return 0;
  setQuantity(newQuantity);
}

let handleAdd = function(ID,name,price,quantity,cart,setCart){
  let index = undefined;
  
  cart.forEach((item)=>{
    if (item.ID===ID) index=cart.indexOf(item);
  })
  //if item already exists update quantity at index
  if (index>=0){
    //run if item exists in cart
    //get cart item that needs updating
    let item = cart[index];
    let tempQuantity=item.quantity+quantity;
    //check to see if new quantity is over or under accepted range
    if (tempQuantity>9||tempQuantity<1) return 0;
    //update the cart item quantity
    item.quantity=tempQuantity;
    //make cart slices
    let a = cart.slice(0,index);
    let b = item;
    let c = cart.slice(index+1,cart.length);
    setCart(a.concat(b).concat(c));
  }else{
    setCart(
      cart.concat({
        ID: ID,
        name: name,
        price: price,
        quantity: quantity,
      })
    )
  }
  
}