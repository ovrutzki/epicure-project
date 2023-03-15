import express, { Request, Response } from "express";
import { getAllChefs, deleteChef, addingChef, editChef} from "../controllers/chefs.controller";

const chefRouter = express.Router();

chefRouter.get("/",getAllChefs );
chefRouter.delete("/",deleteChef );
chefRouter.post("/adding",addingChef );
chefRouter.post("/edit",editChef );


export default chefRouter