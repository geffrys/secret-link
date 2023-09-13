import { pool } from "../db.js";

export const getDocumentTypes = async (req, res) => {
    try {
        const [response] = await pool.query("SELECT * FROM document_types");
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const postDocumentTypes = async (req, res) => {
    let { document_name } = req.body;
    try {
        const [response] = await pool.query("INSERT INTO document_types (document_name) VALUES (?)", [document_name]);
        res.status(200).json({ message: "document type created", id: response.insertId });
    } catch (error) {
        res.status(500).json({ message: "cannot insert document type at this moment" });
    }    
};