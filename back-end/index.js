import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import mainRouter from "./routes/main.routes.js";

dotenv.config();
const PORT = process.env.PORT;


const app = express();
app.use(cookieParser());
app.use(express.json());

app.use(cors());

app.use("/api/v1", mainRouter )

app.listen(PORT);
