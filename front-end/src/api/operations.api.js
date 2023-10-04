import axios from "axios";

export const getOperations = async (id_operation, id_client) =>
    await axios.get("http://localhost:3000/api/v1/operation/current"(id_operation, id_client));

export const getOperationAlone = async () => 
    await axios.get("http://localhost:3000/api/v1/operation/alone");
    
export const getOperationHistory = async (id_client) => {
    try {
        return await axios.get(`http://localhost:3000/api/v1/operation/history/${id_client}`);

    } catch (error) {
        console.log(error);
    }
}

export const postOperation = async (operation) => {
    try {
        return await axios.post("http://localhost:3000/api/v1/operation", operation);
    } catch (error) {
        console.log(error);
        throw new Error("cannot post operation at this moment");
    }
}