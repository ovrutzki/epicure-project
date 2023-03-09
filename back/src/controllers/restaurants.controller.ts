import  { Request, Response } from "express";
import { getRestaurants } from "../services/restaurants.service";

export const getAllRestaurants = async (req: Request, res: Response) => {
    try {
      const restaurants = await getRestaurants();
      return res
        .status(200)
        .json(restaurants);
    } catch (err: any) {
      console.log(err);
      throw err;
    }
  };