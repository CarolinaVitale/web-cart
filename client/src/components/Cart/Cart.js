import React, { useState } from 'react';

const Cart = () => {
    const [carrito, setCarrito] = useState([]);

    // Función para agregar un producto al carrito
    const agregarAlCarrito = (producto) => {
        // Verificar si el producto ya está en el carrito
        const existente = carrito.find(item => item.id === producto.id);
        if (existente) {
            // Si el producto ya está en el carrito, incrementar su cantidad
            setCarrito(carrito.map(item =>
                item.id === producto.id ? { ...existente, cantidad: existente.cantidad + 1 } : item
            ));
        } else {
            // Si el producto no está en el carrito, agregarlo con cantidad 1
            setCarrito([...carrito, { ...producto, cantidad: 1 }]);
        }
    };

    // Función para eliminar un producto del carrito
    const eliminarDelCarrito = (id) => {
        setCarrito(carrito.filter(item => item.id !== id));
    };

    // Función para calcular el total de la compra
    const calcularTotal = () => {
        return carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
    };

    return (
        <div>
            <h2>Carrito de Compras</h2>
            <ul>
                {carrito.map(item => (
                    <li key={item.id}>
                        <p>{item.nombre} - Cantidad: {item.cantidad}</p>
                        <button onClick={() => eliminarDelCarrito(item.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
            <p>Total: ${calcularTotal()}</p>
        </div>
    );
};

export default Cart;