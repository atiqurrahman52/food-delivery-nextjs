import BlogBanner from '@/components/blog/BlogBanner';
import FeaturedAndRecentBlog from '@/components/blog/FeaturedAndRecentBlog';
import RelatedProduct from '@/components/shared/RelatedProduct';
import Head from 'next/head';
import React from 'react';

const index = () => {
    return (
        <div>
            <Head>
                <title>Blog</title>
            </Head>
            <BlogBanner />
            <FeaturedAndRecentBlog />
            <RelatedProduct />
        </div>
    );
};

export default index;