import express, { Request, Response } from "express";
import { getDishes } from "../services/dishes.service";

export const getAllDishes = async (req: Request, res: Response) => {
    try {
      const dishes = await getDishes();
      return res
        .status(200)
        .json(dishes);
    } catch (err: any) {
      console.log(err);
      throw err;
    }
  };