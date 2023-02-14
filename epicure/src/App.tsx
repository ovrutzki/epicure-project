import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Chefs from "./component/Chefs/Chefs";
import Home from "./component/Home/Home";
import Restaurant from "./component/Restaurant/Restaurant";
import SingleRest from "./component/Restaurant/SingleRestPage/SingleRest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/restaurant/:restName" element={<SingleRest />} />
        <Route path="/chefs" element={<Chefs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
