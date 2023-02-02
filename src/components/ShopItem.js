import {React} from 'react';

export default function ShopItem(props){
  let itemID,itemName;
  [itemID,itemName] = [props.itemID,props.itemName];
  return(
    <div className='shop=item'>
      <div className='item-name'>{itemName}</div>
      <div className='item-id'>{itemID}</div>
      <button className='add-to-cart'>Add to cart</button>
    </div>
  )
}