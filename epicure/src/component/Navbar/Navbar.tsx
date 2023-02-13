import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../GeneralStyle.css";
import "./navStyle.css";
import "../../fonts/helvetica/HelveticaNeue.ttf";
import { NavLink } from "react-router-dom";
const Navbar: React.FC = () => {
  const navigate: any = useNavigate();
  const [underLine, useUnderLine] = useState<boolean>(false);
  return (
    <nav>
      <div id="left-nav">
        <button onClick={() => navigate("/")}>
          <img src="/image/logo.svg" alt="" />
          EPICURE
        </button>
        <NavLink
          to="/restaurant"
          className={({ isActive }) => (isActive ? "underline" : "not-active")}
        >
          Restaurant
        </NavLink>
        <NavLink
          to="/chefs"
          className={({ isActive }) => (isActive ? "underline" : "not-active")}
        >
          Chefs
        </NavLink>
      </div>
      <div id="right-nav">
        <div id="search">
          <input type="text" placeholder="Search for restaurant, Chefs" />
          {/* <button>
            <img src="/image/search.svg" alt="" />
          </button> */}
        </div>

        <button>
          <img src="/image/person.svg" alt="" />
        </button>
        <button>
          <img src="/image/shopping.svg" alt="" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

// <button onClick={() => navigate("/restaurant")}> <p>Restaurant</p> </button>
// <button onClick={() => navigate("/chefs")}> <p>Chefs</p> </button>
