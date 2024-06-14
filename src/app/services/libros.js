import axios from 'axios';
<<<<<<< HEAD
const instance = axios.create({ baseURL: 'http://localhost:8080/libro' });

export const createLibro = async (libro) => await instance.post('/', libro)
=======
const instance = axios.create({ baseURL: 'http://localhost:8080/cositas' });

export const createLibro = async (libro) => await instance.post('/', libro);
export const deleteLibro = async ({id}) => await instance.post('/', {id});
export const consultLibro = async (libro) => await instance.post('/', libro);
export const updateLibro = async () => await instance.post('/');
>>>>>>> 4435ec55c66cc516b3d60c0c7c6d63535c01d8af
