import express, { Request, Response } from "express";
import { getAllChefs } from "../controllers/chefs.controller";

const chefRouter = express.Router();

chefRouter.get("/",getAllChefs );

export default chefRouter