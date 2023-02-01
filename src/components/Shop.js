import {React} from 'react';

//import components
import ShopItem from './ShopItem.js';

export default function Shop(){
  return(
    <div className='shop'>
      <div className='shop-item-container'>
        <ShopItem />
        <ShopItem />
        <ShopItem />
      </div>
    </div>
  )
}