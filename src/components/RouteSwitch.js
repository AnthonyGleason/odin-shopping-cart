import { BrowserRouter,Routes,Route} from "react-router-dom";
import {React} from 'react';

//import components
import App from './App.js';
import Nav from './Nav.js';
import About from './About.js';
import Shop from './Shop.js';
import Checkout from './Checkout.js';
import CheckoutComplete from "./CheckoutComplete.js";

import '../styles/body.css';

export default function RouteSwitch(){

  return(
    <div className='body'>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/about' element={<About />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/checkout/success' element={<CheckoutComplete />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
};