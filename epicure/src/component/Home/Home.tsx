import React from "react";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Popular from "../Popular/Popular";

const Home: React.FC=()=>{

    return(<>
        <Navbar />
        <Hero />
        <Popular />
    </>)

}

export default Home