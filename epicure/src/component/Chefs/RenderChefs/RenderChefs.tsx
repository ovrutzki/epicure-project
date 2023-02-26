import React from "react";
import "./RenderChefs.css";
import data from "../../../epicure.json";
import { IChefCard } from "../../../interFaces/interFaces";
import {useSelector} from "react-redux"
import { IRootState } from "../../../store/store/store";
import { useNavigate } from "react-router-dom";

const RenderChefs: React.FC = () => {
  const chefsArray = useSelector(
    (state:IRootState) => state.chefs.value
  )
  const navigate = useNavigate();
  const onCardClick = (navigatePath?: string) => {
    navigate(navigatePath ? navigatePath : "");
  };
  return (
    <>
      <div  id="main-chef">
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

export default RenderChefs;