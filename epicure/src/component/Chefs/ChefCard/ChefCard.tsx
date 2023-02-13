import React from "react";
import "./ChefCard.css";
import data from "../../../epicure.json"


const ChefCard: React.FC = () => {
      return (<>
      <div id="main-chef">
        {data.chefs.map((chef,index:number) => (
            <section id="chef-section">
            <img src={chef.img} key={index} alt={chef.name}  />
            <h1>{chef.name}</h1>
            </section>
            ))}
      </div>

        </>
      )
    }

export default ChefCard;