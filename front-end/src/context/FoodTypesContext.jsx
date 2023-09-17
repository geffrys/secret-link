import { createContext, useContext, useState } from "react";
import {
  getFoodTypes,
  getFoodType,
  postFoodType,
  updateFoodType,
  deleteFoodType,
} from "../api/foodTypes.api";

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
  return (
    <FoodTypesContext.Provider
      value={{
        foodTypes,
        getFoodTypesList,
      }}
    >
      {children}
    </FoodTypesContext.Provider>
  );
};
