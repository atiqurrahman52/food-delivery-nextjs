import BlogBanner from '@/components/blog/BlogBanner';
import FeaturedAndRecentBlog from '@/components/blog/FeaturedAndRecentBlog';
import RelatedProduct from '@/components/shared/RelatedProduct';
import React from 'react';

const index = () => {
    return (
        <div>
            <BlogBanner />
            <FeaturedAndRecentBlog />
            <RelatedProduct />
        </div>
    );
};

export default index;