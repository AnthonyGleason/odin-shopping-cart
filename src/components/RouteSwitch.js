import { BrowserRouter,Routes,Route,redirect} from "react-router-dom";
import { useEffect, useState } from "react";

//import components
import App from './App.js';
import Nav from './Nav.js';
import Footer from "./Footer.js";
import Shop from './Shop.js';
import Cart from './Cart.js';
import About from './About.js';

export default function RouteSwitch(){
  //creates a shopping cart with an empty array
  const [cart,setCart] = useState([]);

  //sets initial load page to be /home
  useEffect(()=>{
    redirect('/home');
  },[])

  return(
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<App />} />
          <Route path='/shop' element={<Shop cart={cart} setCart={setCart} />} />
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
};