import {render, screen, cleanup, getByRole} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { handleQuantityChange } from "../components/ShopItem";

//import components
import RouteSwitch from "../components/RouteSwitch";
import Shop from "../components/Shop";
import About from "../components/About";
import Home from "../components/App";
import Checkout from "../components/Checkout";
import CheckoutSuccess from "../components/CheckoutComplete";
import CartItem from '../components/CartItem';
import ShopItem from '../components/ShopItem';
import ShopArray from '../shopItems';
import { Route } from "react-router-dom";
import { useState } from "react";

afterEach(()=>{
  cleanup();
})

describe('render components',()=>{
  it('render the shop page',()=>{
    render(<RouteSwitch><Shop /></RouteSwitch>);
  });
  it('render the about page',()=>{
    render(<RouteSwitch><About /></RouteSwitch>)
  });
  it('render the home page', ()=>{
    render(<RouteSwitch><Home /></RouteSwitch>)
  });
  it('render checkout page',()=>{
    render(<RouteSwitch><Checkout /></RouteSwitch>)
  });
  it('render checkout success page',()=>{
    render(<RouteSwitch><CheckoutSuccess /></RouteSwitch>)
  });
});

describe('cart',()=>{
  it('reject quantity less than 1',()=>{
    expect(handleQuantityChange(0)).toBe(1);
  });
  it('reject quantity over 9',()=>{
    expect(handleQuantityChange(10)).toBe(1);
  });
  it('allow user to change quantity',()=>{
    render(<ShopItem cart='' setCart='' img='' name='' price='' desc='' ID='' key='' />)
    let input = screen.getByRole('spinbutton');
    //simulates clearing the input;
    input.value=''
    userEvent.type(input,'2');
  });
  it('display cart items when created',()=>{
    const [cart,setCart] = useState([{
      ID: 1,
      name: 'Pens',
      price: 8.93,
      desc: 'A pack of 12 black pens.',
      img: '',
    }])
    render(<RouteSwitch><Shop /></RouteSwitch>)
  });
  it('should display a correct total cost',()=>{

  });
  it('should display a correct total item quantity',()=>{

  });
  it('remove all cart items when pressed',()=>{

  });
  it('changing item quantity updates price',()=>{

  });
  it('changing item quantity updates total item quantity',()=>{

  });
});
describe('checkout',()=>{
  it('should display a correct total cost',()=>{

  });
  it('should display a correct total item quantity',()=>{

  });
});
describe('checkout success',()=>{
  it('display a random order number',()=>{

  });
});