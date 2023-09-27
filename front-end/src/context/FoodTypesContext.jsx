import { createContext, useContext, useState } from "react";
import {
  getFoodTypes,
  getFoodType,
  postFoodType,
  updateFoodType,
  deleteFoodType,
} from "../api/foodTypes.api";
import toast from "react-hot-toast";

const FoodTypesContext = createContext();

export const useFoodTypes = () => {
  const context = useContext(FoodTypesContext);
  if (!context) {
    throw new Error(
      "useFoodTypes debe estar dentro del proveedor FoodTypesContext"
    );
  }
  return context;
};

export const FoodTypesProvider = ({ children }) => {
  const [foodTypes, setFoodTypes] = useState([]);

  const getFoodTypesList = async () => {
    try {
      const res = await getFoodTypes();
      setFoodTypes(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const postFoodTypeData = async (data) => {
    try {
      await postFoodType(data);
      toast.success("Food Type Created successfully")
    } catch (error) {
      toast.success(error.response.data.message)
      console.log(error);
    }
  }
  const updateFoodTypeData = async (id, data) => {
    try {
      await updateFoodType(id, data);
      toast.success("FoodType status updated successfully")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <FoodTypesContext.Provider
      value={{
        foodTypes,
        getFoodTypesList,
        postFoodTypeData,
        updateFoodTypeData,
      }}
    >
      {children}
    </FoodTypesContext.Provider>
  );
};
