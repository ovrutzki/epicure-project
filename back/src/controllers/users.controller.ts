import { NextFunction, Request, Response } from "express";
import { getUsers, registerNewUser } from "../services/users.service";
import bcrypt from "bcrypt";
import { IUser, UserModel } from "../models/users.model";
import logging from "../config/logging";
import signJWT from "../function/signJWT";

const NAMESPACE = "user";

export const validateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logging.info(NAMESPACE, "token validate.");

  return res.status(200).json({
    message: "Authorized",
  }); 
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await getUsers();
    return res.status(200).json(users);
  } catch (err: any) {
    console.log(err);
    throw err;
  }
};

export const newUser = async (req: Request, res: Response) => {
  const first = req.body.first;
  const last = req.body.last;
  const address = req.body.address;
  const phone = req.body.phone;
  const email = req.body.email;
  const password = req.body.password;
  const allUsers: IUser[] = await getUsers();
  console.log("test ", req.body);
  try {
    if (!(first && last && address && phone && email && password)) {
      res.status(400).send("All inputs are require");
    }
    const oldUser = allUsers.find((user) => user.email === email);
    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    const encryptedPassword =
      password !== undefined ? await bcrypt.hash(password, 10) : "err";

    const user = {
      first: first,
      last: last,
      address: address,
      phone: phone,
      email: email,
      password: encryptedPassword,
    };
    const users = registerNewUser(user);
    return res.status(200).json({
      status: 201,
      data: user,
      // first: user.first,
      message: "Successfully Create User",
    });
  } catch (err) {
    console.log(err);
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const user = await UserModel.findOne({ email: email });
    console.log("hello " ,user);
    
    if (!user) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    } else {
      bcrypt.compare(password, user.password, (error, result) => {
        if (error) {
          logging.error(NAMESPACE, error.message, error);

          return res.status(401).json({
            message: "Unauthorized",
          });
        } else if (result) {
          signJWT(user, (_error, token) => {
            if (error) {
              return res.status(401).json({
                message: "Unauthorized",
                error: _error,
              });
            } else if (token) {
              return res.status(200).json({
                message: "Auth successful",
                token,
                user: user,
              });
            }
          });
        }
      });
    }
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
      error
    });
  }
};
