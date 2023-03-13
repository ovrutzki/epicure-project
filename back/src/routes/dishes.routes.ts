import express, { Request, Response } from "express";
import { getAllDishes, deleteRestaurantDishes, deleteDish } from "../controllers/dishes.controller";

const dishRouter = express.Router();

dishRouter.get("/",getAllDishes );
dishRouter.delete("/",deleteRestaurantDishes );
dishRouter.delete("/oneDish",deleteDish);

export default dishRouter