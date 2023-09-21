import axios from "axios";

export const getAgentTypes = async () =>
  await axios.get("http://localhost:3000/api/v1/agent_types");

export const getAgentType = async (id) =>
  await axios.get(`http://localhost:3000/api/v1/agent_types/${id}`);

export const postAgentType = async (agentType) =>
  await axios.post("http://localhost:3000/api/v1/agent_types", agentType);

export const updateAgentType = async (id, newFields) =>
  await axios.put(`http://localhost:3000/api/v1/agent_types/${id}`, newFields);

export const deleteAgentType = async (id) =>
  await axios.delete(`http://localhost:3000/api/v1/agent_types/${id}`);
