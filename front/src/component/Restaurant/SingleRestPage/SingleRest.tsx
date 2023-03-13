import React from "react";
import "./SingleRest.css";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { IRootState } from "../../../store/store/store";
import Card from "../../Card/Card";
import DishesRender from "../DishesRender/DishesRender";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import axios from "axios";

const SingleRest: React.FC<any> = (props) => {
  const navigate = useNavigate();

  let { restName } = useParams();
  const restArray = useSelector((state: IRootState) => state.restaurants.value);
  let restIndex = restArray.findIndex((e: any) => e.name === restName);
  let d = new Date();
  const specificRest = restArray[restIndex];

  const deleteRestaurant = async (restId: number) => {
    try {
      const deleteItem = await axios.delete(
        "http://localhost:8000/api/restaurants",
        {
          data: {
            _id: restId,
          },
        }
      );
        alert("delete ")
    } catch (error: any) {
      alert(error.message);
      console.log(error);
    }
  };
  const deleteRestaurantDishes = async (restId: number) => {
    try {
      const deleteItem = await axios.delete(
        "http://localhost:8000/api/dishes",
        {
          data: {
            restaurantId: restId,
          },
        }
      );
        alert("dishes delete")
    } catch (error: any) {
      alert(error.message);
      console.log(error);
    }
  };
  const afterDelete = () => {
    navigate("/");
    // setGreeting(false);
  };

  const handelDelete = () =>{
    deleteRestaurantDishes(specificRest.id);
    deleteRestaurant(specificRest._id);
    setTimeout(afterDelete, 3000);
  }

  return (
    <>
      <Navbar />
      <div id="main">
        <button
          onClick={handelDelete}
          id="delete-rest-btn"
        >
          Delete Restaurant
        </button>
        <Card
          class="single-rest"
          img={specificRest.img}
          name={specificRest.name}
          chef={specificRest.chef}
          id={specificRest.id}
          navigatePath={""}
        />
        {specificRest.openDays.findIndex((e) => e === d.getDay()) !== -1 &&
        specificRest.openHours[0] < d.getHours() &&
        specificRest.openHours[1] > d.getHours() ? (
          <div className="open-now-div">
            <img className="open-now" src="/image/icons/open now.svg" />
          </div>
        ) : null}
        <DishesRender restName={restName} />
      </div>
      <Footer />
    </>
  );
};

export default SingleRest;
