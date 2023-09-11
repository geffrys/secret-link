import { pool } from "../db.js";

export const getDestinations = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM destinations order by id_destination asc"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getDestination = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM destinations where id_destination = ?",
      [req.params.id_destination]
    );
    if (result.length === 0) {
      return res.status(404).json({ message: "Destination does not exist" });
    } else if (result[0].destination_status === false) {
      return res.status(404).json({ message: "Destination is not available" });
    } else {
      res.json({
        id_destination: result[0].id_destination,
        Destinaton: result[0].destination_name,
        Agency: result[0].id_agencie,
      });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const newDestination = async (req, res) => {
  try {
    const { dest_name, dest_status, id_agc } = req.body;
    const [result] = await pool.query(
      "INSERT INTO destinations (destination_name, destination_status, id_agencie) VALUES (?,?,?)",
      [dest_name, dest_status, id_agc]
    );
    res.json({ message: "Destination created" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateDestination = async (req, res) => {
  try {
    const { dest_status, id_agc } = req.body;
    const [result] = await pool.query(
      "UPDATE destinations SET destination_status =?, id_agencie =? WHERE id_destination =?",
      [dest_status, id_agc, req.params.id_destination]
    );
    if (result.affectedRows === 0)
      return res.status(404).json({
        mensaje: "Destination does not exists",
      });
    res.json({ message: "Destination updated" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteDestination = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM destinations WHERE id_destination =?",
      [req.params.id_destination]
    );
    if (result.affectedRows === 0)
      return res.status(404).json({
        mensaje: "Destination does not exists",
      });
    res.json({ message: "Destination deleted" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
