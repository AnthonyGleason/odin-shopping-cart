import {React,useState} from 'react';

export default function ShopItem(props){
  //destructure props
  const [ID, name, img, price, desc]=[props.ID,props.name,props.img,props.price,props.desc]

  const [quantity,setQuantity] = useState(1);
  return(
    <div className='shop-item'>
      <img className='shop-item-img' src={img} alt={'test'} />
      <div className='shop-item-name'>{name}</div>
      <div className='shop-item-desc'>{desc}</div>
      <div className='shop-item-price'>${price}</div>
      <div className='shop-button-container'>
        <button type='submit'>Add to cart</button>
        <input onChange={(e)=>handleQuantityChange(parseInt(e.target.value),setQuantity)} type={'number'} value={quantity} min={1} max={9} />
      </div>
    </div>
  )
}

let handleQuantityChange = function(newQuantity,setQuantity){
  if (newQuantity<1 || newQuantity>9) return 0;
  setQuantity(newQuantity);
}