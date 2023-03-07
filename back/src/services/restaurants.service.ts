import { RestaurantsModal } from "../models/restaurants.model";

export const getRestaurants = async () => {
    try {
      const Restaurants = await RestaurantsModal.find();
      return Restaurants;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };