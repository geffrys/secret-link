import axios from 'axios'

export const getDocTypes = async () => 
    await axios.get('http://localhost:3000/api/v1/document-types')

export const postDocType = async (doc) =>
    await axios.post('http://localhost:3000/api/v1/document-types', doc)