import { useState } from 'react';

import Apply1 from '../../../assets/images/apply-1.png';
import Apply2 from '../../../assets/images/apply-2.png';
import Apply3 from '../../../assets/images/apply-3.png';

const GetLoan = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className='container pb-[100px]'>
            <div className='max-w-[980px] bg-white rounded-[30px] mx-auto pt-[50px] lg:pt-[60px]'>
                <h3 className='text-center px-2'>Getting a loan has never been easier</h3>
                <div className='flex items-center justify-center w-full pt-8 pb-11 px-6'>
                    <button
                        className={`text-lg ${
                            activeTab === 0 ? 'blue-text' : 'text-disabled'
                        } font-semibold leading-normal`}
                        onClick={() => {
                            setActiveTab(0);
                        }}
                    >
                        <span className='md:hidden'>Apply</span>
                        <span className='hidden md:block'>Apply with Singpass</span>
                    </button>
                    <div className='w-8 border-t border-stroke mx-2 md:w-12 md:mx-[10px]'></div>
                    <button
                        className={`text-lg ${
                            activeTab === 1 ? 'blue-text' : 'text-disabled'
                        } font-semibold leading-normal`}
                        onClick={() => {
                            setActiveTab(1);
                        }}
                    >
                        <span className='md:hidden'>Get</span>
                        <span className='hidden md:block'>Get approval</span>
                    </button>
                    <div className='w-8 border-t border-stroke mx-2 md:w-12 md:mx-[10px]'></div>
                    <button
                        className={`text-lg ${
                            activeTab === 2 ? 'blue-text' : 'text-disabled'
                        } font-semibold leading-normal`}
                        onClick={() => {
                            setActiveTab(2);
                        }}
                    >
                        <span className='md:hidden'>Collect</span>
                        <span className='hidden md:block'>Collect your money</span>
                    </button>
                </div>
                <div className='flex flex-col h-[374px] max-w-[780px] w-full mx-auto rounded-br-[30px] rounded-bl-[30px] overflow-hidden md:h-[422px]'>
                    {/* ========= Apply with Singpass ========== */}
                    <div
                        className='relative flex items-end justify-center w-full min-h-full pb-5 overflow-hidden'
                        style={{ transform: `translateY(-${activeTab * 100}%)` }}
                    >
                        <img
                            src={Apply1}
                            alt='image'
                            className='relative max-w-[462px] w-full h-auto z-[3]'
                        />
                        <div className='absolute w-[500px] bottom-0 h-[500px] bg-get-loan-apply rounded-[50%] blur-[48px] translate-y-1/2'></div>
                    </div>

                    {/* ========= Get approval ========== */}
                    <div
                        className='relative flex items-end justify-center w-full min-h-full pb-5 overflow-hidden'
                        style={{ transform: `translateY(-${activeTab * 100}%)` }}
                    >
                        <img
                            src={Apply2}
                            alt='image'
                            className='relative max-w-[462px] w-full h-auto z-[3]'
                        />
                        <div className='absolute w-[500px] bottom-0 h-[500px] bg-get-loan-get rounded-[50%] blur-[48px] translate-y-1/2'></div>
                    </div>

                    {/* ========= Collect your money ========== */}
                    <div
                        className='relative flex items-end justify-center w-full min-h-full pb-5 overflow-hidden'
                        style={{ transform: `translateY(-${activeTab * 100}%)` }}
                    >
                        <img
                            src={Apply3}
                            alt='image'
                            className='relative max-w-[462px] w-full h-auto z-[3]'
                        />
                        <div className='absolute w-[500px] bottom-0 h-[500px] bg-get-loan-collect rounded-[50%] blur-[48px] translate-y-1/2'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetLoan;
