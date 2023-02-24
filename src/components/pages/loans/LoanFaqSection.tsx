import React from 'react';
import Faq from '../../common/Faq';
import { loanFaq } from '../../../constant.ts';
import Resources from '../../common/Resources';
import GetStarted from '../../common/GetStarted';

const LoanFaqSection = () => {
    return (
        <div className='relative pt-[100px]'>
            <div className='relative container z-[5]'>
                <h3 className='text-center mb-10'>
                    Frequently Asked <span className='blue-text'>Questions</span>
                </h3>
                <Faq faqData={loanFaq} />
                <div className='py-[60px]'>
                    <Resources highlightedTitle='Discover' title='more with CreditMaster' />
                </div>

                <GetStarted
                    backgroundColor='bg-white'
                    title='Get Started'
                    text='Apply now to get the money you need. It takes only 5 minutes!'
                />
            </div>

            <div className='absolute bottom-0 bg-loan-faq-bg h-[800px] w-full rotate-180 z-[2]'></div>
            <div className='absolute bottom-[200px] bg-bottom-bg h-[600px] w-full z-[4]'></div>
        </div>
    );
};

export default LoanFaqSection;
