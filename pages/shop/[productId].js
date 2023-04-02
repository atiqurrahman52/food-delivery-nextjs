import CustomerReviews from '@/components/productDetails/CustomerReviews';
import ProductDescription from '@/components/productDetails/ProductDescription';
import Newsletter from '@/components/shared/Newsletter';


const ProductDetails = () => {
    return (
        <div>
            <ProductDescription />
            <CustomerReviews />
            <Newsletter />
        </div>
    );
};

export default ProductDetails;