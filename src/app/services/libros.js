import axios from 'axios';

const instance = axios.create({ baseURL: 'http://localhost:8080/cositas' });

export const createLibro = async (libro) => await instance.post('/', libro);
export const deleteLibro = async ({ id }) => await instance.post('/', { id });
export const consultLibro = async (libro) => await instance.post('/', libro);
export const updateLibro = async () => await instance.post('/');

