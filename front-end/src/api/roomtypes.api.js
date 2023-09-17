import axios from "axios";

export const getRooms = async () =>
  await axios.get("http://localhost:3000/api/v1/rooms");

export const getRoom = async (id) =>
  await axios.get(`http://localhost:3000/api/v1/rooms/${id}`);

export const postRoom = async (room) =>
  await axios.post("http://localhost:3000/api/v1/rooms", room);

export const updateRoom = async (id, newFields) =>
  await axios.put(`http://localhost:3000/api/v1/rooms/${id}`, newFields);

export const deleteRoom = async (id) =>
  await axios.delete(`http://localhost:3000/api/v1/rooms/${id}`);
