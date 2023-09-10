import { pool } from "../db.js";

export const getItineraries = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM itineraries order by id_itinerary asc"
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getItinerary = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM itineraries WHERE id_itinerary = ?",
      [req.params.id_itinerary]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Itinerary does not exists" });
    } else if (result[0].itinerary_status === false) {
      return res.status(404).json({ message: "Itinerary is not available" });
    }
    res.json({
      itinerary_id: result[0].id_itinerary,
      itinerary_name: result[0].itinerary_name,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const newItinerary = async (req, res) => {
  try {
    const { itinerary_name, itinerary_status } = req.body;
    const [result] = await pool.query(
      "INSERT INTO itineraries (itinerary_name, itinerary_status) VALUES (?,?)",
      [itinerary_name, itinerary_status]
    );
    res.json({ message: "Itinerary created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateItinerary = async (req, res) => {
  try {
    const { itinerary_status } = req.body;
    const [result] = await pool.query(
      "UPDATE itineraries SET itinerary_status = ? WHERE id_itinerary = ?",
      [itinerary_status, req.params.id_itinerary]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Itinerary does not exists" });
    }
    res.json({ message: "Itinerary updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteItinerary = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM itineraries WHERE id_itinerary = ?",
      [req.params.id_itinerary]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Itinerary does not exists" });
    }
    res.json({ message: "Itinerary deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
