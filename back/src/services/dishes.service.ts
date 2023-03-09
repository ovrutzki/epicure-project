import { DishesModal } from "../models/dishes.model";

export const getDishes = async () => {
    try {
      const Dishes = await DishesModal.find();
      return Dishes;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };