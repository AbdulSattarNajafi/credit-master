import License from '../../../assets/images/license.png';

const Licensed = () => {
    return (
        <div className='container relative -mt-[180px] z-[6] sm:-mt-[212px]'>
            <div className='relative flex flex-col bg-white rounded-[30px] py-10 px-[30px] lg:flex-row  lg:items-center lg:space-x-5 lg:py-0 xl:space-x-11 xl:px-[100px]'>
                <h3 className='order-2 min-w-[280px] mb-5 sm:text-center lg:order-1 lg:text-left lg:mb-0'>
                    Top Licensed <span className='blue-text'>Money Lender</span> Singapore
                </h3>
                <div className='order-1 min-w-[230px] -mt-16 -translate-y-5 sm:self-center sm:-mt-20 lg:-translate-y-[60px] lg:-mt-0'>
                    <img src={License} alt='License' />
                </div>

                <p className='order-3 text-lightFont text-lg leading-normal sm:text-center lg:text-right'>
                    CreditMaster is a licensed money lender that is operating under the purview of
                    the Ministry of Law’s Registry of Moneylenders since 1996. We believes in going
                    the extra mile to help our clients by providing loans that they can repay -
                    easily and quickly.
                </p>
            </div>
        </div>
    );
};

export default Licensed;
