import React, { ReactNode, useState } from "react";
import { useSelector } from "react-redux";
import { IChefCard } from "../../interFaces/interFaces";
import { IDishes, IDishState, IRestaurants, IRootState } from "../../store/store/store";
import FilterButtons from "../Buttons/FilterButtons/Buttons";
import Filter from "../Filter/Filter";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

import "./AdminSystem.css";

const AdminSystem: React.FC = () => {
  const dishesArray = useSelector(
    (state: IRootState) => state.dishes.allDishes
  );
  const chefsArray = useSelector((state: IRootState) => state.chefs.value);
  const restaurantsArray = useSelector(
    (state: IRootState) => state.restaurants.default
  );
  const [collection, setCollection] = useState<string>("");

  return (
    <>
      <Navbar />
      <div id="admin-container">
        <div id="filter-div">
          <FilterButtons name="Chefs" onClick={() => setCollection("Chefs")} />
          <FilterButtons
            name="Restaurants"
            onClick={() => setCollection("Restaurants")}
          />
          <FilterButtons
            name="Dishes"
            onClick={() => setCollection("Dishes")}
          />
        </div>
        {collection === "Chefs" && (
          <div id="chefs-data">
            <table>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>RESTAURANTS</th>
                <th>AGE</th>
                <th>IMAGE</th>
                <th>ABOUT</th>
                <th>DELETE</th>
                <th>UPDATE</th>
              </tr>
              {chefsArray.map((chef: IChefCard, index: number) => {
                return (
                  <tr key={index*700}>
                    <td>{chef.id}</td>
                    <td>{chef.name}</td>
                    <td>{chef.restaurants}</td>
                    <td>{chef.age}</td>
                    <td><a href={chef.img}>{chef.img}</a></td>
                    <td>{chef.about}</td>
                    <td><img src="/image/icons/delete.svg" alt="delete"/></td>
                    <td><img src="/image/icons/edit.svg" alt="edit"/></td>
                  </tr>
                );
              })}
            </table>
          </div>
        )}
        {collection === "Restaurants" && <div id="restaurants-data">
        <table>
              <tr >
                <th>ID</th>
                <th>NAME</th>
                <th>ADDRESS</th>
                <th>CHEF</th>
                <th>CHEF ID</th>
                <th>OPENING</th>
                <th>CLOSING</th>
                <th>IMAGE</th>
                <th>DISHES</th>
                <th>RATING</th>
                <th>DELETE</th>
                <th>UPDATE</th>
              </tr>
              {restaurantsArray.map((rest: IRestaurants, index: number) => {
                return (
                  <tr key={index*800}>
                    <td>{rest.id}</td>
                    <td>{rest.name}</td>
                    <td>{rest.address}</td>
                    <td>{rest.chef}</td>
                    <td>{rest.chefId}</td>
                    <td>{rest.openHours[0]}</td>
                    <td>{rest.openHours[1]}</td>
                    <td><a href={rest.img}>{rest.img}</a></td>
                    <td>{dishesArray.filter((dish) => dish.restaurantId === rest.id).map((dish) => `${dish.id},`)}</td>
                    <td>{"★".repeat(Number(rest.rating.split('')[14]))}</td>
                    <td><img src="/image/icons/delete.svg" alt="delete"/></td>
                    <td><img src="/image/icons/edit.svg" alt="edit"/></td>
                  </tr>
                );
              })}
            </table>
            </div>}
        {collection === "Dishes" && <div id="dishes-data">
        <table>
              <tr >
                <th>ID</th>
                <th>NAME</th>
                <th>REST ID</th>
                <th>RATING</th>
                <th>TIME</th>
                <th>ABOUT</th>
                <th>PRICE</th>
                <th>ALLERGEN</th>
                <th>ICONS</th>
                <th>SIDES</th>
                <th>CHANGES</th>
                <th>IMAGE</th>
                <th>DELETE</th>
                <th>UPDATE</th>
              </tr>
              {dishesArray.map((dish: IDishes, index: number) => {
                return (
                  <tr key={index*900}>
                    <td>{dish.id}</td>
                    <td>{dish.name}</td>
                    <td>{dish.restaurantId}</td>
                    <td>{dish.rating}</td>
                    <td>{dish.time.join(", ")}</td>
                    <td>{dish.about}</td>
                    <td>{dish.price}</td>
                    <td>{dish.allergan}</td>
                    <td>{dish.icons.map((icon)=> (<img src={icon} />))}</td>
                    <td>{dish.sides.join(", ")}</td>
                    <td>{dish.changes.join(", ")}</td>
                    <td><a href={dish.img}>{dish.img}</a></td>
                    <td><img src="/image/icons/delete.svg" alt="delete"/></td>
                    <td><img src="/image/icons/edit.svg" alt="edit"/></td>
                  </tr>
                );
              })}
            </table>
            </div>}
      </div>

      <Footer />
    </>
  );
};

export default AdminSystem;
