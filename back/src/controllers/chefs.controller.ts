import express, { Request, Response } from "express";
import { getChefs, removeChef } from "../services/chefs.service";

export const getAllChefs = async (req: Request, res: Response) => {
    try {
      const chefs = await getChefs();
      return res
        .status(200)
        .json(chefs);
    } catch (err: any) {
      console.log(err);
      throw err;
    }
  };

  export const deleteChef = async (req: Request, res: Response) => {
    try {
      const chef = removeChef(req.body);
      return res.status(200).json({
        status: 200,
        data: chef,
        message: "Successfully Remove chef",
      });
    } catch (err: any) {
      console.log(err);
      throw err;
    }
  };