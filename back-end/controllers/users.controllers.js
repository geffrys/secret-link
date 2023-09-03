import { pool } from "../db.js";
import bcrypt from "bcrypt";
import { CreateAccesToken } from "../libs/jwt.js";
export const getUsers = async (req, res) => {
  try {
    const [result] = await pool.query(
      "select * from agents order by nombreCompleto asc"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const { userName } = req.params;
    const { password } = req.body;

    const [result] = await pool.query(
      "select * from agents where userName = ?",
      [userName]
    );

    if (result.length === 0) {
      return res.status(404).json({ mensaje: "User does not exists" });
    } else {
      if (!(await bcrypt.compare(password, result[0].password))) {
        return res.status(404).json({ mensaje: "Incorrect data" });
      } else {
        res.json(result[0].nombreCompleto);
      }
    }
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const newUser = async (req, res) => {
  try {
    const {
      name_ag,
      phone_ag,
      id_dt,
      agent_type,
      document_number,
      user_name,
      user_password,
      user_email,
    } = req.body;

    const finalPass = await bcrypt.hash(user_password, 10);
    const updatedAt = new Date();
    const [result] = await pool.query(
      "insert into agents (name_ag, phone_ag, id_dt, id_at, document_number, user_name, user_password, user_mail, modified_at) values (?,?,?,?,?,?,?,?,?)",
      [
        name_ag,
        phone_ag,
        id_dt,
        agent_type,
        document_number,
        user_name,
        finalPass,
        user_email,
        updatedAt,
      ]
    );
    const [user_id] = await pool.query(
      "select id_ag from agents where user_name = ?",
      [user_name]
    );
    const token = await CreateAccesToken({ id: user_id[0].id });
    res.cookie("token", token);
    res.json({
      user_id: user_id[0].id,
      nombreCompleto: user_id[0].nombreCompleto,
      email: user_id[0].email,
      userName: user_id[0].userName,
      perfil: user_id[0].perfil,
    });
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const LogIn = async (req, res) => {
  try {
    const { user_name, user_password } = req.body;

    const [userFound] = await pool.query(
      "select * from agents where user_name = ?",
      [user_name]
    );

    if (userFound.length === 0)
      return res.status(400).json(["User name not found"]);

    const isMatch = await bcrypt.compare(password, userFound[0].password);

    if (!isMatch) return res.status(404).json(["Contraseña incorrecta"]);

    const token = await CreateAccesToken({ id: userFound[0].id });
    res.cookie("token", token);
    res.json({
      message: "Loged in successfully",
    });
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const logOut = (req, res) => {
  res.cookie("token", "", { expires: new Date(0) });
  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  const [userFound] = await pool.query("select * from agents where id = ?", [
    req.user.id,
  ]);

  if (!userFound) return res.status(404).json({ message: "User not found" });
  return res.json({
    id: userFound[0].id,
    nombreCompleto: userFound[0].nombreCompleto,
    email: userFound[0].email,
    userName: userFound[0].userName,
    perfil: userFound[0].perfil,
  });
};

export const updateUser = async (req, res) => {
  try {
    const { nombreCompleto, email, userName, password, perfil } = req.body;
    const finalPass = await bcrypt.hash(password, 10);
    const [result] = await pool.query(
      "update agents set nombreCompleto=?,email=?, userName=?, password=?, perfil=? where id = ?",
      [nombreCompleto, email, userName, finalPass, perfil, req.params.id]
    );
    if (result.affectedRows === 0)
      return res.status(404).json({ mensaje: "User does not exists" });
    res.json("User updated");
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const [resultado] = await pool.query("delete from agents where id = ?", [
      req.params.id,
    ]);
    if (resultado.affectedRows === 0)
      return res.status(404).json({ mensaje: "User does not exists" });
    res.json("User deleted");
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};
