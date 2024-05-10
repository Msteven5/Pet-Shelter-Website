import './home.css'
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../utils/queries'
import ProductList from '../components/ProductList';

const Products = () => {

    const { data, error } = useQuery(GET_PRODUCTS);
    const products = data ? data.getProducts : [];

    return (
        <>
            <div className="container">
                <div className="row row-cols-1 row-cols-xlg-3 row-cols-md-3 g-4 flex-fill my-5">
                    {products.map((product) => (
                        <ProductList
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
    )
};

export default Products;