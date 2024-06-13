import axios from 'axios';
const instance = axios.create({ baseURL: 'http://localhost:8080/libro' });

export const createLibro = async (libro) => await instance.post('/', libro)