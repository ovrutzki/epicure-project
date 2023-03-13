import express, { Request, Response } from "express";
import { getAllRestaurants, deleteRestaurant } from "../controllers/restaurants.controller";

const restaurantRouter = express.Router();

restaurantRouter.get("/",getAllRestaurants );
restaurantRouter.delete("/",deleteRestaurant );

export default restaurantRouter