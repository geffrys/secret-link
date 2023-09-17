import axios from "axios";

export const getTransportations = async () =>
  await axios.get("http://localhost:3000/api/v1/transports");

export const getTransportation= async (id) =>
  await axios.get(`http://localhost:3000/api/v1/transports/${id}`);

export const postTransportation = async (transports) =>
  await axios.post("http://localhost:3000/api/v1/transports", transports);

export const updateTransportation = async (id, newFields) =>
  await axios.put(`http://localhost:3000/api/v1/transports/${id}`, newFields);

export const deleteTransportation = async (id) =>
  await axios.delete(`http://localhost:3000/api/v1/transports/${id}`);
