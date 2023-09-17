import axios from "axios";

export const getPackages = async () =>
  await axios.get("http://localhost:3000/api/v1/packages");

export const getPackage = async (id) =>
  await axios.get(`http://localhost:3000/api/v1/packages/${id}`);

export const postPackage = async (packages) =>
  await axios.post("http://localhost:3000/api/v1/packages", packages);

export const updatePackage = async (id, newFields) =>
  await axios.put(`http://localhost:3000/api/v1/packages/${id}`, newFields);

export const deletePackage = async (id) =>
  await axios.delete(`http://localhost:3000/api/v1/packages/${id}`);
