import React from 'react';

import ViewAllButtons from '../../common/ViewAllButton';
import MoneyImage from '../../../assets/images/money.png';
import ClockImage from '../../../assets/images/clock.png';

const HelpSection = () => {
    return (
        <div className='container py-[100px]'>
            <div className='pb-2 md:flex md:items-center md:space-x-8 md:pb-5 lg:space-x-12 xl:space-x-4'>
                <div className='flex justify-center mb-10 md:w-1/2'>
                    <img src={MoneyImage} alt='Loan Image' />
                </div>
                <div className='md:w-1/2 xl:pl-[104px]'>
                    <h3 className='mb-8'>
                        They say that the only constant in life is
                        <span className='blue-text'> change</span>
                    </h3>
                    <p className='text-lg text-lightFont leading-normal'>
                        So what do you do if you need money urgently to address an emergency?
                    </p>
                    <p className='text-lg text-lightFont leading-normal my-4'>
                        You can’t afford to wait for a bank to approve your loan application. Nor do
                        you want to ask for a loan from your close friends and family members.
                    </p>
                    <p>Remember that there is always a silver lining in every cloud.</p>
                </div>
            </div>
            <div className='pt-16 md:flex md:flex-row-reverse md:items-center'>
                <div className='flex justify-center mb-10 md:w-1/2 md:justify-start md:pl-4 xl:pl-[96px]'>
                    <img src={ClockImage} alt='Clock Image' />
                </div>
                <div className='md:md:w-1/2 md:max-w-[480px] md:mr-auto md:pr-4'>
                    <h3 className='mb-8'>
                        CreditMaster can give you the
                        <span className='blue-text'> help you need</span>
                    </h3>
                    <p className='text-lg text-lightFont leading-normal'>
                        We offer on-the-spot loan disbursement. It takes just a day to give you the
                        money - or 30 minutes - if you have all your documents ready.
                    </p>
                    <p className='text-lg text-lightFont leading-normal mt-4 mb-1'>
                        Enquire now and see for yourself.
                    </p>
                    <ViewAllButtons text='View All Reviews' onClick={() => {}} />
                </div>
            </div>
        </div>
    );
};

export default HelpSection;
