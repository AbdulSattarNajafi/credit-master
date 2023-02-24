import React from 'react';
import InstallmentCard from './InstallmentCard';
import PrimaryButton from './PrimaryButton';

const Installment = () => {
    function enquireHandler() {}

    return (
        <div className='relative w-full'>
            <div className='container relative z-10 px-0'>
                <h3 className='text-center px-5'>Fixed Installment Plans</h3>
                <div className='flex space-x-5 py-8 px-5 overflow-x-auto scrollbar-none sm:py-10'>
                    <InstallmentCard
                        background='bg-white'
                        totalPrice='$5,000'
                        monthlyPrice={532.76}
                        description='This offer is calculated based on 12 months loan tenure. Please check with our officer for customised loan plan.'
                        onApply={() => {}}
                    />
                    <InstallmentCard
                        background='bg-installment-card-bg'
                        totalPrice='$10,000'
                        monthlyPrice={1065.52}
                        description='This offer is calculated based on 12 months loan tenure. Please check with our officer for customised loan plan.'
                        label='Most Popular'
                        labelBackground='bg-white'
                        labelColor='text-darkFont'
                        color={true}
                        onApply={() => {}}
                    />
                    <InstallmentCard
                        border='bg-installment-card-bg'
                        background='bg-white'
                        totalPrice='$20,000'
                        monthlyPrice={1311.74}
                        description='This offer is calculated based on 24 months loan tenure. Please check with our officer for customised loan plan.'
                        label='Best Valuer'
                        labelBackground='bg-brandTurquoise'
                        labelColor='text-white'
                        onApply={() => {}}
                    />
                    <InstallmentCard
                        background='bg-white'
                        totalPrice='$50,000'
                        monthlyPrice={3279.34}
                        description='This offer is calculated based on 24 months loan tenure. Please check with our officer for customised loan plan.'
                        onApply={() => {}}
                    />
                </div>
                <div className='flex flex-col items-center justify-center space-y-3 px-5 sm:flex-row sm:space-x-[30px] sm:space-y-0'>
                    <p>Not the plan you are looking for?</p>
                    <PrimaryButton onClick={enquireHandler} text='Enquire Now' />
                </div>
            </div>
            <div className='absolute -bottom-[42px] inset-x-0 h-[200px] bg-installmentBg bg-center bg-no-repeat bg-cover'></div>
        </div>
    );
};

export default Installment;
