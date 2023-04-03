import BlogDescription from '@/components/blogDetails/BlogDescription';
import BlogDetailsBanner from '@/components/blogDetails/BlogDetailsBanner';
import UsefulTips from '@/components/blogDetails/UsefulTips';
import { featuredData } from '@/data/blog/featuredData';
import { recentPostData } from '@/data/blog/recentPostData';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

const BlogDetails = () => {
    const router = useRouter()
    const { id } = router.query

    const singleBlog = featuredData?.find((item) => item.id === parseInt(id));
    const singleBlog2 = recentPostData?.find((item) => item.id === parseInt(id));
    return (
        <div>
            <Head>
                <title>Blog Details</title>
            </Head>
            <BlogDetailsBanner data ={[singleBlog, singleBlog2]} />
            <BlogDescription />
            <UsefulTips />

        </div>
    );
};

export default BlogDetails;