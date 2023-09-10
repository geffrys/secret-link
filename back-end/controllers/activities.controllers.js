import { pool } from "../db.js";

export const getActivities = async (req, res) => {
  try {
    const [response] = await pool.query(
      "SELECT * FROM activities order by id_activity asc"
    );
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getActivity = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM activities where id_activity = ?",
      [req.params.id_activity]
    );
    if (result.length === 0) {
      return res.status(404).json({ message: "Activity does not exist" });
    } else if (result[0].activity_status === false) {
      return res.status(404).json({ message: "Activity is not available" });
    } else {
      res.json({
        id_activity: result[0].id_activity,
        id_itinerary: result[0].id_itinerary,
        activity_name: result[0].activity_name,
        activity_description: result[0].activity_description,
        activity_price: result[0].activity_price,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const newActivity = async (req, res) => {
  try {
    const {
      id_itinerary,
      activity_name,
      activity_description,
      activity_price,
      activity_status,
    } = req.body;
    const [result] = await pool.query(
      "INSERT INTO activities (id_itinerary, activity_name, activity_description, activity_price, activity_status) VALUES (?,?,?,?,?)",
      [
        id_itinerary,
        activity_name,
        activity_description,
        activity_price,
        activity_status,
      ]
    );
    res.json({ message: "Activity created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateActivity = async (req, res) => {
  try {
    const { activity_description, activity_price, activity_status } = req.body;
    const [result] = await pool.query(
      "UPDATE activities SET activity_description =?, activity_price =?, activity_status =? WHERE id_activity =?",
      [
        activity_description,
        activity_price,
        activity_status,
        req.params.id_activity,
      ]
    );
    if (result.affectedRows === 0)
      return res.status(404).json({
        mensaje: "Activity does not exists",
      });
    res.json({ message: "Activity updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteActivity = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM activities WHERE id_activity =?",
      [req.params.id_activity]
    );
    if (result.affectedRows === 0)
      return res.status(404).json({
        mensaje: "Activity does not exists",
      });
    res.json({ message: "Activity deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
