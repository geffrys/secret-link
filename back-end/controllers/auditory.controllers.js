import { pool } from "../db.js";

export const getAuditories = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM auditory_sesion order by logout_time desc"
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAuditory = async (req, res) => {
  try {
    const { id_agent } = req.body;
    const [result] = await pool.query(
      "SELECT * FROM auditory_sesion WHERE id_auditory_sesion = ? AND id_agent = ?",
      [req.params.id_auditory_sesion, id_agent]
    );
    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ message: "Auditory session does not exists" });
    }
    res.json(result[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const newAuditory = async (req, res) => {
  try {
    const { id_agent } = req.body;
    const login_time = new Date();
    const [result] = await pool.query(
      "INSERT INTO auditory_sesion (login_time,id_agent) VALUES (?,?)",
      [login_time, id_agent]
    );
    res.json({ message: "Auditory session created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const finishAuditory = async (req, res) => {
  try {
    const { message_end_session, id_agent } = req.body;
    const logout_time = new Date();
    const [result] = await pool.query(
      "UPDATE auditory_sesion SET message_end_session = ?, logout_time = ? WHERE id_agent = ? AND logout_time IS NULL",
      [message_end_session, logout_time, id_agent]
    );
    res.json({ message: "Auditory session finished" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
