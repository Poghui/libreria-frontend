import { useState } from "react";
import { createLibro } from "../app/services/libros";


const TableComponent = () => {
    // Datos de ejemplo, podrías obtener estos datos de una API o una fuente de datos
    const data = [
        { id: 1, titulo: 'Producto 1', precio: 100 },
        { id: 2, titulo: 'Producto 2', precio: 150 },
        { id: 3, titulo: 'Producto 3', precio: 200 },
    ];
    const [id, setId] = useState()
    const [nombre, setNombre] = useState()
    const [precio, setPrecio] = useState()

    return (
        <>
        {/* Al ser el parametro a enviar igual nombre de estado/variable/constante que enviamos podemos abreviarlo: (nombre : nombre, precio : precio ) pasa a ser (nombre, precio) */}
        <button onClick={()=> createLibro({nombre, precio})}>Create Libro</button>
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
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.titulo}</td>
                        <td>{item.precio}</td>
                        <td>
                            <button onClick={() => alert(`ID: ${item.id}`)}>Baja</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <table>
            <tr>
                <td><input type="number" placeholder="Id" onChange={e => setId(e.target.value)}/></td>
                <td><input type="text" placeholder="Titulo" onChange={e => setNombre(e.target.value)}/></td>
                <td><input type="number" placeholder="Precio" onChange={e => setPrecio(e.target.value)}/></td>
            </tr>
        </table>
        </>
    );
};

export default TableComponent;
