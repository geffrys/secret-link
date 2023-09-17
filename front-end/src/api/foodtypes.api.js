import axios from "axios";

export const getFoodTypes = async () =>
  await axios.get("http://localhost:3000/api/v1/food");

export const getFoodType = async (id) =>
  await axios.get(`http://localhost:3000/api/v1/food/${id}`);

export const postFoodType = async (food) =>
  await axios.post("http://localhost:3000/api/v1/food", food);

export const updateFoodType = async (id, newFields) =>
  await axios.put(`http://localhost:3000/api/v1/food/${id}`, newFields);

export const deleteFoodType = async (id) =>
  await axios.delete(`http://localhost:3000/api/v1/food/${id}`);
