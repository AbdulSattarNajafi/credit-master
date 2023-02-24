import React from 'react';

import RescourceCard from './ResourceCard';
import Resource1 from './../../assets/images/resource-1.png';
import Resource2 from './../../assets/images/resource-2.png';
import Resource3 from './../../assets/images/resource-3.png';

const Resources: React.FC<{ highlightedTitle: string; title: string }> = ({
    highlightedTitle,
    title,
}) => {
    return (
        <div className='container'>
            <h3 className='text-center max-w-[580px] mx-auto mb-8 md:mb-10'>
                <span className='blue-text'>{highlightedTitle} </span> {title}
            </h3>
            <div className='flex flex-col space-y-[30px] sm:flex-row sm:flex-wrap sm:space-y-0 lg:flex-nowrap lg:space-x-5 xl:space-x-10'>
                <div className='sm:w-1/2 sm:pr-2 lg:w-1/3 lg:p-0'>
                    <RescourceCard
                        image={Resource1}
                        title='How Much Housing Loan Can I Take?'
                        description='Are you planning to purchase a new home but do not have funds ready? If so, consider taking a loan from HDB or a bank. These lenders offer loan amount...'
                        onLearnMore={() => {}}
                    />
                </div>
                <div className='sm:w-1/2 sm:pl-2 lg:w-1/3 lg:p-0'>
                    <RescourceCard
                        image={Resource2}
                        title='What Are Licensed Money Lenders And How Much Can I Loan?'
                        description='Unforeseen circumstances may knock at your door at any time and you will find yourself in a financial rut. In such...'
                        onLearnMore={() => {}}
                    />
                </div>
                <div className='sm:w-1/2 sm:pt-[30px] sm:pr-2 lg:w-1/3 lg:p-0'>
                    <RescourceCard
                        image={Resource3}
                        title='24-hour Money Lender Guide: Legal Personal Loans From Licensed Money Lenders In Singapore'
                        description='There are always unexpected situation...'
                        onLearnMore={() => {}}
                    />
                </div>
            </div>
        </div>
    );
};

export default Resources;
