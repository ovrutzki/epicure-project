import axios from "axios";
import {
  AllInOne,
  IChefs,
  IDishes,
  IRestaurants,
} from "../../store/store/store";

type Props = IRestaurants | IDishes | IChefs;
export const pushingChefToBackend = async (values: AllInOne) => {
  const id = values.id;
  const name = values.name;
  const restaurant = values.restaurant?.map(Number);
  const age = values.age;
  const img = values.img;
  const about = values.about;

  try {
    const addingChef = await axios.post(
      "http://localhost:8000/api/chefs/adding",
      {
        id: id,
        name: name,
        restaurant: restaurant,
        age: age,
        img: img,
        about: about,
      }
    );
    alert("chef added");
  } catch (err: any) {
    console.log(err.response.data);
    alert(err.response.data);
  }
};
