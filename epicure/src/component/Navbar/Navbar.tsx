import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../GeneralStyle.css";
import "./navStyle.css";
import "../../fonts/helvetica/HelveticaNeue.ttf";
import { NavLink } from "react-router-dom";
import CartPopUp from "../CartapopUp/CartPopUp";
import { useSelector } from "react-redux";
import { IRootState } from "../../store/store/store";
const Navbar: React.FC = () => {
  const navigate:any = useNavigate();
  const [openCartModal, setOpenCartModal] = useState<boolean>(false);
  const amountInCart = useSelector((state:IRootState) => state.order.value.length)

  let cartRef = useRef<HTMLElement>()
  let cartButtonRef = useRef<HTMLElement>()
    useEffect(()=>{
        let handler = (event:any) =>{
            if(!cartRef?.current?.contains(event.target) && !cartButtonRef?.current?.contains(event.target)){
              setOpenCartModal(false)
              console.log(event.target)
            }
        }
        document.addEventListener("mousedown",handler)

        return () => {
          document.removeEventListener("mousedown",handler)
        }
    })

  return (
    <>
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
        </div>

        <button onClick={() => navigate("/log-in")} >
          <img src="/image/person.svg" alt="" />
        </button>
        <button id="shopping-icon" onClick={()=> setOpenCartModal(!openCartModal)}>
          <img src="/image/shopping.svg" alt="" />
          {amountInCart>0 && <div id="amount-in-cart">{amountInCart}</div>}
        </button>
      </div>
    </nav>
    {openCartModal && <CartPopUp refprops={cartRef} />}
    </>
  );
};

export default Navbar;

