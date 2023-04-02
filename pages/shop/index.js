import Newsletter from '@/components/shared/Newsletter';
import Product from '@/components/shop/Product';
import ShopBanner from '@/components/shop/ShopBanner';


const shop = () => {
    return (
        <div>
            <ShopBanner />
            <Product />
            <Newsletter />
        </div>
    );
};

export default shop;