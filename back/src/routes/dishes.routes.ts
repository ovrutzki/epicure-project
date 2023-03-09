import express, { Request, Response } from "express";
import { getAllDishes } from "../controllers/dishes.controller";

const dishRouter = express.Router();

dishRouter.get("/",getAllDishes );

export default dishRouter