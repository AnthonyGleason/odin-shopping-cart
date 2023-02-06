import React from 'react';

//import css
import '../styles/nav.css';

export default function Nav(){
  return(
    <div className='nav'>
      <ul className='nav-buttons'>
        <a href='/'><li>Home</li></a>
        <a href='/shop'><li>Shop</li></a>
        <a href='/about'><li>About</li></a>
      </ul>
      <a href='/'><div className='nav-logo'>Odin School Supplies</div></a>
    </div>
  )
}