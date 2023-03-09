import express, { Request, Response } from "express";
import { getAllRestaurants } from "../controllers/restaurants.controller";

const restaurantRouter = express.Router();

restaurantRouter.get("/",getAllRestaurants );

export default restaurantRouter