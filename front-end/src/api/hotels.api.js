import axios from "axios";

export const getHotels = async () =>
  await axios.get("http://localhost:3000/api/v1/hotels");

export const getHotel = async (id) =>
  await axios.get(`http://localhost:3000/api/v1/hotels/${id}`);

export const postHotel = async (hotel) =>
  await axios.post("http://localhost:3000/api/v1/hotels", hotel);

export const updateHotel = async (id, newFields) =>
  await axios.put(`http://localhost:3000/api/v1/hotels/${id}`, newFields);

export const deleteHotel = async (id) =>
  await axios.delete(`http://localhost:3000/api/v1/hotels/${id}`);
