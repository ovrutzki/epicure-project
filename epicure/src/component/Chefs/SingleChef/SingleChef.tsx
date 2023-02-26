import React from "react";
import "./SingleChef.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IRootState } from "../../../store/store/store";
import Card from "../../Card/Card";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { ICard, IChefCard } from "../../../interFaces/interFaces";

const SingleChef:  React.FC<IChefCard> = (props) => {
    const chefArray = useSelector((state: IRootState) => state.chefs.value)
    const restArray = useSelector((state: IRootState) => state.restaurants.value)
    let { chefName } = useParams();
    let chefIndex = chefArray.findIndex((chef: IChefCard) => chef.name === chefName);
    const specificChef = chefArray[chefIndex];
    const chefRestaurants = [];
    for (let i = 0; i < restArray.length; i++){
        for(let j=0; j< specificChef.restaurant.length; j++){
            if(restArray[i].id === specificChef.restaurant[j]){
                chefRestaurants.push(restArray[i])
            }
        }
    }
    const firstName:string[] | undefined = specificChef?.name.split(" ")

    return (<>
    <Navbar />
    <div id="chef-container">
        <div id="chef-details">
            <img src={specificChef.img} alt="" />
            <h1>{specificChef.name}</h1>
            <p>{specificChef.about}</p>
        </div>
            <h1>{firstName[0]}`s Restaurants:</h1>
        <div id="chef-restaurant">
            {chefRestaurants.map((rest:ICard, index:number) => (
                <>
                <Card
                  key={index}
                  name={rest.name}
                  img={rest.img}
                  class="rest"
                  id={rest.id}
                  rating={rest.rating}
                  chef={rest.chef}
                  navigatePath={`/restaurant/${rest.name}`}
                  />
                </>
            ))}
        </div>
    </div>
        
    <Footer />
    </>)

}

export default SingleChef