import React from "react";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Popular from "../Popular/popular";
import data from '../../epicure.json'
import Icons from "./Icons/icons";
import WeekChef from "./WeekChef/WeekChef";
import AboutUs from "./AboutUs/AboutUs";
import Footer from "../Footer/Footer";

const Home: React.FC=()=>{

    return(<>
        <Navbar />
        <Hero />
        <Popular  kind ={data.restaurant}/>
        <Popular kind ={data.dishes} />
        <Icons />
        <WeekChef />
        <AboutUs />
        <Footer />
    </>)

}

export default Home