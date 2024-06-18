import React, { useEffect } from 'react';
import './home.css';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../utils/queries';
import ProductList from '../components/ProductList';

const Products = () => {
    const { data, error } = useQuery(GET_PRODUCTS);
    const products = data ? data.getProducts : [];

    useEffect(() => {
        const container = document.querySelector('body');

        function createDogTreat() {
            const dogTreat = document.createElement('div');
            dogTreat.classList.add('dog-treat');
            dogTreat.style.left = `${Math.random() * 95}vw`;
            dogTreat.style.animationDuration = `${Math.random() * 20 + 20}s`; // Duration between 5s and 10s

            container.appendChild(dogTreat);

            dogTreat.addEventListener('animationend', () => {
                dogTreat.remove();
            });
        }

        const intervalId = setInterval(createDogTreat, 300); // Create a new dog treat every 1000ms (1 second)

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div className="container container2">
                <div className="row row-cols-1 row-cols-xlg-3 row-cols-md-3 g-4 flex-fill my-5">
                    {products.map((product) => (
                        <ProductList
                            key={product._id}
                            _id={product._id}
                            image={product.image}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            quantity={product.quantity} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Products;
