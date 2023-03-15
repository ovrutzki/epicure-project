import axios from "axios";

export const deleteChef = async (chefId: number) => {
    try {
      const deleteItem = await axios.delete("http://localhost:8000/api/chefs", {
        data: {
          _id: chefId,
        },
      });
      alert("chef deleted ");
    } catch (error: any) {
      alert(error.message);
      console.log(error);
    }
  };