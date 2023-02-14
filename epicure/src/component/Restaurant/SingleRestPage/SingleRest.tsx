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
  console.log(restName);
  const restArray = useSelector((state: IRootState) => state.restaurants.value);
  const dishArray = useSelector((state: IRootState) => state.dishes.value);
  let restIndex = restArray.findIndex((e: any) => e.name === restName);
  let d = new Date();
  return (
    <>
      <Navbar />
      <div id="main">
        <Card
          class="single-rest"
          img={restArray[restIndex].img}
          name={restArray[restIndex].name}
          chef={restArray[restIndex].chef}
          rating={undefined}
          //   onClick= {}
        />
        {restArray[restIndex].openDays.findIndex((e) => e === d.getDay()) !==
          -1 &&
        restArray[restIndex].openHours[0] < d.getHours() &&
        restArray[restIndex].openHours[1] > d.getHours() ? (
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
