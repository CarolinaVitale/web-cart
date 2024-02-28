import React, { useState, useEffect } from 'react';
import '../ProductList/ProductList.css';


const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantities, setQuantities] = useState({});

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/products`)
            .then(response => response.json())
            .then(data => {
                // Actualizar el estado productos con la lista de productos recibida del servidor
                setProducts(data);
            })
            .catch(error => {
                console.error('Error al obtener la lista de productos:', error);
            });
    }, []);

    
    // Función para agregar un producto al carrito con la cantidad seleccionada
    const agregarAlCarrito = () => {
        if (selectedProduct && quantities[selectedProduct._id] > 0) {
            const existente = cart.find(item => item._id === selectedProduct._id);
            if (existente) {
                setCart(cart.map(item =>
                    item._id === selectedProduct._id ? { ...existente, cantidad: existente.cantidad + quantities[selectedProduct._id] } : item
                ));
            } else {
                setCart([...cart, { ...selectedProduct, cantidad: quantities[selectedProduct._id] }]);
            }
            // Reiniciar la selección después de agregar al carrito
            setSelectedProduct(null);
            setQuantities({ ...quantities, [selectedProduct._id]: 0 });
        }
    };

    // Función para eliminar un producto del carrito
    const eliminarDelCarrito = (productId) => {
        const nuevoCarrito = cart.filter(item => item._id !== productId);
        setCart(nuevoCarrito);
    };

    // Función para incrementar la cantidad
    const incrementarCantidad = (productId) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: (prevQuantities[productId] || 0) + 1
        }));
    };

    // Función para decrementar la cantidad
    const decrementarCantidad = (productId) => {
        if (quantities[productId] > 0) {
            setQuantities(prevQuantities => ({
                ...prevQuantities,
                [productId]: prevQuantities[productId] - 1
            }));
        }
    };

    return (
        <div className='product-container'>
            <h2>Lista de Productos</h2>
            <ul className='product-list'>
                {products.map(product => (
                    <li className='product-item' key={product._id}>
                        <h3>{product.name}</h3>
                        <p>Precio: {product.price}</p>
                        <p>Descripción: {product.description}</p>
                        <div>
                            <button onClick={() => decrementarCantidad(product._id)}>-</button>
                            <span>{quantities[product._id] || 0}</span>
                            <button onClick={() => incrementarCantidad(product._id)}>+</button>
                        </div>
                        <button onClick={() => setSelectedProduct(product)}>Agregar al Carrito</button>
                        <button onClick={() => eliminarDelCarrito(product._id)}>Eliminar del Carrito</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default ProductList;