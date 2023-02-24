import { ReactComponent as LinkArrow } from './../../../assets/icons/link-arrow-right.svg';
import AvatarImage from './../../../assets/images/avatar.png';

const HdbLoanSection = () => {
    return (
        <section className=' py-10'>
            <div className='max-w-[820px] mx-auto overflow-x-auto px-5 scrollbar-none'>
                <table className='block min-w-[690px] w-full bg-white text-left p-[10px] rounded-2xl'>
                    <thead className='block bg-turquoise-light text-lg font-bold leading-[1.6] rounded-2xl'>
                        <tr>
                            <th className='w-1/3 p-5'>Outstanding Housing Loans</th>
                            <th className='w-1/3 p-5'>LTV Limit</th>
                            <th className='w-1/3 p-5'>Minimum Cash Downpayment</th>
                        </tr>
                    </thead>
                    <tbody className='text-lg text-lightFont font-medium p-[10px]'>
                        <tr className='border-b border-stroke'>
                            <td className='w-1/3 p-5'>None</td>
                            <td className='w-1/3 p-5'>75% or 55%</td>
                            <td className='w-1/3 p-5'>5% (for LTV of 75%) 10% (for LTV of 55%)</td>
                        </tr>
                        <tr className='border-b border-stroke'>
                            <td className='w-1/3 p-5'>1</td>
                            <td className='w-1/3 p-5'>45% or 25%</td>
                            <td className='w-1/3 p-5'>25%</td>
                        </tr>
                        <tr>
                            <td className='w-1/3 p-5'>2+</td>
                            <td className='w-1/3 p-5'>35% or 15%</td>
                            <td className='w-1/3 p-5'>25%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='max-w-[820px] mx-auto px-5 pt-10 pb-[10px]'>
                <p className='text-lg text-lightFont font-medium'>
                    If the loan term is more than 30 years (or 25 years for HDB flats), or if the
                    borrower is older than 65 years old, use the lower LTV limit.
                </p>
                <h4 className='text-[28px] lg:text-3xl mt-10'>Getting A HDB Loan</h4>
                <p className='text-lg text-lightFont font-medium mt-5'>
                    You can get a HDB loan if you are purchasing a HDB flat. As stated, you can
                    borrow up to 85% of the HDB flat property value or the purchase price.
                </p>
                <p className='text-lg text-lightFont font-medium mt-5'>
                    The loan amount you get will depend on your:
                </p>
                <ul className='list-disc text-lg text-lightFont font-medium leading-[1.6] ml-2 pl-3'>
                    <li className='pl-1'>Age</li>
                    <li className='pl-1'>Monthly salary</li>
                    <li className='pl-1'>Financial status</li>
                </ul>
                <h4 className='text-[28px] lg:text-3xl mt-10'>Eligibility Criteria</h4>
                <p className='text-lg text-lightFont font-medium mt-5'>
                    You must apply for a HDB Loan Eligibility (HLE) letter to determine your
                    eligibility for a HDB loan and the maximum housing loan in Singapore that you
                    can borrow.
                </p>
                <p className='text-lg text-lightFont font-medium mt-5'>
                    Certain eligibility requirements, such as an income cap, apply to HDB loans. You
                    can check your eligibility{' '}
                    <a
                        href='https://services2.hdb.gov.sg/webapp/BP13EligCheck/BP13SHome?strSystem=CHECK'
                        target='_blank'
                        className='underline text-brandTurquoise'
                    >
                        here
                    </a>
                    .
                </p>
                <div className='bg-green-light rounded-2xl px-5 pt-5 pb-[15px] my-10'>
                    <h5 className='text-2xl leading-[1.4] font-bold mb-[7px]'>
                        More on this topic:
                    </h5>
                    <a
                        href='#'
                        className='flex items-center space-x-8 text-lg text-green-500 font-bold leading-normal py-[15px] pl-1 border-b border-green-50 transition-all duration-300 hover:text-blue-700'
                    >
                        <LinkArrow />
                        <span>Should You Get A Bank Loan For Your HDB Flat?</span>
                    </a>
                    <a
                        href='#'
                        className='flex items-center space-x-8 text-lg text-green-500 font-bold leading-normal py-[15px] pl-1 border-b border-green-50 transition-all duration-300 hover:text-blue-700'
                    >
                        <LinkArrow />
                        <span>How Do You Calculate Your Housing Loan?</span>
                    </a>
                    <a
                        href='#'
                        className='flex items-center space-x-8 text-lg text-green-500 font-bold leading-normal py-[15px] pl-1 transition-all duration-300 hover:text-blue-700'
                    >
                        <LinkArrow />
                        <span>How To Check Your Housing Loan Balance</span>
                    </a>
                </div>
                <p className='text-lg text-lightFont font-medium'>
                    Getting a loan from a bank or HDB is an excellent idea when purchasing your new
                    home.
                </p>
                <p className='text-lg text-lightFont font-medium mt-5'>
                    However, factor in all your current resources when calculating how much housing
                    loan I can take. This will help ensure you can foot all the expenses of buying a
                    new home, such as monthly installments.
                </p>
                <p className='text-lg text-lightFont font-medium mt-5'>
                    Are you looking for a loan from a trusted money lender? Look no further.
                </p>
                <p className='text-lg text-lightFont font-medium mt-5'>
                    Apply for a loan with CreditMaster, one of Singapore’s most trusted lenders,
                    today - or contact our experienced loan officers now.
                </p>

                <div className='relative bg-reveiw-bg p-[30px] pb-10 mt-[80px] rounded-2xl md:pl-[150px] md:pr-[50px] md:mt-[70px]'>
                    <div className='absolute left-[30px] -top-[30px] border-[3px] border-background w-[100px] h-[100px] rounded-full'>
                        <img
                            src={AvatarImage}
                            alt='image'
                            className='w-full h-full rounded-full object-cover'
                        />
                    </div>
                    <div>
                        <h4 className='mb-[10px] pl-28 md:pl-0'>Jonathan Tan</h4>
                        <p className='italic'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining
                            essentially unchanged.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HdbLoanSection;
