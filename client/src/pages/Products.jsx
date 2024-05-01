import { useState, useEffect } from "react";
import { useQuery, useMutation } from '@apollo/client';
import { GET_PRODUCTS, GET_PRODUCTS_BY_TYPE } from '../utils/queries'

const Products = () => {

    const { data, error } = useQuery(GET_PRODUCTS);
    const products = data ? data.getProducts : [];

    return (
        <>
            <div className="container">
                <div className="row row-cols-1 row-cols-xlg-3 row-cols-md-3 g-4 flex-fill my-5">
                    {products.map((product) => (
                        <div key={product._id} className="col" >
                            <div className="card" style={{ width: '24rem' , height: '500px'}}>
                                <img src={`/images/${product.image}`} className="card-img-top" height="200px" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">Description: {product.description}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Price: {product.price}</li>
                                    <li className="list-group-item">In Stock: {product.quantity}</li>
                                </ul>
                                <div className="card-body d-flex justify-content-center">
                                    <button type="button" className="btn btn-outline-info px-2 me-sm-3 fw-bold">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};

export default Products;