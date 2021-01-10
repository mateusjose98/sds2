import './styles.css';
import { toast } from 'react-toastify';
import StepsHeader from './StepsHeader';
import React, { useEffect, useState } from 'react';
import ProductsList from './ProductsList';
import { OrderLocationData, Product } from './types';
import { fetchProducts, saveOrder } from '../api';
import OrderLocation from './OrderLocation';
import OrderSummary from './OrderSummary';
import Footer from '../Footer';
import { checkIsSelected } from './helpers';


function Orders() {
    const [products, setProducts] = useState<Product[]>([]);

    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();


    const totalPrice = selectedProducts.reduce((sum, item) => {
        return sum + item.price;
    }, 0)


    const handleSubmit = () => {
        const productsIds = selectedProducts.map(({ id }) => ({ id }));
        const payload = {
          ...orderLocation!,
          products: productsIds
        }
      
        saveOrder(payload)
        .then((response) => {
          toast.error(`Pedido  ${response.data.id} enviado com sucesso!`);
          setSelectedProducts([]);
        })
          .catch(() => {
            toast.warning('Erro ao enviar pedido');
          })
      }

    console.log(products)
    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.error(error))
    }, []);


    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = checkIsSelected(selectedProducts, product);

        if (isAlreadySelected) {
            const selected = selectedProducts.filter(item => item.id !== product.id);
            setSelectedProducts(selected);
        } else {
            setSelectedProducts(previous => [...previous, product]);
        }
    }




    return (
        <>
            <div className="orders-container">
                <StepsHeader />
                <ProductsList
                    products={products}
                    onSelectProduct={handleSelectProduct}
                    selectedProducts={selectedProducts}

                />
                <OrderLocation onChangeLocation={
                    location => setOrderLocation(location)
                } />
                <OrderSummary amount={selectedProducts.length}
                    totalPrice={totalPrice} 
                    onSubmit={handleSubmit}
                    />
            </div>
            <Footer />
        </>

    )
}


export default Orders;