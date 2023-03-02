import React from "react";
import "./SingleRest.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IRootState } from "../../../store/store/store";
import Card from "../../Card/Card";
import DishesRender from "../DishesRender/DishesRender";
import Navbar from "../../Navbar/Navbar";

const SingleRest: React.FC<any> = (props) => {
  let { restName } = useParams();
  const restArray = useSelector((state: IRootState) => state.restaurants.value);
  let restIndex = restArray.findIndex((e: any) => e.name === restName);
  let d = new Date();
  const specificRest = restArray[restIndex]
  return (
    <>
      <Navbar />
      <div id="main">
        <Card
          class="single-rest"
          img={specificRest.img}
          name={specificRest.name}
          chef={specificRest.chef} id={specificRest.id}
          navigatePath = {""}
        />
        {specificRest.openDays.findIndex((e) => e === d.getDay()) !==
          -1 &&
        specificRest.openHours[0] < d.getHours() &&
        specificRest.openHours[1] > d.getHours() ? (
          <div>
            <img className="open-now" src="/image/icons/open now.svg" />
          </div>
        ) : null}
        <DishesRender restName={restName} />
      </div>
    </>
  );
};

export default SingleRest;
