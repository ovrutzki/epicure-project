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

export const removeRestaurant = async (restId: number) => {
  try {
    await RestaurantsModal.findByIdAndDelete(restId);
  } catch (err) {
    console.log(err);
    throw err;
  }
};
