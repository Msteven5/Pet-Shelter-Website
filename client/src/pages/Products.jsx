import './home.css'
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../utils/queries'
const Products = () => {

    const { data, error } = useQuery(GET_PRODUCTS);
    const products = data ? data.getProducts : [];

    return (
        <>
            <div className="container">
                <div className="row row-cols-1 row-cols-xlg-3 row-cols-md-3 g-4 flex-fill my-5">
                    {products.map((product) => (
                        <div key={product._id} className="col" >
                            <div className="card" style={{ width: '24rem', height: '500px' }}>
                                <img src={`/images/${product.image}`} className="card-img-top" height="200px" alt="..." />
                                <div className="card-body text-center">
                                    <h3>{product.name}</h3>
                                    <p className="card-text">Description: {product.description}</p>
                                </div>
                                <ul className="list-group list-group-flush text-center">
                                    <li className="list-group-item">Price: ${product.price}</li>
                                    <li className="list-group-item">In Stock: {product.quantity > 0 ? "Yes" : "Out of Stock"}</li>
                                </ul>
                                <div className="card-body d-flex justify-content-center">
                                <div>
                                    <button type="button" disabled={product.quantity === 0 ? true : false} className="btn btn-outline-info me-sm-3 fw-bold">Add to Cart</button>
                                </div>
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