import React from 'react';

export default function ShopItem(props){
  return(
    <div className='shop-item'>
      <img className='shop-item-img' src={props.img} alt={'test'} />
      <div className='shop-item-name'>name</div>
      <div className='shop-item-desc'>desc</div>
      <div className='shop-button-container'>
        <button type='submit'>Add to cart</button>
        <input type={'number'} min={1} max={9} />
      </div>
    </div>
  )
}