import {React,useState} from "react";
import { Link } from "react-router-dom";

import ShopContainer from "./ShopContainer";
import Cart from "./Cart.js";

export default function Shop(){
  const [cart,setCart] = useState([]);
  let shopArray = [
    {
      ID: 0,
      name: 'Pencils',
      price: 0.99,
    },
    {
      ID: 1,
      name: 'Erasers',
      price: 0.43,
    },
    {
      ID: 2,
      name: 'Pens',
      price: 0.99,
    },
    {
      ID: 3,
      name: 'Markers',
      price: 0.84,
    },
    {
      ID: 4,
      name: 'Notebooks',
      price: 0.99,
    },
    {
      ID: 5,
      name: 'Pencil Sharpener',
      price: 0.65,
    },
    {
      ID: 6,
      name: 'Binder',
      price: 6.99,
    },
    {
      ID: 7,
      name: 'Pencil Case',
      price: 2.99,
    },
    {
      ID: 8,
      name: 'Crayons',
      price: 8.99,
    },
  ];

  return(
    <div className="shop">
      <div className="shop-sticky">
        <Link to={'/checkout'} state={cart} className='shop-sticky-text' ><li>Checkout</li></Link>
      </div>
      <ShopContainer shopArray={shopArray} cart={cart} setCart={setCart} />
      <Cart className={'cart'} cart={cart} setCart={setCart} />
    </div>
  )
}