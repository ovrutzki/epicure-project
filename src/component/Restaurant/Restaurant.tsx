import React from "react";
import Filter from "../Filter/Filter";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import RenderRest from "./RenderRest/RenderRest";

const Restaurant: React.FC=()=>{

    return(<>
        <Navbar />
        <Filter toRender='rest'/>
        <RenderRest />
        <Footer />
    </>)

}

export default Restaurant