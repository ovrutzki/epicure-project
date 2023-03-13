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

  export const removeRestaurantDishes = async (restId:any) => {
    const idInteger = restId.restaurantId
    try {
      await DishesModal.deleteMany({restaurantId: idInteger});
      return DishesModal.find();
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  export const removeDish = async (dishId: number) => {
    console.log(dishId);
    try {
      await DishesModal.findByIdAndDelete(dishId);
    } catch (err) {
      console.log(err);
      throw err;
    }
  };