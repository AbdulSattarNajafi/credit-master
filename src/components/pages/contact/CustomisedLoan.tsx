import React from 'react';

import ContactForm from '../../common/ContactForm';
import SignPass from './../../../assets/icons/signpass.svg';
import ChevronRight from './../../../assets/icons/chevron-right.svg';

const CustomisedLoan = () => {
    return (
        <div className='relative py-[100px] lg:pt-[120px]'>
            <div className='relative container z-[5]'>
                <div className='flex flex-col items-center max-w-[780px] mx-auto text-center '>
                    <h3 className='mb-5'>
                        Get customised loan with <span className='text-redFont'>MyInfo</span>
                    </h3>
                    <p className='text-xl text-lightFont leading-normal'>
                        Fixed installment plans doesn’t fit your need? Apply now to get your
                        customised loan. It takes only 5 minutes!
                    </p>
                    <button className='relative flex items-center space-x-1 bg-white rounded-[50px] font-semibold text-lightFont mt-8 px-5 py-2 shadow-header-btn-shadow'>
                        <span>Apply with</span>
                        <span className='translate-y-[2px]'>
                            <img src={SignPass} alt='icon' />
                        </span>
                        <span className='pl-2'>
                            <img src={ChevronRight} alt='icon' />
                        </span>
                        <span className='absolute -right-[13px] bottom-[36px]'>
                            <span className='relative bg-toltip-bg rounded-[5px] text-center text-sm text-white font-bold leading-normal py-[5px] px-[11px] z-[3]'>
                                2x faster!
                            </span>
                            <span
                                className='absolute -bottom-[7px] left-1/2 w-[14px] h-[14px] bg-toltip-arrow -translate-x-1/2 rotate-45
                            '
                            ></span>
                        </span>
                    </button>

                    <div className='w-full mt-[10px] md:mt-[90px]'>
                        <ContactForm />
                    </div>
                </div>
            </div>
            <div className='absolute top-1/2 bg-customised-laon-bg h-[800px] w-full -translate-y-1/2 z-[2] md:top-auto md:bottom-7 md:translate-y-0'>
                <div className='absolute top-0 bg-bottom-bg h-[400px] w-full z-[4]'></div>
                <div className='absolute bottom-0 bg-bottom-bg h-[400px] w-full rotate-180 z-[4]'></div>
            </div>
        </div>
    );
};

export default CustomisedLoan;
