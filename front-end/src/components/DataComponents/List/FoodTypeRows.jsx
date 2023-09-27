import { useFoodTypes } from "../../../context/FoodTypesContext";
import { useEffect } from "react";

function PackagesRows() {
  const { foodTypes, getFoodTypesList, updateFoodTypeData } = useFoodTypes();

  const updateFood = (data) => {
    data.food_status = data.food_status === 1 ? 0 : 1;
    data.food_price = parseInt(data.food_price);
    updateFoodTypeData(data.id_food_type, data);
  };

  useEffect(() => {
    getFoodTypesList();
  });
  return (
    <>
      {foodTypes.map((food) => (
        <tr key={food.id_food_type}>
          <td>{food.id_food_type}</td>
          <td>{food.food_name}</td>
          <td>{food.food_description}</td>
          <td>
            {food.food_price.toLocaleString("es-CO", {
              style: "currency",
              currency: "COP",
            })}
          </td>
          <td className="rowsdatacheck" onClick={() => updateFood(food)}>
            {food.food_status === 1 ? "✔️" : "❌"}
          </td>
        </tr>
      ))}
    </>
  );
}

export default PackagesRows;
