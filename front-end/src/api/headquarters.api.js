import axios from "axios";

export const getHeadquarters = async () =>
  await axios.get("http://localhost:3000/api/v1/headquarter");

export const postHeadquarter = async (headquarter) =>
  await axios.post("http://localhost:3000/api/v1/headquarter", headquarter);

