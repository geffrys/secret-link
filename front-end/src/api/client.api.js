import axios from 'axios'

export const getClients = async () => 
    await axios.get('http://localhost:3000/api/v1/clients')

export const postClient = async (client) =>
    await axios.post('http://localhost:3000/api/v1/clients', client)