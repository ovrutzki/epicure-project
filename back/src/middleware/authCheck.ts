import { NextFunction, Request, Response } from "express";
import { UserModel } from "../models/users.model";

export const authCheck = (permissions: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        let token = req.headers.authorization?.split(' ')[1] ;
        const userRole =token && JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString()).role;
    if (permissions.includes(userRole)) {
        next();
    } else {
      return res.status(401).json("you don`t have permission for this action");
    }
  };
};

export const UserCheck = () =>{
  return async (req: Request, res: Response, next: NextFunction) => {
      let token = req.headers.authorization?.split(' ')[1] ;
        const user_id =token && JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString())._id;
       const user = await UserModel.findById(user_id);
       if(user){
        next()
       } else {
        return res.status(401).json("error while authorized");
      }
  }
}
