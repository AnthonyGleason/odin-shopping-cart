import { BrowserRouter,Routes,Route} from "react-router-dom";
import {React} from 'react';

//import components
import Nav from './Nav.js';
import Footer from './Footer.js';
import App from './App.js';
import Shop from "./Shop.js";
import About from "./About.js";
import Checkout from './Checkout.js';
import CheckoutSuccess from "./CheckoutSuccess.js";

//import css
import '../styles/Home.css';

export default function RouteSwitch(){

  return(
    <div className='body'>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/about' element={<About />} />
          <Route path='/checkout/success' element={<CheckoutSuccess />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
};