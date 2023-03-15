import express, { Request, Response } from "express";
import { getAllDishes, deleteRestaurantDishes, deleteDish, addingDish, editDish } from "../controllers/dishes.controller";

const dishRouter = express.Router();

dishRouter.get("/",getAllDishes );
dishRouter.delete("/delete/restaurant-dishes",deleteRestaurantDishes );
dishRouter.delete("/delete/oneDish",deleteDish);
dishRouter.post("/adding",addingDish);
dishRouter.post("/edit",editDish);

export default dishRouter