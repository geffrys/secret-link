import { createContext, useContext, useEffect, useState } from "react";
import {
  getPackages,
  getPackage,
  postPackage,
  updatePackage,
  deletePackage,
} from "../api/packages.api";
import { set } from "react-hook-form";

export const PackagesContext = createContext();

export const usePackages = () => {
  const context = useContext(PackagesContext);
  if (!context) {
    throw new Error("usePackages must be within a PackagesProvider");
  }
  return context;
};

export const PackagesProvider = ({ children }) => {
  const [packages, setPackages] = useState(null);
  const [errors, setErrors] = useState([]);
  const [response, setResponse] = useState(null)

  const getPackagesList = async () => {
    try {
      const res = await getPackages();
      setPackages(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPackagesList();
  }, []);

  const getPackageById = async (id) => {
    try {
      const res = await getPackage(id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const createPackage = async (data) => {
    try {
      const res = await postPackage(data);
      setResponse(res.data.message)
      return res.data;
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const updatePackageById = async (id, data) => {
    try {
      const res = await updatePackage(id, data);
      setResponse(res.data.message)
      return res.data;
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const deletePackageById = async (id) => {
    try {
      const res = await deletePackage(id);
      return res.data;
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  return (
    <PackagesContext.Provider
      value={{
        packages,
        errors,
        response,
        setResponse,
        getPackagesList,
        getPackageById,
        createPackage,
        updatePackageById,
        deletePackageById,
      }}
    >
      {children}
    </PackagesContext.Provider>
  );
};

export default PackagesContext;
