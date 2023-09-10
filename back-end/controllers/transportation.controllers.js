import { pool } from "../db.js";

export const getTransports = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM transports");
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getTransport = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM transports WHERE id_transport = ?",
      [req.params.id_transport]
    );
    if (result.length === 0) {
      return res.status(404).json({ message: "Transport does not exist" });
    } else {
      res.json({
        id_transport: result[0].id_transport,
        transport_name: result[0].transport_name,
        transport_description: result[0].transport_description,
        transport_price: result[0].transport_price,
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const newTransport = async (req, res) => {
  try {
    const { transport_name, transport_description, transport_price } = req.body;
    const [result] = await pool.query(
      "INSERT INTO transports (transport_name, transport_description, transport_price) VALUES (?,?,?)",
      [transport_name, transport_description, transport_price]
    );
    res.json({ message: "Transport Added Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateTransport = async (req, res) => {
  try {
    const { transport_description, transport_price } = req.body;
    const [result] = await pool.query(
      "UPDATE transports SET transport_description =?, transport_price =? WHERE id_transport =?",
      [transport_description, transport_price, req.params.id_transport]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Transport does not exist" });
    }
    res.json({ message: "Transport Updated Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteTransport = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM transports WHERE id_transport =?",
      [req.params.id_transport]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Transport does not exist" });
    }
    res.json({ message: "Transport Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
