import PersonalLoanImage from '../../../assets/images/personal-loan.png';
import Icon from '../../../assets/icons/checked-icon.svg';

const PersonalLoan = () => {
    return (
        <div className='relative container -mt-[352px] z-[6] sm:-mt-[346px] lg:-mt-[300px]'>
            <div className='max-w-[980px] bg-white rounded-[30px] mx-auto md:flex'>
                <div className='relative px-5 py-[30px] z-[7] sm:p-[30px] md:w-1/2 md:pr-4 lg:p-0 lg:max-w-[400px] lg:pt-[60px]'>
                    <h3 className='leading-[1.2] lg:translate-x-20'>
                        Use Personal Loan for <span className='blue-text'>Anything</span>
                    </h3>
                    <div className='flex items-center space-x-2 bg-white rounded-[15px] py-3 px-4 mt-[30px] shadow-dropdown-shadow sm:py-4 sm:px-5 lg:mt-10 lg:-translate-x-10 xl:px-[30px]'>
                        <img src={Icon} alt='icon' />
                        <p className='text-lightFont sm:text-xl'>
                            <span className='font-bold'>Pay off</span> long-overdue bill
                        </p>
                    </div>
                    <div className='flex items-center space-x-2 bg-white rounded-[15px] py-3 px-4 mt-5 shadow-dropdown-shadow sm:py-4 sm:px-5 lg:translate-x-[30px] xl:px-[30px]'>
                        <img src={Icon} alt='icon' />
                        <p className='text-lightFont sm:text-xl'>
                            <span className='font-bold'>Buy</span> something you need
                        </p>
                    </div>
                    <div className='flex items-center space-x-2 bg-white rounded-[15px] py-3 px-4 my-5 shadow-dropdown-shadow sm:py-4 sm:px-5 md:mb-0 lg:mt-2 lg:translate-y-3 lg:-translate-x-4 xl:px-[30px]'>
                        <img src={Icon} alt='icon' />
                        <p className='text-lightFont sm:text-xl'>
                            <span className='font-bold'>Solve</span> a problem
                        </p>
                    </div>
                </div>
                <div className='relative rounded-[30px] md:w-1/2 lg:flex-1'>
                    <div className='absolute inset-0 bg-personal-loan-bg'></div>
                    <img
                        src={PersonalLoanImage}
                        className='w-full h-auto rounded-[30px] md:h-full md:object-cover lg:h-auto lg:object-none'
                        alt='Loan Image'
                    />
                </div>
            </div>
        </div>
    );
};

export default PersonalLoan;
