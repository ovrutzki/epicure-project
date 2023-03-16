import { NextFunction, Request, Response } from "express";

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
