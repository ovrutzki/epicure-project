import express, { Request, Response } from "express";
import { newUser, getAllUsers } from "../controllers/users.controller";

const userRouter = express.Router();

userRouter.get("/",getAllUsers );

userRouter.post("/",newUser );

export default userRouter