import axios from "./axios";

export const getClients = async () =>
  await axios.get("http://localhost:3000/api/v1/clients");

export const postClient = async (client) =>{
    await axios.post('http://localhost:3000/api/v1/clients', client)}


export const loginUserRequest = async (user) =>
  await axios.post(`http://localhost:3000/api/v1/clients/loginclient`, user);

export const verifyClientToken = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/v1/clients/verify");
    return response
  } catch (error) {
    throw error.response;
  }
};

export const logOutClient = async () => {
  await axios.post("http://localhost:3000/api/v1/clients/logout");
};

export const postAdditionalPeople = async (id, additionalPeople) => {
  await axios.post(
    `http://localhost:3000/api/v1/clients/${id}/addpeople`,
    additionalPeople
  );
}
