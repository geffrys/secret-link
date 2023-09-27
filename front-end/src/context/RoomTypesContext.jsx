import { createContext, useContext, useState } from "react";
import {
  getRooms,
  getRoom,
  postRoom,
  updateRoom,
  deleteRoom,
} from "../api/roomtypes.api";
import { toast } from "react-hot-toast";

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

  const postRoomTypeData = async (data) => {
    try {
      await postRoom(data);
      toast.success("Room type created successfully")
      getRoomTypesList();
    } catch (error) {
      toast.error(error.response.data.message)
      console.log(error);
    }
  };

  const updateRoomTypeData = async (id, data) => {
    try {
      await updateRoom(id, data);
      toast.success("Room status updated successfully")
      getRoomTypesList();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <RoomTypesContext.Provider
      value={{
        roomTypes,
        getRoomTypesList,
        postRoomTypeData,
        updateRoomTypeData,
      }}
    >
      {children}
    </RoomTypesContext.Provider>
  );
};
