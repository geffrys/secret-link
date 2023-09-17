import axios from "axios";

export const getDestinations = async () =>
  await axios.get("http://localhost:3000/api/v1/destinations");

export const getDestination = async (id) =>
  await axios.get(`http://localhost:3000/api/v1/destinations/${id}`);

export const postDestination = async (destination) =>
  await axios.post("http://localhost:3000/api/v1/destinations", destination);

export const updateDestination = async (id, newFields) =>
  await axios.put(`http://localhost:3000/api/v1/destinations/${id}`, newFields);

export const deleteDestination = async (id) =>
  await axios.delete(`http://localhost:3000/api/v1/destinations/${id}`);
