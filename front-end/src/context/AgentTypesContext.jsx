import { createContext, useContext, useState } from "react";
import { getAgentTypes, postAgentType } from "../api/agenttypes.api";

const AgentTypesContext = createContext();

export const useAgentTypes = () => {
  const context = useContext(AgentTypesContext);
  if (!context) {
    throw new Error("useAgentTypes must be used within a AgentTypesProvider");
  }
  return context;
};

export const AgentTypesProvider = ({ children }) => {
  const [agentTypes, setAgentTypes] = useState([]);

  const getAgentTypesList = async () => {
    try {
      const res = await getAgentTypes();
      setAgentTypes(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AgentTypesContext.Provider
      value={{
        agentTypes,
        getAgentTypesList,
      }}
    >
      {children}
    </AgentTypesContext.Provider>
  );
};
