import React from "react";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Popular from "../Popular/popular";
import data from '../../epicure.json'
import Icons from "./Icons/icons";
import WeekChef from "./WeekChef/WeekChef";
import AboutUs from "./AboutUs/AboutUs";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

const Home: React.FC=()=>{
    const navigate = useNavigate();

    return(<>
        <Navbar />
        <Hero />
        <Popular  kind ={data.restaurant} header="popular restaurant in epicure:"/>
        <Popular kind ={data.dishes} header="SIGNATURE DISH OF:" />
        <Icons />
        <WeekChef />
        <AboutUs />
        <Footer />
    </>)

}

export default Home