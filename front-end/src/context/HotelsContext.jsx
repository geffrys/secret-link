import { createContext, useContext, useState } from "react";
import {
  getHotels,
  getHotel,
  postHotel,
  updateHotel,
  deleteHotel,
} from "../api/hotels.api";

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

  return (
    <HotelsContext.Provider
      value={{
        hotels,
        getHotelsList,
      }}
    >
      {children}
    </HotelsContext.Provider>
  );
};
