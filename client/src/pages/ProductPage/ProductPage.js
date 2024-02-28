import React, { useState, useEffect } from 'react';
import ProductList from '../../components/ProductList/ProductList';

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        // Realizar la solicitud al servidor para obtener la lista de productos
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

    return (
        <div>
            <ProductList products={products} />
        </div>
    );
};

export default ProductPage;