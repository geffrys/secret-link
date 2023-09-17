import { createContext, useState, useContext } from "react";
import { getDocTypes } from "../api/doctypes.api";

export const DocTypesContext = createContext();

export const useDocTypes = () => {
  const context = useContext(DocTypesContext);
  if (!context) {
    throw new Error("useDocTypes must be used within a DocTypesProvider");
  }
  return context;
};

export const DocTypesProvider = ({ children }) => {
  const [docTypesList, setDocTypesList] = useState(null);

  const getDocTypesList = async () => {
    try {
      const res = await getDocTypes();
      setDocTypesList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DocTypesContext.Provider
      value={{
        docTypesList,
        getDocTypesList,
      }}
    >
      {children}
    </DocTypesContext.Provider>
  );
};
