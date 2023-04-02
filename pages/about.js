import AboutBanner from '@/components/about/AboutBanner';
import AboutCompany from '@/components/about/AboutCompany';
import OurOutlets from '@/components/about/OurOutlets';
import OurTeam from '@/components/about/OurTeam';
import Testimonial from '@/components/about/Testimonial';
import Newsletter from '@/components/shared/Newsletter';
import React from 'react';

const about = () => {
    return (
        <div>
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