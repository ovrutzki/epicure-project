import express, { Request, Response } from "express";
import { getAllChefs, deleteChef } from "../controllers/chefs.controller";

const chefRouter = express.Router();

chefRouter.get("/",getAllChefs );
chefRouter.delete("/",deleteChef );


export default chefRouter