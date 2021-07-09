import productData from '../../productos.json';

type Producto = { nombre: string; precio: number; existencia: number }

const Productos = () => {
    const productos: Producto[] = productData;
    return (
        <ul>
            {productos.map((producto: Producto, index: number) => (
                <li key={index}>
                    <p>Nombre : {producto.nombre} Precio : {producto.precio} Stock: {producto.existencia}</p>
                </li>))
            }
        </ul>
    );
}

export default Productos;