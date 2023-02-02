import {React} from 'react';

export default function Nav(){
  return(
    <div className='nav'>
      <a href="/home">
        <div className='nav-title'>Store</div>
      </a>
      
      <div className='nav-buttons'>
        <ul>
          <a href='/home'><li>Home</li></a>
          <a href='/shop'><li>Shop</li></a>
          <a href='/about'><li>About</li></a>
          <a href='/cart'><li>Cart</li></a>
        </ul>
      </div>
    </div>
  )
}