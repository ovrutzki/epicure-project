import { IUser, UserModel } from "../models/users.model";
import { Request, Response } from "express";

export const getUsers = async () => {

   const allUsers = await UserModel.find()
    .select('-password')
    .exec()
    .then(users => {
      return users
    })
    .catch((err) =>{
      console.log(err);
      throw err;
    })
  return allUsers
};

export const registerNewUser = async (user: IUser) => {
  try {
      const _user = new UserModel(user);
      await _user.save();
      return _user;
    }
   catch (err) {
    console.log(err);
    throw err;
  }
};
