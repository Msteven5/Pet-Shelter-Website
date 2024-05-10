import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS_BY_TYPE } from '../utils/queries';
import ProductList from '../components/ProductList';
import './home.css'

const ProductByType = () => {

    const { type } = useParams();

    const { data, error } = useQuery(GET_PRODUCTS_BY_TYPE, {
        variables: { productType: type }
    });

    const products = data ? data.getProductsByType : [];
    console.log(products)

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

export default ProductByType;