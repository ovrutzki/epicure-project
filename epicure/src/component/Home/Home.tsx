import React from "react";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import PopularDish from "../Popular/PopularDish";
import PopularRest from "../Popular/PopularRest";


const Home: React.FC=()=>{

    return(<>
        <Navbar />
        <Hero />
        <PopularRest />
        <PopularDish />
    </>)

}

export default Home