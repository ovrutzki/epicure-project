import React from "react";
import "./ChefCard.css";
import data from "../../../epicure.json";
import { IChefCard } from "../../../interFaces/interFaces";
import {useSelector} from "react-redux"
import { IRootState } from "../../../store/store/store";

const ChefCard: React.FC = () => {
  const chefsArray = useSelector(
    (state:IRootState) => state.chefs.value
  )
  return (
    <>
      <div id="main-chef">
        {chefsArray.map((chef: IChefCard, index: number) => (
          <section id="chef-section">
            <img src={chef.img} key={index} alt={chef.name} />
            <h1>{chef.name}</h1>
          </section>
        ))}
      </div>
    </>
  );
};

export default ChefCard;
