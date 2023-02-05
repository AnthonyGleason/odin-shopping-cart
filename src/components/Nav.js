import React from "react";

//import css
import '../styles/Nav.css';

export default function Nav(){
  return(
    <div className="nav">
      <a href={'/'}>
        <div className='nav-title'>School Supplies</div>
      </a>
      <ul className="button-container">
        <a href={'/'}><li>Home</li></a>
        <a href={'/about'}><li>About</li></a>
        <a href={'/shop'}><li>Shop</li></a>
      </ul>
    </div>
  )
}