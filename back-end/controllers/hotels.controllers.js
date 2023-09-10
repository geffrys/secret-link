import { pool } from "../db.js";

export const getHotels = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM hotels order by id_hotel asc"
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getHotel = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM hotels where id_hotel = ?",
      [req.params.id_hotel]
    );
    if (result.length === 0) {
      return res.status(404).json({ message: "Room does not exist" });
    } else if (result[0].hotel_status === false) {
      return res.status(404).json({ message: "Room is not available" });
    } else {
      res.json({
        id_hotel: result[0].id_hotel,
        hotel_name: result[0].hotel_name,
        hotel_stars: result[0].hotel_stars,
        id_destination: result[0].id_destination,
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const newHotel = async (req, res) => {
  try {
    const { hotel_name, hotel_status, hotel_stars, id_destination } = req.body;
    const [result] = await pool.query(
      "INSERT INTO hotels (hotel_name, hotel_status, hotel_stars, id_destination) VALUES (?,?,?,?)",
      [hotel_name, hotel_status, hotel_stars, id_destination]
    );
    res.json({ message: "Hotel Added Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateHotel = async (req, res) => {
  try {
    const { hotel_status, hotel_stars } = req.body;
    console.log(hotel_status, hotel_stars, req.params.id_hotel);
    const [result] = await pool.query(
      "UPDATE hotels SET hotel_status =?, hotel_stars =? WHERE id_hotel =?",
      [hotel_status, hotel_stars, req.params.id_hotel]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Hotel does not exist" });
    }
    res.json({ message: "Hotel Info updated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteHotel = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM hotels WHERE id_hotel =?", [
      req.params.id_hotel,
    ]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Hotel does not exist" });
    }
    res.json({ message: "Hotel Deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
