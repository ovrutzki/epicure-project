import React from "react";
import { useNavigate } from "react-router-dom";
import '../../GeneralStyle.css'
import './navStyle.css'
import '../../fonts/helvetica/HelveticaNeue.ttf'
// import logo from "../../image/logo.svg"

const Navbar: React.FC = () => {
  const navigate: any = useNavigate();
  
  return (
    <nav>
      <div id="left-nav">  
      <button onClick={() => navigate("/")}><img src="/image/logo.svg" alt="" />EPICURE</button>
      <button onClick={() => navigate("/restaurant")}> <p>Restaurant</p> </button>
      <button onClick={() => navigate("/chefs")}> <p>Chefs</p> </button>
    </div>
    <div id="right-nav">
      <div id="search">
        <input type="text" placeholder="Search for restaurant, Chefs"/>
        <button><img src="/image/search.svg" alt="" /></button>
        </div>
      
      <button><img src="/image/person.svg" alt="" /></button>
      <button><img src="/image/shopping.svg" alt="" /></button>
    </div>
    </nav>
    
  );
};

export default Navbar;
