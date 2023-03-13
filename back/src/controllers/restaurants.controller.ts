import { Request, Response } from "express";
import { getRestaurants, removeRestaurant } from "../services/restaurants.service";

export const getAllRestaurants = async (req: Request, res: Response) => {
  try {
    const restaurants = await getRestaurants();
    return res.status(200).json(restaurants);
  } catch (err: any) {
    console.log(err);
    throw err;
  }
};

export const deleteRestaurant = async (req: Request, res: Response) => {
  try {
    const restaurant = removeRestaurant(req.body)
    return res
    .status(200)
    .json({
      status: 200,
      data: restaurant,
      message: "Successfully Remove restaurant",
    });
} catch (err: any) {
  console.log(err);
  throw err;
}
};
