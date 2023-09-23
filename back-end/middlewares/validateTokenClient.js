import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();

const TOKEN_SECRET = process.env.TOKEN_SECRET_CLIENT;

export const authRequired = (req, res, next) => {
  const { clientToken } = req.cookies;
  if (!clientToken)
    return res.status(401).json({ message: "No token, authorization denied" });

  jwt.verify(clientToken, TOKEN_SECRET, (err, user) => {
    if (err) {
      return res
        .status(403)
        .json({ message: "Invalid token, authorization denied" });
    }
    req.user = user;

    next();
  });
};
