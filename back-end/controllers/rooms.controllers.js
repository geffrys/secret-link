import { pool } from "../db.js";

export const getRooms = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM room_types order by id_room_type asc"
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getRoom = async (req, res) => {
  try {
    const { id_room_type } = req.params;
    const [result] = await pool.query(
      "SELECT * FROM room_types WHERE id_room_type =?",
      [id_room_type]
    );
    if (result.length === 0) {
      return res.status(404).json({ message: "Room does not exist" });
    } else if (result[0].room_status === false) {
      return res.status(404).json({ message: "Room is not available" });
    } else {
      res.json({
        id_room_type: result[0].id_room_type,
        room_name: result[0].room_name,
        room_description: result[0].room_description,
        room_capability: result[0].room_capability,
        room_status: result[0].room_status,
        id_hotel: result[0].id_hotel,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const newRoom = async (req, res) => {
  try {
    const {
      room_name,
      room_description,
      room_capability,
      room_status,
      id_hotel,
    } = req.body;
    const [result] = await pool.query(
      "INSERT INTO room_types (room_name, room_description, room_capability, room_status, id_hotel) VALUES (?,?,?,?,?)",
      [room_name, room_description, room_capability, room_status, id_hotel]
    );
    res.json({ message: "Room created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateRoom = async (req, res) => {
  try {
    const { room_description, room_capability, room_status } = req.body;
    const [result] = await pool.query(
      "UPDATE room_types SET room_description = ?, room_capability = ?, room_status = ? WHERE id_room_type = ?",
      [room_description, room_capability, room_status, req.params.id_room_type]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Room does not exist" });
    }
    res.json({ message: "Destination updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteRoom = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM room_types WHERE id_room_type =?",
      [req.params.id_room_type]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Room does not exist" });
    }
    res.json({ message: "Room deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
