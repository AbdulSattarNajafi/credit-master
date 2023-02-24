import React from 'react';

const LtvSection = () => {
    return (
        <section>
            <div className='max-w-[820px] mx-auto px-5 pt-11 pb-8'>
                <h4 className='text-[28px] lg:text-3xl'>How Does LTV Work?</h4>
                <p className='text-lg text-lightFont font-medium mt-5'>
                    To help you understand LTV better, here’s an example.
                </p>
                <h4 className='text-[28px] lg:text-3xl mt-10'>Bank Loan </h4>
                <p className='text-lg text-lightFont font-medium mt-5'>
                    Let’s say you want to purchase a three-bedroom resale house valued at $400,000.
                </p>
                <p className='text-lg text-lightFont font-medium mt-5'>
                    Since you do not have this cash, you can get a loan from the banks while keeping
                    in mind that banks accept an LTV of 75%. This means you’ll get a loan amount of
                    $300,000, or 75% of the property’s value.
                </p>
                <h4 className='text-[28px] lg:text-3xl mt-10'>HDB Loan</h4>
                <p className='text-lg text-lightFont font-medium mt-5'>
                    With a HDB loan, using the same example, the maximum amount you can borrow is
                    85% of the property’s value, or $340,000.
                </p>
                <p className='text-lg text-lightFont font-medium mt-5'>
                    Again, you can settle 10% ($40,000) using your CPF OA and cash, and pay the
                    remainder (5%) in cash.
                </p>
                <h4 className='text-[28px] lg:text-3xl mt-10'>How Much Housing Loan Can I Take?</h4>
                <p className='text-lg text-lightFont font-medium mt-5'>
                    Before you take a loan, calculate how much the funds you have on hand that can
                    help settle the cost of buying a new home.
                </p>
                <p className='text-lg text-lightFont font-medium mt-5'>
                    Having this information will help you determine how much you can borrow.
                    Typically, lenders and HDB will analyse your borrowing capacity based on these
                    variables:
                </p>
                <h4 className='text-[28px] lg:text-3xl mt-10'>Mortgage Servicing Ratio (MSR)</h4>
                <p className='text-lg text-lightFont font-medium mt-5'>
                    The MSR refers to the percentage of your monthly income that you use to pay off
                    your mortgage. The sum of monthly mortgage payments is taken into account.
                </p>
                <p className='text-lg text-lightFont font-medium mt-5'>
                    Your monthly payment for a HDB loan or EC cannot be more than 30% of your
                    monthly income.
                </p>
                <h4 className='text-[28px] lg:text-3xl mt-10'>Total Debt Servicing Ratio (TDSR)</h4>
                <p className='text-lg text-lightFont font-medium mt-5'>
                    The TDSR refers to the percentage of your total monthly income that goes toward
                    paying off your monthly debts. It is calculated as the sum of monthly debt
                    payments.
                </p>
                <p className='text-lg text-lightFont font-medium mt-5'>
                    You must abide by the TDSR guidelines if you’re taking out a loan to buy a home
                    or a loan secured by real estate.
                </p>

                <h4 className='text-[28px] lg:text-3xl mt-10'>Loan-To-Value Ratio</h4>
                <p className='text-lg text-lightFont font-medium mt-5'>
                    The LTV ratio is the maximum amount you can borrow to finance your new home
                    purchase.
                </p>
                <p className='text-lg text-lightFont font-medium mt-5'>
                    LTV = Loan amount / Property value
                </p>
                <p className='text-lg text-lightFont font-medium mt-5'>It is determined by:</p>
                <ul className='list-disc text-lg text-lightFont font-medium leading-[1.6] ml-2 pl-3'>
                    <li className='pl-1'>Loan tenure</li>
                    <li className='pl-1'>Existing loans</li>
                    <li className='pl-1'>Any savings, credits, or other perks received</li>
                    <li className='pl-1'>
                        The monthly installment payment as a percentage of gross monthly income
                    </li>
                </ul>
                <p className='text-lg text-lightFont font-medium mt-5'>
                    Where the Option to Purchase (OTP) was issued after 6 Jul 2018, the following
                    LTV limitations apply to bank loans for residential properties:
                </p>
            </div>
        </section>
    );
};

export default LtvSection;
