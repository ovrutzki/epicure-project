import express, { Request, Response } from "express";
import { getAllDishes, deleteRestaurantDishes } from "../controllers/dishes.controller";

const dishRouter = express.Router();

dishRouter.get("/",getAllDishes );
dishRouter.delete("/",deleteRestaurantDishes );

export default dishRouter