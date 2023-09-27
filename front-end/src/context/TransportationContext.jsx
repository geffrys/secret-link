import { useContext, useState, createContext, useEffect } from "react";
import {
  getTransportations,
  getTransportation,
  postTransportation,
  updateTransportation,
  deleteTransportation,
} from "../api/transportation.api";
import toast from "react-hot-toast";

const TransportationContext = createContext();

export const useTransportation = () => {
  const context = useContext(TransportationContext);
  if (!context) {
    throw new Error(
      "useTransportation must be within a TransportationProvider"
    );
  }
  return context;
};

export const TransportationProvider = ({ children }) => {
  const [transportation, setTransportation] = useState(null);

  const getTransportationsList = async () => {
    try {
      const res = await getTransportations();
      setTransportation(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const postTransportationData = async (data) => {
    try {
      await postTransportation(data);
      toast.success("Transport created successfully")
      getTransportationsList();
    } catch (error) {
      toast.error(error.response.data.error);
      console.log(error);
    }
  };

  const updateTransportationData = async (id, data) => {
    try {
      await updateTransportation(id, data);
      toast.success("Transport status updated successfully")
      getTransportationsList();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTransportationsList();
  }, []);

  return (
    <TransportationContext.Provider
      value={{
        transportation,
        getTransportationsList,
        postTransportationData,
        updateTransportationData,
      }}
    >
      {children}
    </TransportationContext.Provider>
  );
};
