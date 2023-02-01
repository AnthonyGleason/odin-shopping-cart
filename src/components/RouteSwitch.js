import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from "./App.js";

export default function RouteSwitch(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
      </Routes>
    </BrowserRouter>
  )
};