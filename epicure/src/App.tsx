import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chefs from  './component/Chefs/Chefs';
import Home from './component/Home/Home';
import Restaurant from './component/Restaurant/Restaurant';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/restaurant" element={<Restaurant />} />
       <Route path="/chefs" element={<Chefs />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
