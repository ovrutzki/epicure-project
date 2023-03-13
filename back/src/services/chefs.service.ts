import { ChefsModal } from "../models/chefs.model";

export const getChefs = async () => {
    try {
      const Chefs = await ChefsModal.find();
      return Chefs;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };