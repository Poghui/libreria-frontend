import { useEffect, useState } from "react";
import { consultLibro, createLibro, deleteLibro } from "../app/services/libros";


const TableComponent = () => {
    // Datos de ejemplo, podrías obtener estos datos de una API o una fuente de datos
    const data = [
        { id: 1, titulo: 'Producto 1', precio: 100 },
        { id: 2, titulo: 'Producto 2', precio: 150 },
        { id: 3, titulo: 'Producto 3', precio: 200 },
    ];
    const [id, setId] = useState()
    const [titulo, setTitulo] = useState()
    const [precio, setPrecio] = useState()
    const [libros,setLibros] = useState([])

    useEffect(() =>{
        consultLibro().then((res) => setLibros(res.data))
    },[libros])

    return (
        <>
        {/* Al ser el parametro a enviar igual nombre de estado/variable/constante que enviamos podemos abreviarlo: (nombre : nombre, precio : precio ) pasa a ser (nombre, precio) */}
       
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Título</th>
                    <th>Precio</th>
                    <th>Opción</th>
                </tr>
            </thead>
            <tbody>
            
            <tr>
                <td><input type="number" placeholder="Id" onChange={e => setId(e.target.value)}/></td>
                <td><input type="text" placeholder="Titulo" onChange={e => setTitulo(e.target.value)}/></td>
                <td><input type="number" placeholder="Precio" onChange={e => setPrecio(e.target.value)}/></td>
                <td> <button className="create" onClick={()=> createLibro({titulo, precio})}>Create Libro</button></td>
            </tr>
       
                {libros.map((libro) => (
                    <tr key={libro.id}>
                        <td>{libro.id}</td>
                        <td>{libro.titulo}</td>
                        <td>{libro.precio}</td>
                        <td>
                            <button onClick={() => deleteLibro(libro.id)}>Baja</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
       
        </>
    );
};

export default TableComponent;
