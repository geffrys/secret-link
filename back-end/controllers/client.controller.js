import { pool } from "../db.js";

import dotenv from 'dotenv';
import bcrypt from "bcrypt";
dotenv.config();

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS);   

// TODO: pending to test

export const postClient = async (req, res) => {
    const {
        document_number,
        id_document_type,
        client_name,
        client_middle_name,
        client_lastname,
        client_second_lastname,
        client_city,
        client_mail,
        client_password,
        client_address,
        health_information,
        client_birth_date,
        client_phone_number
    } = req.body;

    let password = bcrypt.hashSync(client_password,SALT_ROUNDS);
    let health_information_id;

    try {
        const [health] = await pool.query("insert into health_information(id_rh, id_eps, health_card, health_diseases, health_details) values (?,?,?,?,?)", [
            health_information.id_rh, 
            health_information.id_eps,
            health_information.health_card,
            health_information.health_diseases,
            health_information.health_details
        ]);
        health_information_id = health.insertId;
    }
    catch(error){
        res.status(500).json({mensaje: "cannot register health information for this client at this moment"});
    }

    try {
        const [result] = await pool.query("insert into clients (id_document_type, client_document_number, client_name,client_middle_name, client_lastname,client_second_lastname ,client_city, client_mail, client_password, client_address, id_health_information,client_birth_date,client_phone_number, created_at) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [
            id_document_type,
            document_number, 
            client_name,
            client_middle_name,
            client_lastname,
            client_second_lastname,
            client_city,
            client_mail,
            password, 
            client_address, 
            health_information_id,
            client_birth_date,
            client_phone_number,
            new Date()
        ]);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({mensaje: "cannot register client at this moment"});
        console.log(error);
    }
}

// TODO: pending to test

export const postAdditionalPeople = async (req, res) => {
    const {
        id_client,
        id_document_type,
        document_number,
        health_information
    } = req.body;

    // first of all, we need to create health information for the additional people in package.

    let health_information_id;

    try {
        const [health] = await pool.query("insert into health_information (id_rh, id_eps, health_card) values (?,?,?)", [
            health_information.id_rh, 
            health_information.id_eps,
            health_information.health_card,
            health_information.health_diseases,
            health_information.health_details
        ]);
        health_information_id = health.insertId;
    }
    catch(error){
        res.status(500).json({mensaje: "cannot register health information for this client at this moment"});
    }

    // then, we can register the additional people one by one

    try {
        const [result] = await pool.query("insert into additional_people (id_client, id_document_type, document_number, id_health_information) values (?,?,?,?)", [
            id_client, 
            id_document_type, 
            document_number, 
            health_information_id
        ]);
        res.status(200).json(result);
        console.log(result);
    } catch (error) {
        res.status(500).json({mensaje: "cannot register additional people at this moment"});
    }
}

// TODO: pending to implement

export const getClientAdditionalPeople = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await pool.query("select * from additional_people where id_client = ?", [id]);
        if(result.length === 0){
            res.status(404).json({mensaje: "there are no additional people for this client"});
        }
        res.status(200).json(result);    
    } catch (error) {
        res.status(500).json({mensaje: "cannot get additional people for this client at this moment"});
    }
}

export const getClients = async (req, res) => {
    try {
        const [result] = await pool.query("select * from clients");
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({mensaje: "cannot get clients at this moment"});
    }
};


export const testHealthInformation = async (req, res) => {
    const {
        id_rh,
        id_eps,
        health_card
    } = req.body;
    try{
        const [result] = await pool.query("insert into health_information (id_rh, id_eps, health_card) values (?,?,?)", [
            id_rh,
            id_eps,
            health_card
        ]);
        console.log(result);
        res.status(200).json(result);
    }catch(error){
        res.status(500).json({mensaje: "cannot register health information at this moment"});
        console.log(error);
    }
}