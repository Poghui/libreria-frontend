

const TableComponent = () => {
    // Datos de ejemplo, podrías obtener estos datos de una API o una fuente de datos
    const data = [
        { id: 1, titulo: 'Producto 1', precio: 100 },
        { id: 2, titulo: 'Producto 2', precio: 150 },
        { id: 3, titulo: 'Producto 3', precio: 200 },
    ];

    return (
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
    );
};

export default TableComponent;
