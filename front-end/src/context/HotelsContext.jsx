import { createContext, useContext, useState } from "react";
import {
  getHotels,
  getHotel,
  postHotel,
  updateHotel,
  deleteHotel,
} from "../api/hotels.api";
import toast from "react-hot-toast";

export const HotelsContext = createContext();

export const useHotels = () => {
  const context = useContext(HotelsContext);
  if (!context) {
    throw new Error("useHotels debe estar dentro del proveedor HotelsContext");
  }
  return context;
};

export const HotelsProvider = ({ children }) => {
  const [hotels, setHotels] = useState([]);

  const getHotelsList = async () => {
    try {
      const res = await getHotels();
      setHotels(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const postHotelById = async (id, data) => {
    try {
      await postHotel(id, data);
      toast.success("Hotel created successfully");
    } catch (error) {
      toast.error(error.response.data.error);
      console.log(error);
    }
  };

  const updateHotelById = async (id, data) => {
    try {
      await updateHotel(id, data);
      toast.success("Hotel updated successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <HotelsContext.Provider
      value={{
        hotels,
        getHotelsList,
        postHotelById,
        updateHotelById,
      }}
    >
      {children}
    </HotelsContext.Provider>
  );
};
