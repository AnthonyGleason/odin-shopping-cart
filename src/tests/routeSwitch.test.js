import {render, screen} from "@testing-library/react";
import RouteSwitch from "../components/RouteSwitch";

describe('render components',()=>{
  it('render the shop page',()=>{

  });
  it('render the about page',()=>{
  
  });
  it('render the home page', ()=>{
  
  });
  it('render checkout page',()=>{

  });
  it('render checkout success page',()=>{
  
  });
});
describe('item quantity',()=>{
  it('reject quantity less than 1',()=>{

  });
  it('reject quantity over 9',()=>{

  });
  it('allow user to decrease quantity',()=>{

  });
  it('allow user to increase quantity',()=>{

  });
});
describe('cart',()=>{
  it('display cart items when created',()=>{

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