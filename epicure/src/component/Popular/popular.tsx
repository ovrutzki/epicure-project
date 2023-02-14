import React, { useState, useEffect } from "react";
import "./Popular.css";
import { ICard } from "../../interFaces/interFaces";
import Card from "../Card/Card";
import { useNavigate } from "react-router-dom";

const Popular: React.FC<any> = (props: any) => {
  const navigate = useNavigate()
  const kind: ICard[] = props.kind;
  const popular = kind.filter((best) => best.rating?.includes("5"));
  console.log(popular);

  return (
    <>
      <div className="popular">
        {popular[0].chef ? (
          <h1>popular restaurant in epicure:</h1>
        ) : (
          <h1>SIGNATURE DISH OF:</h1>
        )}
        <div className="three-div">
          {popular.map((card: ICard, index: number) => (
            <Card
              class={card.price ? "dish" : "rest"}
              key={index}
              img={card.img}
              name={card.name}
              icons={card.icons}
              about={card.about}
              price={card.price}
              chef={card.chef}
              rating={card.rating}
            />
          ))}
        </div>
        {popular[0].chef ? (
          <button onClick={() => navigate('/restaurant')}>
            <img src="/image/all-restaurant.svg" alt="arrow" />
          </button>
        ) : null}
      </div>
    </>
  );
};

export default Popular;