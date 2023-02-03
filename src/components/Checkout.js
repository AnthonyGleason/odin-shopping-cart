import React from "react";
import { useLocation } from "react-router-dom";

export default function Checkout(){
  let location = useLocation();
  console.log(location.state);
  return(
    <div>
    </div>
  )
}