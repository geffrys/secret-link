import axios from "axios";

export const getOperations = async (id_operation, id_client) =>
    await axios.get("http://localhost:3000/api/v1/operation/current"(id_operation, id_client));

export const getOperationHistory = async (id_client) => {
    try {
        return await axios.get(`http://localhost:3000/api/v1/operation/history/${id_client}`);

    } catch (error) {
        console.log(error);
    }
}