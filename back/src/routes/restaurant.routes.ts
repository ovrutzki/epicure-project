import express, { Request, Response } from "express";
import { getAllRestaurants, deleteRestaurant, addingRestaurant, editRestaurant } from "../controllers/restaurants.controller";

const restaurantRouter = express.Router();

restaurantRouter.get("/",getAllRestaurants );
restaurantRouter.delete("/",deleteRestaurant );
restaurantRouter.post("/adding",addingRestaurant );
restaurantRouter.post("/edit",editRestaurant );

export default restaurantRouter