import {React,useState} from "react";
import { Link } from "react-router-dom";

import ShopContainer from "./ShopContainer";
import Cart from "./Cart.js";

//import css
import '../styles/Shop.css'

//import images
import binders from "../assets/binders.jpg";
import crayons from "../assets/crayons.jpg";
import erasers from "../assets/erasers.jpg";
import markers from "../assets/markers.jpg";
import notebook from "../assets/notebook.jpg";
import pencilCase from "../assets/pencilCase.jpeg";
import pencils from "../assets/pencils.jpg";
import pencilSharpener from "../assets/pencilSharpener.jpg";
import pens from "../assets/pens.jpg";

export default function Shop(){
  const [cart,setCart] = useState([]);
  let shopArray = [
    {
      ID: 0,
      name: 'Pencils',
      price: 0.99,
      img: pencils,
    },
    {
      ID: 1,
      name: 'Erasers',
      price: 0.43,
      img: erasers,
    },
    {
      ID: 2,
      name: 'Pens',
      price: 0.99,
      img: pens,
    },
    {
      ID: 3,
      name: 'Markers',
      price: 0.84,
      img: markers,
    },
    {
      ID: 4,
      name: 'Notebooks',
      price: 0.99,
      img: notebook,
    },
    {
      ID: 5,
      name: 'Pencil Sharpener',
      price: 0.65,
      img: pencilSharpener,
    },
    {
      ID: 6,
      name: 'Binder',
      price: 6.99,
      img: binders,
    },
    {
      ID: 7,
      name: 'Pencil Case',
      price: 2.99,
      img: pencilCase,
    },
    {
      ID: 8,
      name: 'Crayons',
      price: 8.99,
      img: crayons,
    },
  ];

  return(
    <div className="shop">
      <div className="shop-sticky">
        <Link to={'/checkout'} state={cart} className='shop-sticky-text'>Press here to checkout now!</Link>
      </div>
      <ShopContainer shopArray={shopArray} cart={cart} setCart={setCart} />
      <Cart className={'cart'} cart={cart} setCart={setCart} />
    </div>
  )
}