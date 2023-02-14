import { configureStore } from "@reduxjs/toolkit";
import epiqureReducer from "../slicer/epicureSlicer";
import restaurantsReducer from "../slicer/restaurantSlicer";
import chefsReducer from "../slicer/chefsSlicer";
import dishesReducer from "../slicer/dishesSlicer";

export interface IRestaurants{
  id:number;
  name:string;
  address:number[];
  chef:string;
  chefId:number;
  openHours:number[];
  openDays:number[];
  openYear:number;
  img:string;
  dishes:string[];
  rating:string
}
export interface IChefs{
  id:number;
  name:string;
  restaurant:string[];
  aga:number;
  icons:string;
  img:string;
  about:string;
}
export interface IDishes{
  id:number;
  name:string;
  restaurantId:number;
  rating:string;
  time:string[];
  about:string;
  price:number;
  allergan:string[];
  icons:string[];
  sides:string[];
  changes:string[];
  img:string;
}
export interface IRestState {
  value: IRestaurants[]
}
export interface IChefState {
  value: IChefs[]
}
export interface IDishState {
  value: IDishes[]
}

export interface IRootState{
  chefs:IChefState;
  restaurants:IRestState;
  dishes:IDishState;
}

export default configureStore({
  reducer: {
    epicure: epiqureReducer,
    restaurants: restaurantsReducer,
    chefs: chefsReducer,
    dishes: dishesReducer,
  },
});
