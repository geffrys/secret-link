import axios from "axios";

const instance = axios.create({
  baseULR: "localhost:3000",
  withCredentials: true,
});

export default instance;