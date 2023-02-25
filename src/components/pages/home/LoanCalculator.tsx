import { useReducer } from 'react';

import PrimaryButton from '../../common/PrimaryButton';
import CalculatorButton from '../../common/CalculatorButton';

import MinusIcon from '../../../assets/icons/minus-icon.svg';
import PlusIcon from '../../../assets/icons/plus-icon.svg';

enum CalculatorActionKind {
    LOANAMOUNT = 'LOAN_AMOUNT',
    LOANTENURE = 'LOAN_TENURE',
}

interface CalculatorAction {
    type: CalculatorActionKind;
    payload: number;
}

interface CalculatorState {
    loanAmount: number;
    month: number;
    monthlyInstallment: number;
    totalInterest: number;
    totalPayment: number;
}

const initailState: CalculatorState = {
    loanAmount: 500,
    month: 1,
    monthlyInstallment: 508.67,
    totalInterest: 8.67,
    totalPayment: 508.67,
};

function calculatorReducer(state: CalculatorState, action: CalculatorAction) {
    const { type } = action;

    switch (type) {
        case 'LOAN_AMOUNT':
            return {
                ...state,
                loanAmount: action.payload,
                monthlyInstallment:
                    state.loanAmount / state.month + state.totalInterest * state.month,
                totalInterest: (state.loanAmount / 100) * 1.73526 * state.month,
                totalPayment: state.loanAmount + state.totalInterest,
            };
        case 'LOAN_TENURE':
            return {
                ...state,
                month: action.payload,
                monthlyInstallment:
                    state.loanAmount / state.month + state.totalInterest * state.month,
                totalInterest: (state.loanAmount / 100) * 1.73526 * state.month,
                totalPayment: state.loanAmount + state.totalInterest,
            };
        default:
            return state;
    }
}

const LoanCalculator = () => {
    const [state, dispatch] = useReducer(calculatorReducer, initailState);

    function amountHandler(e: React.ChangeEvent<HTMLInputElement>): void {
        const amount = e?.target?.value;
        dispatch({ type: CalculatorActionKind.LOANAMOUNT, payload: +amount });
    }

    function monthHandler(e: React.ChangeEvent<HTMLInputElement>): void {
        const month = e?.target?.value;
        dispatch({ type: CalculatorActionKind.LOANTENURE, payload: +month });
    }

    function enquireHandler() {}

    return (
        <div className='container py-[100px]'>
            <h3 className='text-center'>Loan Calculator</h3>

            <div className='flex flex-col items-center space-y-[14px] mt-5 md:flex-row md:space-y-0 md:space-x-5 md:mt-10 lg:space-x-[60px] '>
                <div className='w-full md:w-1/2'>
                    <div className='flex items-center justify-between px-9'>
                        <p className='text-lightFont'>Loan Amount</p>
                        <h3 className='text-2xl md:text-3xl lg:text-[38px]'>${state.loanAmount}</h3>
                    </div>
                    <div className='flex items-center space-x-[6px]'>
                        <CalculatorButton icon={MinusIcon} onClick={() => {}} />
                        <input
                            type='range'
                            className='flex-1'
                            step='500'
                            min={500}
                            max={100000}
                            value={state.loanAmount}
                            onChange={(e: any) => {
                                amountHandler(e);
                            }}
                        />
                        <CalculatorButton icon={PlusIcon} onClick={() => {}} />
                    </div>
                    <div className='flex items-center justify-between text-lightFont px-9'>
                        <p>$500</p>
                        <p>$100,000</p>
                    </div>
                </div>
                <div className='w-full md:w-1/2'>
                    <div className='flex items-center justify-between px-9'>
                        <p className='text-lightFont'>Loan Tenure</p>
                        <h3 className='text-2xl md:text-3xl lg:text-[38px]'>
                            {state.month} months
                        </h3>
                    </div>
                    <div className='flex items-center space-x-[6px]'>
                        <CalculatorButton icon={MinusIcon} onClick={() => {}} />
                        <input
                            type='range'
                            className='flex-1'
                            min={1}
                            max={36}
                            value={state.month}
                            onChange={(e: any) => {
                                monthHandler(e);
                            }}
                        />
                        <CalculatorButton icon={PlusIcon} onClick={() => {}} />
                    </div>
                    <div className='flex items-center justify-between text-lightFont px-9'>
                        <p>1 month</p>
                        <p>36 months</p>
                    </div>
                </div>
            </div>

            {/* ========== Calulator Card =========== */}
            <div className='flex flex-col bg-white rounded-[30px] p-[30px] mt-[34px] md:flex-row md:space-x-4 lg:px-[50px]'>
                <div className='flex-1 text-center pb-5 border-b border-stroke md:text-left md:border-none md:pb-0'>
                    <h6 className='text-lightFont'>Monthly Installment</h6>
                    <p className='text-5xl font-bold leading-[1.1] mt-[2px] md:text-7xl md:mt-5 lg:text-[90px] lg:mt-[2px]'>
                        {state.monthlyInstallment.toFixed(2)}
                    </p>
                    <p className='hidden text-sm text-lightFont leading-normal mt-5 md:block'>
                        *All the numbers are calculated based on a one percent interest rate.
                    </p>
                </div>
                <div className='text-center md:w-[230px] md:text-left md:border-l md:border-stroke'>
                    <div className='border-b border-stroke md:pl-10 py-5 md:pt-0'>
                        <h6 className='text-lightFont mb-[2px]'>Total Interest</h6>
                        <h4>$16,685.60 : {state.totalInterest.toFixed(2)}</h4>
                    </div>
                    <div className='md:pl-10 pt-5'>
                        <h6 className='text-lightFont mb-[2px]'>Total Repayment</h6>
                        <h4>${state.totalPayment.toFixed(2)}</h4>
                    </div>
                </div>
                <p className='text-sm text-lightFont leading-normal mt-8 md:hidden'>
                    *All the numbers are calculated based on a one percent interest rate.
                </p>
            </div>

            <div className='flex flex-col justify-center items-center space-y-3 mt-10 md:flex-row md:space-x-[30px] md:space-y-0'>
                <p className='text-center'>
                    Happy with the numbers? You are one click away to get your money!
                </p>
                <PrimaryButton text='Enquire Now' onClick={enquireHandler} />
            </div>
        </div>
    );
};

export default LoanCalculator;
