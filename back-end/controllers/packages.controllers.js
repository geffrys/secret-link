import { pool } from "../db.js";

export const getPackages = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM travel_packs order by id_travel_pack asc"
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPackage = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM travel_packs WHERE id_travel_pack = ?",
      [req.params.id_travel_pack]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Package does not exists" });
    } else if (result[0].package_status === false) {
      return res.status(404).json({ message: "Package is not available" });
    }
    res.json({
      id_travel_pack: result[0].id_travel_pack,
      id_food_type: result[0].id_food_type,
      id_room_type: result[0].id_room_type,
      id_transport: result[0].id_transport,
      id_destination: result[0].id_destination,
      id_itinerary: result[0].id_itinerary,
      travelpack_price: result[0].travelpack_price,
      travelpack_status: result[0].travelpack_status,
      travelpack_description: result[0].travelpack_description,
    });
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
      travelpack_price,
      travelpack_status,
      travelpack_description,
    } = req.body;
    const [result] = await pool.query(
      "INSERT INTO travel_packs (id_food_type, id_room_type, id_transport, id_destination, id_itinerary, travelpack_price, travelpack_status, travelpack_description) VALUES (?,?,?,?,?,?,?,?)",
      [
        id_food_type,
        id_room_type,
        id_transport,
        id_destination,
        id_itinerary,
        travelpack_price,
        travelpack_status,
        travelpack_description,
      ]
    );
    res.json({ message: "Package created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePackage = async (req, res) => {
  try {
    const { travelpack_price, travelpack_status, travelpack_description } =
      req.body;
    const [result] = await pool.query(
      "UPDATE travel_packs SET travelpack_price = ?, travelpack_status = ?, travelpack_description = ? WHERE id_travel_pack = ?",
      [
        travelpack_price,
        travelpack_status,
        travelpack_description,
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
