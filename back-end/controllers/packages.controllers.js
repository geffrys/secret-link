import { pool } from "../db.js";

export const getPackages = async (req, res) => {
  try {
    const [result] = await pool.query(
      `SELECT * FROM travel_packs t 
        inner join destinations d
        on t.id_destination = d.id_destination
        where travelpack_status = 1
      order by id_travel_pack asc`
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPackage = async (req, res) => {
  try {
    const [result] = await pool.query(
      `SELECT * FROM travel_packs 
      left join room_types on travel_packs.id_room_type = room_types.id_room_type
      left join food_types on travel_packs.id_food_type = food_types.id_food_type
      left join transports on travel_packs.id_transport = transports.id_transport
      left join destinations on travel_packs.id_destination = destinations.id_destination
      left join itineraries on travel_packs.id_itinerary = itineraries.id_itinerary
      left join hotels on travel_packs.id_hotel = hotels.id_hotel
      WHERE id_travel_pack = ?
      and travelpack_status = 1`,
      [req.params.id_travel_pack]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Package does not exists" });
    } else if (result[0].package_status === false) {
      return res.status(404).json({ message: "Package is not available" });
    }
    res.json(result[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const newPackage = async (req, res) => {
  try {
    const {
      id_food_type,
      id_room_type,
      id_transport,
      id_destination,
      id_itinerary,
      id_hotel,
      travelpack_price,
      travelpack_status,
      travelpack_description,
      travelpack_days,
    } = req.body;
    const [result] = await pool.query(
      "INSERT INTO travel_packs (id_food_type, id_room_type, id_transport, id_destination, id_itinerary, id_hotel, travelpack_price, travelpack_status, travelpack_description, travelpack_days) VALUES (?,?,?,?,?,?,?,?,?,?)",
      [
        id_food_type,
        id_room_type,
        id_transport,
        id_destination,
        id_itinerary,
        id_hotel,
        travelpack_price,
        travelpack_status,
        travelpack_description,
        travelpack_days,
      ]
    );
    res.json({ message: "Package created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePackage = async (req, res) => {
  try {
    const {
      id_food_type,
      id_room_type,
      id_transport,
      id_itinerary,
      id_hotel,
      travelpack_price,
      travelpack_status,
      travelpack_description,
      travelpack_days,
    } = req.body;
    const [result] = await pool.query(
      "UPDATE travel_packs SET id_food_type=?, id_room_type=?, id_transport=?, id_itinerary=?, id_hotel = ?, travelpack_price = ?, travelpack_status = ?, travelpack_description = ?, travelpack_days = ? WHERE id_travel_pack = ?",
      [
        id_food_type,
        id_room_type,
        id_transport,
        id_itinerary,
        id_hotel,
        travelpack_price,
        travelpack_status,
        travelpack_description,
        travelpack_days,
        req.params.id_travel_pack,
      ]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Package does not exists" });
    }
    res.json({ message: "Package updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePackage = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM travel_packs WHERE id_travel_pack = ?",
      [req.params.id_travel_pack]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Package does not exists" });
    }
    res.json({ message: "Package deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
