import CustomerReviews from '@/components/productDetails/CustomerReviews';
import ProductDescription from '@/components/productDetails/ProductDescription';
import Newsletter from '@/components/shared/Newsletter';
import Head from 'next/head';


const ProductDetails = () => {
    return (
        <div>
            <Head>
                <title>Shop Details</title>
            </Head>
            <ProductDescription />
            <CustomerReviews />
            <Newsletter />
        </div>
    );
};

export default ProductDetails;