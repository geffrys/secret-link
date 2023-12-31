import { pool } from "../db.js";
import bcrypt from "bcrypt";
import { CreateAccesToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();

const TOKEN_SECRET = process.env.TOKEN_SECRET;
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS);

export const getUsers = async (req, res) => {
  try {
    const [result] = await pool.query(
      "select * from agents order by id_agent asc"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const [result] = await pool.query(
      "select * from agents where id_agent = ?",
      [req.params.id_agent]
    );

    if (result.length === 0) {
      return res.status(404).json({
        mensaje: "Agent does not exists",
      });
    } else {
      res.json({
        id_agent: result[0].id_agent,
        name_ag: result[0].name_agent,
        phone_ag: result[0].phone_agent,
        id_doc_ty: result[0].id_document_type,
        id_agent_ty: result[0].id_agent_type,
        id_headquarter: result[0].id_headquarter,
        document_number: result[0].document_number_agent,
        user_name: result[0].user_name_agent,
        user_password: result[0].user_password_agent,
        user_email: result[0].user_mail_agent,
        created_at: result[0].created_at,
        modified_at: result[0].modified_at,
      });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const newUser = async (req, res) => {
  try {
    const {
      name_ag,
      phone_ag,
      id_dt,
      agent_type,
      headquarter,
      document_number,
      user_name = name_ag + document_number.substr(-4),
      user_password,
      user_email,
    } = req.body;

    const [userFound] = await pool.query(
      "select * from agents where document_number_agent = ? or user_mail_agent = ?",
      [document_number, user_email]
    );
    
    if (userFound.length > 0)
      return res.status(400).json({ message: "User already exists" });

    const finalPass = await bcrypt.hash(user_password, SALT_ROUNDS);
    const updatedAt = new Date();
    const [result] = await pool.query(
      "insert into agents (name_agent, phone_agent, id_document_type, id_agent_type, id_headquarter, document_number_agent, user_name_agent, user_password_agent, user_mail_agent, modified_at) values (?,?,?,?,?,?,?,?,?,?)",
      [
        name_ag,
        phone_ag,
        id_dt,
        agent_type,
        headquarter,
        document_number,
        user_name,
        finalPass,
        user_email,
        updatedAt,
      ]
    );
    res.json({ message: "Agent created succesfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const LogIn = async (req, res) => {
  try {
    const { user_name, user_password } = req.body;

    const [userFound] = await pool.query(
      "select * from agents where user_name_agent = ?",
      [user_name]
    );

    if (userFound.length === 0)
      return res.status(400).json(["User name not found"]);
    const isMatch = await bcrypt.compare(
      user_password,
      userFound[0].user_password_agent
    );

    if (!isMatch) return res.status(404).json(["Incorrect password"]);
    const token = await CreateAccesToken({
      id: userFound[0].id_agent,
    });
    res.cookie("token", token);
    res.json(userFound[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: "No token provided" });

  jwt.verify(token, TOKEN_SECRET, async (err, decoded) => {
    if (err) return res.status(401).json({ message: "Unauthorized" });
    const [userFound] = await pool.query(
      "select * from agents where id_agent = ?",
      [decoded.id]
    );
    if (!userFound) return res.status(401).json({ message: "Unauthorized" });

    return res.json({
      id: userFound[0].id_agent,
      name_agent: userFound[0].name_agent,
      id_agent_type: userFound[0].id_agent_type,
      id_headquarter: userFound[0].id_headquarter,
      user_name_agent: userFound[0].user_name_agent,
    });
  });
};

export const logOut = (req, res) => {
  res.cookie("token", "", { expires: new Date(0) });
  return res.sendStatus(200);
};

export const updateUser = async (req, res) => {
  try {
    const { user_password, agent_type } = req.body;
    const updatedAt = new Date();
    const finalPass = bcrypt.hash(user_password, SALT_ROUNDS);
    const [result] = await pool.query(
      "update agents set id_agent_type=?, user_password_agent=?, modified_at=? where id_agent = ?",
      [agent_type, finalPass, updatedAt, req.params.id_agent]
    );
    if (result.affectedRows === 0)
      return res.status(404).json({
        mensaje: "User does not exists",
      });
    res.json({ message: "User updated" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const [resultado] = await pool.query(
      "delete from agents where id_agent = ?",
      [req.params.id_agent]
    );
    if (resultado.affectedRows === 0)
      return res.status(404).json({
        mensaje: "User does not exists",
      });
    res.json({ message: "User deleted" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
