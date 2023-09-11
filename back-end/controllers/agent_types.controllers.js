import { pool } from "../db.js";

export const getAgentTypes = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM agent_types ORDER by id_agent_type ASC"
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAgentType = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM agent_types WHERE id_agent_type = ?",
      [req.params.id_agent_type]
    );
    if (result.length === 0)
      return res.json({ message: "Agent type not found" });
    res.json({ name_agent_type: result[0].name_agent_type });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const newAgentType = async (req, res) => {
  try {
    const { name_agent_type } = req.body;
    const [result] = await pool.query(
      "INSERT into agent_types (name_agent_type) values (?)",
      [name_agent_type]
    );
    res.json({ message: "New agent type created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateAgentType = async (req, res) => {
  try {
    const { name_agent_type } = req.params;
    const [result] = await pool.query(
      "UPDATE agent_types SET name_agent_type = ? WHERE id_agent_type = ?",
      [name_agent_type, req.params.id]
    );
    if (result.affectedRows === 0)
      return res.json({ message: "Agent type not found" });
    res.json({ message: "Agent type updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteAgentType = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM agent_types WHERE id_agent_type = ?",
      [req.params.id]
    );
    if (result.affectedRows === 0)
      return res.json({ message: "Agent type not found" });
    res.json({ message: "Agent type deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
