import { createContext, useContext, useState } from "react";
import { getHeadquarters, postHeadquarter } from "../api/headquarters.api";

const HeadquarterContext = createContext();

export const useHeadquarter = () => {
  const context = useContext(HeadquarterContext);
  if (!context) {
    throw new Error("useHeadquarter must be used within a HeadquarterProvider");
  }
  return context;
};

export const HeadquarterProvider = ({ children }) => {
  const [headquarter, setHeadquarter] = useState([]);

  const getHeadquarterList = async () => {
    try {
      const res = await getHeadquarters();
      setHeadquarter(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const postHeadquarters = async (data) => {
    try {
      const res = await postHeadquarter(data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <HeadquarterContext.Provider
      value={{
        headquarter,
        getHeadquarterList,
        postHeadquarters,
      }}
    >
      {children}
    </HeadquarterContext.Provider>
  );
};
