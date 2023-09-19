import { pool } from "../db.js";

export const getHeadquarters = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM headquarters order by id_headquarter asc"
    );
    res.json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const postHeadquarters = async (req, res) => {
  const {
    name_headquarter,
    address_headquarter,
    phone_headquarter,
    status_headquarter,
  } = req.body;
  try {
    const [result] = await pool.query(
      "INSERT INTO headquarters(name_headquarter,address_headquarter, phone_headquarter, status_headquarter) VALUES(?,?,?,?)",
      [
        name_headquarter,
        address_headquarter,
        phone_headquarter,
        status_headquarter,
      ]
    );
    res.status(200).json({ message: "Headquarter created" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};
