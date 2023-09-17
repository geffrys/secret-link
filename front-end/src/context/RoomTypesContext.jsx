import { createContext, useContext, useState } from "react";
import {
  getRooms,
  getRoom,
  postRoom,
  updateRoom,
  deleteRoom,
} from "../api/roomtypes.api";

export const RoomTypesContext = createContext();

export const useRoomTypes = () => {
  const context = useContext(RoomTypesContext);
  if (!context) {
    throw new Error(
      "useRoomTypes debe estar dentro del proveedor RoomTypesContext"
    );
  }
  return context;
};

export const RoomTypesProvider = ({ children }) => {
  const [roomTypes, setRoomTypes] = useState([]);

  const getRoomTypesList = async () => {
    try {
      const res = await getRooms();
      setRoomTypes(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <RoomTypesContext.Provider
      value={{
        roomTypes,
        getRoomTypesList,
      }}
    >
      {children}
    </RoomTypesContext.Provider>
  );
};
