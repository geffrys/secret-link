import { pool } from "../db.js";
import bcrypt from "bcrypt";
import dotenv from 'dotenv';
dotenv.config();

const SALT_ROUNDS = process.env.SALT_ROUNDS;   

// TODO: pending to test

export const getOperation = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await pool.query("select * from operations where id_operation = ?", [id]);
        console.log(result);
        res.json(result[0]);    
    } catch (error) {
        console.log(error);
        res.json({mensaje: "cannot get operation at this moment"});
    }
}

export const getOperations = async (req, res) => {
    try {
        const [result] = await pool.query("select * from operations");
        console.log(result);
        res.json(result);    
    } catch (error) {
        console.log(error);
        res.json({mensaje: "cannot get operation at this moment"});
    }
}

// TODO: pending to test

export const postOperation = async (req, res) => {
    const { 
        id_agent,
        id_client,
        id_travel_pack,
        id_operation_status
    } = req.body;

    let operation_price = 0;
    let operation_travelers_count = 0;

    try {
        // definition: the price of the operation is the price of the travel pack plus the price of the transport
        const [price_travel_pack] = await pool.query("select travelpack_price from travel_packs where id_travel_pack = ?", [id_travel_pack]);
        operation_price = price_travel_pack[0].travelpack_price;
        const [ transport_price ] = await pool.query("select transport_price from travel_pack inner join transports on id_transport = transports.id_transport where id_travel_pack = ?", [id_travel_pack]);
        operation_price += transport_price[0].transport_price;
        // second definition: the number of travelers is the number of people in the operation plus
        const [count_travelers] = await pool.query("select count(*) as count from additional_people where id_client = ?", [id_client]);
        // the client is the plus one
        operation_travelers_count = count_travelers[0].count + 1;
        operation_price *= operation_travelers_count;
    }catch(error){
        res.status(500).json({mensaje: "cannot get operatioin details at this moment"});
    }
    const created_at = new Date();

    try {
        const [result] = await pool.query("insert into operations (id_agent, id_client, id_travel_pack, id_operation_status) values (?,?,?,?)", [
            id_agent, 
            id_client, 
            id_travel_pack, 
            id_operation_status,
            operation_price,
            operation_travelers_count,
            created_at
        ]);
        res.status(200).json(result);    
    } catch (error) {
        res.status(500).json({mensaje: "cannot register operation at this moment"});   
    }   
}

// TODO: pending to test

export const postClient = async (req, res) => {
    const {
        document_number,
        id_document_type,
        client_name,
        client_lastname,
        client_city,
        client_mail,
        client_password,
        client_address,
        id_health_information
    } = req.body;

    client_password = bcrypt.hashSync(client_password,SALT_ROUNDS);

    try {
        const [result] = await pool.query("insert into clients (id_document_type, client_document_number, client_name, client_lastname, client_city, client_mail, client_password, client_address, id_health_information, created_at) values (?,?,?,?,?,?,?,?,?,?)", [
            id_document_type,
            document_number, 
            client_name,
            client_lastname,
            client_city,
            client_mail,
            client_password, 
            client_address, 
            id_health_information
        ]);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({mensaje: "cannot register client at this moment"});
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

    try {
        const [health_information] = await pool.query("insert into health_information (id_rh, id_eps, health_card) values (?,?,?)", [
            health_information.id_rh,
            health_information.id_eps,
            health_information.health_card
        ]);
    } catch (error) {
        res.status(500).json({mensaje: "cannot register health information at this moment"});
    }

    // then, we can register the additional people one by one

    try {
        const [result] = await pool.query("insert into additional_people (id_client, id_document_type, document_number, id_health_information) values (?,?,?,?)", [
            id_client, 
            id_document_type, 
            document_number, 
            health_information.id_health_information
        ]);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({mensaje: "cannot register additional people at this moment"});
    }
}

// TODO: pending to implement

export const postHealthInfo = async (req, res) => {
    const {
        id_rh,
        id_eps,
        health_card
    } = req.body
    try {
        const [result] = await pool.query("insert into health_information (id_rh, id_eps, health_card) values (?,?,?)", [
            id_rh, 
            id_eps, 
            health_card
        ]);
        res.status(200).json(result);    
    } catch (error) {
        res.status(500).json({mensaje: "cannot register health info at this moment"});
    }
    
}

// this function is used to audit the operation status and change it
// TODO: pending to test

export const updateOperation = async (req, res) => {
    const { 
        id,
        id_operation_status
    } = req.body;

    // first of all, we need to save actual status of the operation, to audit it

    try {
        const [result] = await pool.query("select id_operation_status from operations where id_op = ?", [id]);
    } catch (error){
        res.status(500).json({mensaje: "cannot update operation at this moment"});
    }

    try {
        const [result] = await pool.query("update operations set id_operation_status = ? where id_op = ?", [
            id_operation_status, 
            id
        ]);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({mensaje: "cannot update operation status at this moment"});
    }
    
}