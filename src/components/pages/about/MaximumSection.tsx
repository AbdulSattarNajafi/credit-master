import React from 'react';

import ContactForm from '../../common/ContactForm';

const MaximumSection = () => {
    return (
        <section>
            <div className='max-w-[820px] mx-auto px-5 pt-10'>
                <h4 className='text-[28px] lg:text-3xl'>
                    What Is The LTV Ratio & What To Know About The Maximum LTV Ratio?
                </h4>
                <p className='text-lg text-lightFont font-medium mt-5'>
                    The LTV ratio is the maximum amount you can borrow to finance the purchase of
                    your new home based on its value.
                </p>
                <p className='text-lg text-lightFont font-medium mt-5'>
                    Lenders or banks in Singapore use LTV to measure the relationship between the
                    loan amount you’re seeking and the property’s market value to determine the loan
                    amount.
                </p>
                <p className='text-lg text-lightFont font-medium mt-5 mb-[50px]'>
                    In other words, if you want to purchase a new home and sell your old one but do
                    not have enough funds, you can use the old property to secure a loan for the new
                    one.
                </p>
                <ContactForm />
            </div>
        </section>
    );
};

export default MaximumSection;
