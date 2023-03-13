import express, { Request, Response } from "express";
import {
  newUser,
  getAllUsers,
  loginUser,
  validateToken,
} from "../controllers/users.controller";
import extractJWT from "../middleware/extractJWT";

const userRouter = express.Router();

userRouter.get("/validate", extractJWT, validateToken);

userRouter.post("/register", newUser);

userRouter.post("/login", loginUser);

userRouter.get("/get/all", getAllUsers);

export default userRouter;
