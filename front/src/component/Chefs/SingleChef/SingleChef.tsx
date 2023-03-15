import React, { useEffect, useState } from "react";
import "./SingleChef.css";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { IRestaurants, IRootState } from "../../../store/store/store";
import Card from "../../Card/Card";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { ICard, IChefCard } from "../../../interFaces/interFaces";
import axios from "axios";

const SingleChef: React.FC<IChefCard> = (props) => {
  const navigate = useNavigate();
  const chefArray = useSelector((state: IRootState) => state.chefs.value);
  const restArray = useSelector((state: IRootState) => state.restaurants.default);
  let { chefId } = useParams();
  let chefIndex = chefArray.findIndex(
    (chef: IChefCard) => chef.id === Number(chefId)
  );
  const specificChef = chefArray[chefIndex];
  const [openAddingModal, setOpenAddingModal] = useState<boolean>(false);
  const chefRestaurants: (IRestaurants | ICard)[] = [];
  useEffect(() => {}, []);
  for (let i = 0; i < restArray.length; i++) {
    for (let j = 0; j < specificChef.restaurant.length; j++) {
      if (restArray[i].id === specificChef.restaurant[j]) {
        chefRestaurants.push(restArray[i]);
      }
    }
  }
  const firstName: string[] | undefined = specificChef?.name.split(" ");

  //   ======
  // adding restaurant
  const pushingRestToBackend = async (
    restName: string,
    restLong: number,
    restLat: number,
    restChef: string,
    openHour: number,
    closeHour: number,
    openingDays: number[],
    openingYear: number,
    imageURL: string,
    rating:string
  ) => {
    try {
      const addingRest = await axios.post(
        "http://localhost:8000/api/restaurants/adding",
        {
          id: restArray.length + 1,
          name: restName,
          address: [restLong,restLat],
          chef: restChef,
          chefId:specificChef.id,
          openHours: [openHour,closeHour],
          openDays: openingDays,
          openYear: openingYear,
          img:imageURL,
          dishes: [],
          rating:`/image/rating/${rating}.svg`
        }
      );
      alert("restaurant added");
    } catch (err:any) {
        console.log(err.response.data);
        alert(err.response.data);
    }
  };
  const submitFunction = (e: any) => {
    e.preventDefault();
    let restName = e.target.elements[0].value;
    let restLong = Number(e.target.elements[1].value);
    let restLat = Number(e.target.elements[2].value);
    let restChef = e.target.elements[3].value;
    let openHour = Number(e.target.elements[4].value);
    let closeHour = Number(e.target.elements[5].value);
    let openingDays = e.target.elements[6].value.split(",").map((e: string) => Number(e));
    let openingYear = Number(e.target.elements[7].value);
    let imageURL = e.target.elements[8].value;
    let rating = e.target.elements[9].value;
    pushingRestToBackend(
      restName,
      restLong,
      restLat,
      restChef,
      openHour,
      closeHour,
      openingDays,
      openingYear,
      imageURL,
      rating
    );
  };

  return (
    <>
      <Navbar />
      <div id="chef-container">
        <div id="chef-details">
          <img src={specificChef.img} alt="" />
          <h1>{specificChef.name}</h1>
          <p>{specificChef.about}</p>
        </div>
        <h1>{firstName[0]}`s Restaurants:</h1>
        <div id="chef-restaurant">
          {chefRestaurants.map((rest: ICard, index: number) => (
            <Card
              key={index * 600}
              name={rest.name}
              img={rest.img}
              class="rest"
              id={rest.id}
              rating={rest.rating}
              chef={rest.chef}
              navigatePath={`/restaurant/${rest.id}`}
            />
          ))}
        </div>
        <button
          onClick={() => setOpenAddingModal(!openAddingModal)}
          id="add-rest-btn"
        >
          Add Restaurant
        </button>
        <button  id="delete-chef-btn">
          Delete Chef
        </button>
        {openAddingModal && (
          <div id="add-rest-modal">
            <div id="rest-details">
              <button
                id="close"
                onClick={() => setOpenAddingModal(!openAddingModal)}
              >
                X
              </button>
              <h1>Enter The Restaurant Details</h1>
              <form onSubmit={submitFunction} id="sign-details" action="">
                <label htmlFor="">Restaurant Name</label>
                <input
                  //   onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  name="rest-name"
                  placeholder="Enter The Restaurant Name"
                />
                <label htmlFor="">Address (longitude,latitude)</label>
                <input
                  //   onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  name="longitude"
                  placeholder="Enter The Restaurant longitude"
                />
                <input
                  //   onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  name="address"
                  placeholder="Enter The Restaurant latitude"
                />
                <label htmlFor="">Chef Name</label>
                <input
                  //   onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  name="chef"
                  placeholder="Enter Chef Name"
                />
                <label htmlFor="">Open Hours</label>
                <div id="hours-div">
                  <input
                    //   onChange={(e) => setPhone(e.target.value)}
                    type="text"
                    name="open"
                    placeholder="Opening"
                  />
                  <p>-</p>
                  <input
                    //   onChange={(e) => setPhone(e.target.value)}
                    type="text"
                    name="close"
                    placeholder="closing"
                  />
                </div>
                <label htmlFor="">Open Days</label>
                <input
                  //   onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  name="days"
                  placeholder="Sunday=0, Saturday=6 with coma"
                />
                <label htmlFor="">Open Years</label>
                <input
                  //   onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  name="Year"
                  placeholder="Enter The Opening Years"
                />
                <label htmlFor="">restaurant Image</label>
                <input
                  //   onChange={emailOnChange}
                  type="text"
                  name="image"
                  placeholder="Enter an Image URL Path"
                />
                <label htmlFor="">Restaurant Rating</label>
                <input
                  //   onChange={emailOnChange}
                  type="text"
                  name="rating"
                  placeholder="What is the restaurant rating?>"
                />
                <button id="submit-btn" type="submit">
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SingleChef;
