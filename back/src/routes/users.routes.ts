import express, { Request, Response } from "express";
import { newUser, getAllUsers, loginUser } from "../controllers/users.controller";

const userRouter = express.Router();

userRouter.get("/",getAllUsers );

userRouter.post("/register",newUser );

userRouter.post("/login",loginUser );

export default userRouter