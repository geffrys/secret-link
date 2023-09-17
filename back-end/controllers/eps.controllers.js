import { pool } from "../db.js";

export const getEps = async (req, res) => {
    try {
        const [result] = await pool.query(
        "SELECT * FROM eps order by id_eps asc"
        );
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: "cannot get eps resource at this moment" });
    }
}

export const postEps = async (req, res) => {
    let { name_eps } = req.body;
    try {
        const [result] =
        await pool.query('INSERT INTO eps(name_eps, status_eps) SET ?,?', [ name_eps, true ]);
        res.status(200).json({ message: "eps created", id: result.insertId });
    }catch(error){
        console.log(error);
        res.status(500).json({ message: "cannot insert eps at this moment" });
    }
}