import { useReducer } from 'react';

import PrimaryButton from '../../common/PrimaryButton';
import CalculatorButton from '../../common/CalculatorButton';

import MinusIcon from '../../../assets/icons/minus-icon.svg';
import PlusIcon from '../../../assets/icons/plus-icon.svg';

enum CalculatorActionKind {
    LOANAMOUNT = 'LOAN_AMOUNT',
    LOANAMOUNTINCREASE = 'LOAN_AMOUNT_INCREASE',
    LOANAMOUNTDECREASE = 'LOAN_AMOUNT_DECREASE',
    LOANTENURE = 'LOAN_TENURE',
    LOANTENUREINCREASE = 'LOAN_TENURE_INCREASE',
    LOANTENUREDECREASE = 'LOAN_TENURE_DECREASE',
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
                    ((action.payload / 100) * 1.73527 * state.month + action.payload) / state.month,
                totalInterest: (action.payload / 100) * 1.73527 * state.month,
                totalPayment: action.payload + (action.payload / 100) * 1.73527 * state.month,
            };
        case 'LOAN_AMOUNT_INCREASE':
            if (state.loanAmount < 100000) {
                const updatedLoanAmount = state.loanAmount + action.payload;
                return {
                    ...state,
                    loanAmount: updatedLoanAmount,
                    monthlyInstallment:
                        ((updatedLoanAmount / 100) * 1.73527 * state.month + updatedLoanAmount) /
                        state.month,
                    totalInterest: (updatedLoanAmount / 100) * 1.73527 * state.month,
                    totalPayment:
                        updatedLoanAmount + (updatedLoanAmount / 100) * 1.73527 * state.month,
                };
            } else {
                return state;
            }
        case 'LOAN_AMOUNT_DECREASE':
            const updatedLoanAmount = state.loanAmount - action.payload;
            if (state.loanAmount > 500) {
                return {
                    ...state,
                    loanAmount: state.loanAmount - action.payload,
                    monthlyInstallment:
                        ((updatedLoanAmount / 100) * 1.73527 * state.month + updatedLoanAmount) /
                        state.month,
                    totalInterest: (updatedLoanAmount / 100) * 1.73527 * state.month,
                    totalPayment:
                        updatedLoanAmount + (updatedLoanAmount / 100) * 1.73527 * state.month,
                };
            } else {
                return state;
            }
        case 'LOAN_TENURE':
            return {
                ...state,
                month: action.payload,
                monthlyInstallment:
                    ((state.loanAmount / 100) * 1.73527 * action.payload + state.loanAmount) /
                    action.payload,
                totalInterest: (state.loanAmount / 100) * 1.73527 * action.payload,
                totalPayment:
                    state.loanAmount + (state.loanAmount / 100) * 1.73527 * action.payload,
            };
        case 'LOAN_TENURE_INCREASE':
            if (state.month < 36) {
                const updatedMonth = state.month + action.payload;
                return {
                    ...state,
                    month: updatedMonth,
                    monthlyInstallment:
                        ((state.loanAmount / 100) * 1.73527 * updatedMonth + state.loanAmount) /
                        updatedMonth,
                    totalInterest: (state.loanAmount / 100) * 1.73527 * updatedMonth,
                    totalPayment:
                        state.loanAmount + (state.loanAmount / 100) * 1.73527 * updatedMonth,
                };
            } else {
                return state;
            }
        case 'LOAN_TENURE_DECREASE':
            if (state.month > 1) {
                const updatedMonth = state.month - action.payload;
                return {
                    ...state,
                    month: updatedMonth,
                    monthlyInstallment:
                        ((state.loanAmount / 100) * 1.73527 * updatedMonth + state.loanAmount) /
                        updatedMonth,
                    totalInterest: (state.loanAmount / 100) * 1.73527 * updatedMonth,
                    totalPayment:
                        state.loanAmount + (state.loanAmount / 100) * 1.73527 * updatedMonth,
                };
            } else {
                return state;
            }
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

    function loanIncreaseHandler() {
        dispatch({ type: CalculatorActionKind.LOANAMOUNTINCREASE, payload: 500 });
    }

    function loanDecreaseHandler() {
        dispatch({ type: CalculatorActionKind.LOANAMOUNTDECREASE, payload: 500 });
    }

    function monthHandler(e: React.ChangeEvent<HTMLInputElement>): void {
        const month = e?.target?.value;
        dispatch({ type: CalculatorActionKind.LOANTENURE, payload: +month });
    }

    function monthIncrementHandler() {
        dispatch({ type: CalculatorActionKind.LOANTENUREINCREASE, payload: 1 });
    }
    function monthDecrementHandler() {
        dispatch({ type: CalculatorActionKind.LOANTENUREDECREASE, payload: 1 });
    }

    function enquireHandler() {}

    return (
        <div className='container py-[100px]'>
            <h3 className='text-center'>Loan Calculator</h3>

            <div className='flex flex-col items-center space-y-[14px] mt-5 md:flex-row md:space-y-0 md:space-x-5 md:mt-10 lg:space-x-[60px] '>
                <div className='w-full md:w-1/2'>
                    <div className='flex items-center justify-between px-9'>
                        <p className='text-lightFont'>Loan Amount</p>
                        <h3 className='text-2xl md:text-3xl lg:text-[38px]'>
                            ${state.loanAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        </h3>
                    </div>
                    <div className='flex items-center space-x-[6px]'>
                        <CalculatorButton icon={MinusIcon} onClick={loanDecreaseHandler} />
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
                        <CalculatorButton icon={PlusIcon} onClick={loanIncreaseHandler} />
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
                            {state.month} {state.month > 1 ? 'months' : 'month'}
                        </h3>
                    </div>
                    <div className='flex items-center space-x-[6px]'>
                        <CalculatorButton icon={MinusIcon} onClick={monthDecrementHandler} />
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
                        <CalculatorButton icon={PlusIcon} onClick={monthIncrementHandler} />
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
                        {state.monthlyInstallment
                            .toFixed(2)
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </p>
                    <p className='hidden text-sm text-lightFont leading-normal mt-5 md:block'>
                        *All the numbers are calculated based on a one percent interest rate.
                    </p>
                </div>
                <div className='text-center md:w-[230px] md:text-left md:border-l md:border-stroke'>
                    <div className='border-b border-stroke md:pl-10 py-5 md:pt-0'>
                        <h6 className='text-lightFont mb-[2px]'>Total Interest</h6>
                        <h4>
                            $
                            {state.totalInterest
                                .toFixed(2)
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        </h4>
                    </div>
                    <div className='md:pl-10 pt-5'>
                        <h6 className='text-lightFont mb-[2px]'>Total Repayment</h6>
                        <h4>
                            $
                            {state.totalPayment
                                .toFixed(2)
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        </h4>
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
