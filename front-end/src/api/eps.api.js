import axios from "axios";

export const getEps = async () =>
  await axios.get("http://localhost:3000/api/v1/eps");

export const postEps = async (eps) =>
  await axios.post("http://localhost:3000/api/v1/eps", eps);
