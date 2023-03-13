import express, { Request, Response } from "express";
import { getDishes, removeRestaurantDishes, removeDish } from "../services/dishes.service";

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

  export const deleteDish = async (req: Request, res: Response) => {
    try {
      const dish = removeDish(req.body)
      return res
      .status(200)
      .json({
        status: 200,
        data: dish,
        message: "Successfully Remove dish",
      });
  } catch (err: any) {
    console.log(err);
    throw err;
  }
  };