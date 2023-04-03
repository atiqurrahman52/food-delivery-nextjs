import AboutBanner from '@/components/about/AboutBanner';
import AboutCompany from '@/components/about/AboutCompany';
import OurOutlets from '@/components/about/OurOutlets';
import OurTeam from '@/components/about/OurTeam';
import Testimonial from '@/components/about/Testimonial';
import Newsletter from '@/components/shared/Newsletter';
import Head from 'next/head';
import React from 'react';

const about = () => {
    return (
        <div>
            <Head>
                <title> About</title>
            </Head>
            <AboutBanner />
            <AboutCompany />
            <OurTeam />
            <Testimonial />
            <OurOutlets />
            <Newsletter />
        </div>
    );
};

export default about;