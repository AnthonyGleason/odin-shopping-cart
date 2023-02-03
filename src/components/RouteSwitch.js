import { BrowserRouter,Routes,Route,redirect} from "react-router-dom";
import {React, useEffect} from 'react';
import Nav from './Nav.js';
import Footer from './Footer.js';
import App from './App.js';
import Shop from "./Shop.js";
import About from "./About.js";
import Checkout from './Checkout.js';
export default function RouteSwitch(){
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
          <Route path='/shop' element={<Shop />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
};