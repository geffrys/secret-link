import axios from "axios";

export const getItineraries = async () =>
  await axios.get("http://localhost:3000/api/v1/itineraries");

export const getItinerary = async (id) =>
  await axios.get(`http://localhost:3000/api/v1/itineraries/${id}`);

export const postItinerary = async (itinerary) =>
  await axios.post("http://localhost:3000/api/v1/itineraries", itinerary);

export const updateItinerary = async (id, newFields) =>
  await axios.put(`http://localhost:3000/api/v1/itineraries/${id}`, newFields);

export const deleteItinerary = async (id) =>
  await axios.delete(`http://localhost:3000/api/v1/itineraries/${id}`);
