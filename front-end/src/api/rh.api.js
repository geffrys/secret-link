import axios from 'axios'

export const getRh = async () => 
    await axios.get('http://localhost:3000/api/v1/rh')

export const postRh = async (rh) =>
    await axios.post('http://localhost:3000/api/v1/rh', rh)