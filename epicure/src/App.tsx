import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import CartPopUp from "./component/CartapopUp/CartPopUp";
import Chefs from "./component/Chefs/Chefs";
import SingleChef from "./component/Chefs/SingleChef/SingleChef";
import Home from "./component/Home/Home";
import LogIn from "./component/LogIn/LogIn";
import Restaurant from "./component/Restaurant/Restaurant";
import SingleRest from "./component/Restaurant/SingleRestPage/SingleRest";
import SignIn from "./component/SignIn/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="restaurant/:restName" element={<SingleRest />} />
        <Route path="/chefs" element={<Chefs />} />
        <Route path="chefs/:chefName" element={<SingleChef />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/your cart" element={<CartPopUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
