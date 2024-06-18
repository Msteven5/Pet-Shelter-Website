import React, { useEffect } from 'react';

const ProductList = ({ _id, image, name, description, price, quantity }) => {
    const inCart = () => {
    }
    
    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = `/images/${image}`;
        link.as = 'image';
        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        };
    }, [image]);

    return (
        <div key={_id} className="col" >
            <div className="card border border-2 border-black" style={{ width: '90%', height: '525px' }}>
                <img src={`/images/${image}`} className="card-img-top" height="200px" alt="..." />
                <div className="card-body text-center">
                    <h3>{name}</h3>
                    <p className="card-text">Description: {description}</p>
                </div>
                <ul className="list-group list-group-flush text-center">
                    <li className="list-group-item">Price: ${price}</li>
                    <li className="list-group-item">In Stock: {quantity > 0 ? "Yes" : "Out of Stock"}</li>
                </ul>
                <div className="card-body d-flex align-items-center justify-content-center">
                    <div>
                        <button type="button" disabled={quantity === 0 ? true : false} className="btn btn-primary darkBackground text-white me-sm-3 fw-bold">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductList;