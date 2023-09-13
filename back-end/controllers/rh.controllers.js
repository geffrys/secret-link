import { pool } from "../db.js";

export const getRh = async (req, res) => {
    try {
        const [result] = await pool.query(
        "SELECT * FROM rh order by id_rh asc"
        );
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const postRh = async (req, res) => {
    let {
        namerh
    } = req.body;
    try {
        const [result] = await pool.query(
            "INSERT INTO rh (name_rh) VALUES (?)",
            [namerh]
        );
        res.json({ message: "rh created", id: result.insertId});
    } catch (error) {
        res.status(500).json({ message: "cannot insert rh at this moment" });
    }
}