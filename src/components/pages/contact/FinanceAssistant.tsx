import { useState } from 'react';

import ViewAllButton from '../../common/ViewAllButton';
import AssistantImage from './../../../assets/images/finance-assistant.png';

const FinanceAssistant = () => {
    const [showMoreFinance, setShowMoreFinance] = useState(false);
    const [showMoreDebt, setShowMoreDebt] = useState(false);

    function financeShowTextHandler() {
        setShowMoreFinance((prevState) => !prevState);
    }

    function debtShowTextHandler() {
        setShowMoreDebt((prevState) => !prevState);
    }

    return (
        <div className='relative container -translate-y-[100px] -mt-[270px] z-[7] sm:-mt-[160px] md:-mt-[80px] lg:-mt-[168px]'>
            <div className='relative bg-white rounded-[30px] px-[30px] pb-10 lg:p-[60px] xl:px-[100px]'>
                <div className='flex flex-col-reverse'>
                    <div className='mt-[30px] lg:w-1/2 lg:mt-0 xl:max-w-[480px]'>
                        <h3>Finance Assistant</h3>
                        <div
                            className={`relative pt-8 ${
                                showMoreFinance ? 'h-auto' : 'h-[180px]'
                            } overflow-hidden`}
                        >
                            <ul className='list-decimal text-lg text-lightFont ml-[10px] pl-3'>
                                <li>
                                    Clear and coherent explanation of loan contract terms and
                                    details to customers
                                </li>
                                <li>Assist customers with their loan applications</li>
                                <li>Accurate and careful data entry of customer details</li>
                                <li>Admin duties such as photocopying and filing</li>
                            </ul>
                            <ul className='list-disc text-lg text-lightFont mt-8 ml-[10px] mb-1 pl-3'>
                                <li>Attractive salary and commission</li>
                                <li>Daily meal allowance</li>
                                <li>Quarterly team building activities</li>
                                <li>Provide comprehensive on the job training</li>
                                <li>Place of work is near MRT station</li>
                            </ul>
                            {!showMoreFinance && (
                                <div className='absolute inset-0 bg-show-more-bg'></div>
                            )}
                        </div>
                        <ViewAllButton
                            text={showMoreFinance ? 'Show Less' : 'Show More'}
                            onClick={financeShowTextHandler}
                        />
                    </div>
                    <div className='flex justify-center px-3 lg:absolute lg:-top-[22rem] lg:right-0 lg:w-1/2 lg:px-0 xl:-top-[26rem]'>
                        <img
                            src={AssistantImage}
                            alt='Finance Assistant Image'
                            className='-mt-[21%] lg:-mt-0'
                        />
                    </div>
                </div>

                <div className='mt-[50px] lg:flex lg:items-end lg:space-x-5 lg:mt-11'>
                    <div className='lg:w-1/2'>
                        <h3>Debt Collector</h3>
                        <div
                            className={`relative pt-8 ${
                                showMoreDebt ? 'h-auto' : 'h-[180px]'
                            } overflow-hidden`}
                        >
                            <ul className='list-decimal text-lg text-lightFont ml-[10px] pl-3'>
                                <li>Call customers to remind them of their payment dates</li>
                                <li>To follow-up with customers closely for payment</li>
                                <li>Diligent and meticulous with keying in of data</li>
                                <li>Handle customers with professionalism</li>
                            </ul>

                            <ul className='list-disc text-lg text-lightFont mt-8 ml-[10px] mb-1 pl-3'>
                                <li>Attractive salary and commission</li>
                                <li>Daily meal allowance</li>
                                <li>Quarterly team building activities</li>
                                <li>Provide comprehensive on the job training</li>
                                <li>Place of work is near MRT station</li>
                            </ul>
                            {!showMoreDebt && (
                                <div className='absolute inset-0 bg-show-more-bg'></div>
                            )}
                        </div>
                        <ViewAllButton
                            text={showMoreDebt ? 'Show Less' : 'Show More'}
                            onClick={debtShowTextHandler}
                        />
                    </div>

                    <div className='mt-[50px] lg:w-1/2 lg:mt-0'>
                        <h4 className='text-base font-bold leading-[1.2] sm:text-xl md:leading-[1.4] lg:text-right lg:text-2xl'>
                            Interested applicants
                            <br /> please submit your CVs to
                        </h4>
                        <a
                            href='mailto:admin@creditmaster.com.sg'
                            className='block text-base blue-text font-bold leading-[1.2] sm:text-xl md:leading-[1.4] lg:text-right lg:text-2xl'
                        >
                            admin@creditmaster.com.sg
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinanceAssistant;
