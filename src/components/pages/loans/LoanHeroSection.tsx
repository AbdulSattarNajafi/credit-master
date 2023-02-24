import React from 'react';

import BootomOverlay from '../../common/BootomOverlay';
import PrimaryButton from '../../common/PrimaryButton';
const LoanHeroSection = () => {
    function enquiryHadler() {}

    return (
        <section className='relative bg-loanHero pt-[140px] pb-[100px] h-[800px] sm:pt-[197px]'>
            <div className='relative container flex justify-center z-[6]'>
                <div className='flex flex-col items-center max-w-[580px]'>
                    <h1>Personal Loan</h1>
                    <p className='text-xl text-lightFont text-center leading-normal mb-8 mt-4 lg:mt-0'>
                        Address an emergency, get that long-awaited holiday or pay that overdue bill
                        with a personal loan.
                    </p>
                    <PrimaryButton onClick={enquiryHadler} text='Enquire Now' />
                </div>
            </div>
            <BootomOverlay />
        </section>
    );
};

export default LoanHeroSection;
