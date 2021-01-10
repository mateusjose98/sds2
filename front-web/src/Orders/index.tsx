import './styles.css';
import StepsHeader from './StepsHeader';
import React, { useEffect, useState } from 'react';
import ProductsList from './ProductsList';
import { OrderLocationdata, Product } from './types';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';

function Orders() {
    const [products, setProducts] = useState<Product[]>([]);

    const [orderLocation, setOrderLocation] = useState<OrderLocationdata>(); 
    console.log(products)
    useEffect(() =>{
       fetchProducts()
       .then(response => setProducts(response.data))
       .catch(error => console.error(error))
    },[])




    return (
        
        <div className="orders-container">
            <StepsHeader />
            <ProductsList products={products}/>
            <OrderLocation onChangeLocation={location => setOrderLocation(location)}/>
        </div>
    )
}


export default Orders;