import { createPool } from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const USERNAME_DB = process.env.USERDB;
const PASSWORD_DB = process.env.PASSDB;

export const pool = createPool({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "123321",
  database: "secret_link",
});
