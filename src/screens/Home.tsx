import React from 'react';
import HomeHeroSection from '../components/pages/home/HomeHeroSection';
import Licensed from '../components/pages/home/Licensed';
import Borrower from '../components/pages/home/Borrower';
import ApplySection from '../components/pages/home/ApplySection';
import Slider from '../components/pages/home/Slider';
import Installment from '../components/common/Installment';
import LoanCalculator from '../components/pages/home/LoanCalculator';
import Resources from '../components/common/Resources';
import HomeFaqSection from '../components/pages/home/HomeFaqSection';

const Home: React.FC = () => {
    return (
        <>
            <HomeHeroSection />
            <Licensed />
            <Borrower />
            <ApplySection />
            <Slider />
            <Installment />
            <LoanCalculator />
            <Resources highlightedTitle='Resources' title='for Managing Personal Finance' />
            <HomeFaqSection />
        </>
    );
};

export default Home;
