import axios from 'axios'

export const getClients = async () => 
    await axios.get('http://localhost:3000/api/v1/clients')

export const postClient = async (client) =>{
    await axios.post('http://localhost:3000/api/v1/clients', client)}

export const verifyClient = async (client_document_number, client_password) =>
    await axios.post(`http://localhost:3000/api/v1/clients/${client_document_number}/verify`, {"client_password":client_password})

export const verifyClientToken = async () => {
    await axios.get('http://localhost:3000/api/v1/clients/verify')
}

export const logOutClient = async () => {
    await axios.post('http://localhost:3000/api/v1/clients/logout')
}