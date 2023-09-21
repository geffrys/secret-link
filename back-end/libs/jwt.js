import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();

const TOKEN_SECRET = process.env.TOKEN_SECRET;
const TOKEN_SECRET_CLIENT = process.env.TOKEN_SECRET_CLIENT;

export function CreateAccesToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      TOKEN_SECRET,
      {
        expiresIn: "1d",
      },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
}

export function CreateAccesTokenClient(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      TOKEN_SECRET_CLIENT,
      {
        expiresIn: "1d",
      },
      (err, tokens) => {
        if (err) reject(err);
        resolve(tokens);
      }
    );
  });
}