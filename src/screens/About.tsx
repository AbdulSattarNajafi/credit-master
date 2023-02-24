import React from 'react';

import AboutHeroSection from '../components/pages/about/AboutHeroSection';
import MaximumSection from '../components/pages/about/MaximumSection';
import LtvSection from '../components/pages/about/LtvSection';
import HdbLoanSection from '../components/pages/about/HdbLoanSection';
import DiscoverSection from '../components/pages/about/DiscoverSection';

const About = () => {
    return (
        <>
            <AboutHeroSection />
            <MaximumSection />
            <LtvSection />
            <HdbLoanSection />
            <DiscoverSection />
        </>
    );
};

export default About;
