import Newsletter from '@/components/shared/Newsletter';
import Product from '@/components/shop/Product';
import ShopBanner from '@/components/shop/ShopBanner';
import Head from 'next/head';


const shop = () => {
    return (
        <div>
            <Head>
                <title>Shop</title>
            </Head>
            <ShopBanner />
            <Product />
            <Newsletter />
        </div>
    );
};

export default shop;