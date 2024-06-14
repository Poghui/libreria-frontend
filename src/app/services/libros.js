import axios from 'axios';
const instance = axios.create({ baseURL: 'http://localhost:8080/libro' });

export const createLibro = async (libro) => await instance.post('/', libro);
export const deleteLibro = async (id) => await instance.delete('/'+id);
export const consultLibro = async () => await instance.get('/')
export const updateLibro = async (libro) => await instance.put('/',libro);