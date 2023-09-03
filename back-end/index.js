import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import usersRoutes from "./routes/users.routes.js";
import cookieParser from "cookie-parser";

dotenv.config();
const PORT = process.env.PORT;
const app = express();
app.use(cookieParser());
app.use(express.json());

console.log(PORT);
app.use(cors());
app.use(usersRoutes);
app.listen(PORT);
console.log("Server Running on port " + PORT);
