import { pool } from '../database'

export const getOperations = async (req, res) => {

}

export const postOperation = async (req, res) => {
    const { 
        id_agent,
        id_client,
        id_travel_pack,
        id_operation_status
     } = req.body;
}

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
}

export const postAdditionalPeople = async (req, res) => {
    const {
        id_client,
        id_document_type,
        document_number,
        id_health_information
    } = req.body;
}

export const postHealthInfo = async (req, res) => {
    const {
        id_rh,
        id_eps,
        health_card
    } = req.body
}

export const updateOperation = async (req, res) => {
    const { id,
        id_agent,
        id_client,
        id_travel_pack,
        id_operation_status
     } = req.body;
}