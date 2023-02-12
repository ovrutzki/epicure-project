import React from "react";
import Card from "../Card/Card";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Popular from "../Popular/popular";
import PopularDish from "../Popular/PopularDish";
import PopularRest from "../Popular/PopularRest";
import data from '../../epicure.json'
import Icons from "./Icons/icons";
import WeekChef from "./WeekChef/WeekChef";

const Home: React.FC=()=>{

    return(<>
        <Navbar />
        <Hero />
        <Popular  kind ={data.restaurant}/>
        <Popular kind ={data.dishes} />
        <Icons />
        <WeekChef />
    </>)

}

export default Home