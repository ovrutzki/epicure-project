import express, { Request, Response } from "express";
import { getDishes, removeRestaurantDishes } from "../services/dishes.service";

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

  export const deleteRestaurantDishes = async (req: Request, res: Response) => {
    try {
      const dishes = removeRestaurantDishes(req.body)
      return res
      .status(200)
      .json({
        status: 200,
        data: dishes,
        message: "Successfully Remove restaurant Dishes",
      });
  } catch (err: any) {
    console.log(err);
    throw err;
  }
  };