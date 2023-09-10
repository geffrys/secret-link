import { pool } from "../db.js";

export const getFoods = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM food_types order by id_food_type asc"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getFood = async (req, res) => {
  try {
    req.params;
    const [result] = await pool.query(
      "SELECT * FROM food_types WHERE id_food_type =?",
      [id_food_type]
    );
    if (result.length === 0) {
      res.status(404).json({ message: "Food type does not exist" });
    } else if (result[0].food_status === false) {
      res.status(404).json({ message: "Food type is not available" });
    } else {
      res.json({
        food_id: result.id_food_type,
        food_name: result.food_name,
        food_description: result.food_description,
        food_price: result.food_price,
      });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const newFood = async (req, res) => {
  try {
    const { food_name, food_description, food_price, food_status } = req.body;
    const [result] = await pool.query(
      "INSERT INTO food_types (food_name, food_description, food_price, food_status) VALUES (?,?,?,?)",
      [food_name, food_description, food_price, food_status]
    );

    res.json({ message: "Food type created" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updatedFood = async (req, res) => {
  try {
    const { food_description, food_price, food_status } = req.body;
    const [result] = await pool.query(
      "UPDATE food_types SET food_description = ?, food_price = ?, food_status=? where id_food_type = ?",
      [food_description, food_price, food_status, req.params.id_food_type]
    );
    if (result.affectedRows === 0)
      return res.status(404).json({
        mensaje: "Food type does not exists",
      });
    res.json({ message: "Food type updated" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteFood = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM food_types WHERE id_food_type = ?",
      [req.params.id_food_type]
    );
    if (result.affectedRows === 0)
      return res.status(404).json({
        mensaje: "Food type does not exists",
      });
    res.json({ message: "Food type deleted" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
