import { pool } from "../db.js";

import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { CreateAccesTokenClient } from "../libs/jwt.js";

dotenv.config();

const TOKEN_SECRET_CLIENT = process.env.TOKEN_SECRET_CLIENT;
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS);

// TODO: pending to test

export const postClient = async (req, res) => {
  try {
    const {
      client_document_number,
      id_document_type,
      client_name,
      client_middle_name,
      client_lastname,
      client_second_lastname,
      client_city,
      client_mail,
      client_password,
      client_address,
      client_birth_date,
      client_phone_number,
      id_rh,
      id_eps,
      health_card,
      health_diseases,
      health_details,
    } = req.body;

    let password = bcrypt.hashSync(client_password, SALT_ROUNDS);

    const [health] = await pool.query(
      "insert into health_information(id_rh, id_eps, health_card, health_diseases, health_details) values (?,?,?,?,?)",
      [id_rh, id_eps, health_card, health_diseases, health_details]
    );

    const [result] = await pool.query(
      "insert into clients (id_document_type, client_document_number, client_name,client_middle_name, client_lastname,client_second_lastname ,client_city, client_mail, client_password, client_address, id_health_information,client_birth_date,client_phone_number, created_at) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        id_document_type,
        client_document_number,
        client_name,
        client_middle_name,
        client_lastname,
        client_second_lastname,
        client_city,
        client_mail,
        password,
        client_address,
        health.insertId,
        client_birth_date,
        client_phone_number,
        new Date(),
        new Date(),
      ]
    );

    res.json({ message: "Client created succesfully" });
  } catch (error) {
    return res.json({ message: error.message }).status(500);
  }
};

// TODO: pending to test

export const postAdditionalPeople = async (req, res) => {
  const { id_document_type, document_number, name, health_information, id_client } = req.body;
  console.log(req.body);
  // first of all, we need to create health information for the additional people in package.

  let health_information_id;

  try {
    const [health] = await pool.query(
      "insert into health_information (id_rh, id_eps, health_card, health_diseases, health_details) values (?,?,?,?,?)",
      [
        health_information.id_rh,
        health_information.id_eps,
        health_information.health_card,
        health_information.health_diseases?1:0,
        health_information.health_details,
      ]
    );
    health_information_id = health.insertId;
  } catch (error) {
    res.status(500).json({
      mensaje:
        "cannot register health information for this client at this moment",
    });
  }

  // then, we can register the additional people one by one
  console.log(health_information_id);
  try {
    const [result] = await pool.query(
      "insert into additional_people (id_client, id_document_type, document_number_additional_people, name_additional_people , id_health_information, created_at) values (?,?,?,?,?,?)",
      [id_client, id_document_type, document_number, name, health_information_id, new Date()]
    );
    res.json(result).status(200);
    console.log(result);
  } catch (error) {
    res
      .json({ mensaje: "cannot register additional people at this moment" })
      .status(500);
  }
};

// TODO: pending to implement

export const getClientAdditionalPeople = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query(
      "select * from additional_people where id_client = ?",
      [id]
    );
    console.log(result);
    if (result.length === 0) {
      res
        .json({ mensaje: "there are no additional people for this client" }).status(404);
    }
    res.json(result).status(200);
  } catch (error) {
    res.json({
      mensaje: "cannot get additional people for this client at this moment",
    }).status(500);
  }
};

export const getClients = async (req, res) => {
  try {
    const [result] = await pool.query("select * from clients");
    // protecting the password
    for (let i = 0; i < result.length; i++) {
      result[i].client_password = undefined;
    }
    res.status(200).json(result);
  } catch (error) {
    res.json({ mensaje: "cannot get clients at this moment" }).status(500);
  }
};

export const getClient = async (req, res) => {
  const { id } = req.params;
  const { client_password } = req.body;
  try {
    const [client] = await pool.query(
      "SELECT * FROM clients WHERE client_document_number = ?",
      [id]
    );
    if (client.length == 0) {
      res.json({ mensaje: "client not found" }).status(404);
    }
    const isMatch = bcrypt.compare(client_password, client[0].client_password);
    if (!isMatch) {
      res.json({ mensaje: "wrong password" }).status(404);
    }
    client[0].client_password = undefined;
    const clienttoken = await CreateAccesToken({
      id: client[0].id_client,
    });
    res.cookie("clientToken", clienttoken);
    res.json({ client: client[0] });
  } catch (error) {
    console.log(error);
    res.json({ mensaje: "cannot get client at this moment" }).status(500);
  }
};

export const updateClient = async (req, res) => {
  const { id } = req.params;
  const {
    id_document_type,
    client_document_number,
    client_name,
    client_middle_name,
    client_lastname,
    client_second_lastname,
    client_city,
    client_mail,
    client_password,
    client_address,
    health_information,
    client_birth_date,
    client_phone_number,
  } = req.body;

  let password = bcrypt.hashSync(client_password, SALT_ROUNDS);
  let health_information_id;

  try {
    const [healthId] = await pool.query(
      "select id_health_information from clients where id_client = ?",
      [id]
    );

    const [health] = await pool.query(
      "update health_information set id_rh = ?, id_eps = ?, health_card = ?, health_diseases = ?, health_details = ? where id = ?",
      [
        health_information.id_rh,
        health_information.id_eps,
        health_information.health_card,
        health_information.health_diseases,
        health_information.health_details,
        healthId[0].id_health_information,
      ]
    );
    health_information_id = health.insertId;
  } catch (error) {
    res.status(500).json({
      mensaje:
        "cannot register health information for this client at this moment",
    });
  }

  try {
    const [result] = await pool.query(
      "update clients set id_document_type = ?,client_document_number = ?, client_name = ?,client_middle_name = ?, client_lastname = ?,client_second_lastname = ?,client_city = ?, client_mail = ?, client_password = ?, client_address = ?, id_health_information = ?,client_birth_date = ?,client_phone_number = ?, updated_at = ? where id_client = ?",
      [
        id_document_type,
        client_document_number,
        client_name,
        client_middle_name,
        client_lastname,
        client_second_lastname,
        client_city,
        client_mail,
        password,
        client_address,
        health_information_id,
        client_birth_date,
        client_phone_number,
        new Date(),
        id,
      ]
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ mensaje: "cannot update client at this moment" });
  }
};

export const LogIn = async (req, res) => {
  try {
    const { client_document_number, client_password } = req.body;
    const [clientFound] = await pool.query(
      "select * from clients where client_document_number = ?",
      [client_document_number]
    );
    if (clientFound.length === 0)
      return res.status(400).json(["Client not found"]);
    const isMatch = await bcrypt.compare(
      client_password,
      clientFound[0].client_password
    );
    if (!isMatch) return res.status(404).json(["Incorrect password"]);
    const clientToken = await CreateAccesTokenClient({
      id_client: clientFound[0].id_client
    });
    res.cookie("clientToken", clientToken);
    res.json(clientFound[0]);
  } catch (error) {
    return res.json({ message: error.message }).status(500);
  }
};

export const verifyToken = async (req, res) => {
  const { clientToken } = req.cookies;
  if (!clientToken) return res.status(401).json({ message: "No token provided" });
  jwt.verify(clientToken, TOKEN_SECRET_CLIENT, async (err, decoded) => {
    if (err) return res.status(401).json({ message: "Unauthorized" });
    const [userFound] = await pool.query(
      "select * from clients where id_client = ?",
      [decoded.id_client]
    );
    if (!userFound) return res.status(401).json({ message: "Unauthorized" });
    
    res.json({
      id_client: userFound[0].id_client,
      client_name: userFound[0].client_name,
      client_middle_name: userFound[0].client_middle_name,
      client_lastname: userFound[0].client_lastname,
      client_second_lastname: userFound[0].client_second_lastname,
      created_at: userFound[0].created_at
    }).status(200);
  });
};

export const logOut = (req, res) => {
  res.cookie("clientToken", "", { expires: new Date(0) });
  return res.sendStatus(200);
};
