import HiddenFees from '../../../assets/images/hidden-fees.svg';
import ReviewImg from '../../../assets/images/countless-review.png';
import ViewAllButton from '../../common/ViewAllButton';

const Borrower = () => {
    function viewAllHandler() {}

    return (
        <div className='container py-[100px]'>
            <div className='flex flex-col items-center space-y-10 md:flex-row md:items-center md:space-y-0 md:space-x-10 xl:space-x-[100px]'>
                <div className='max-w-[310px] md:max-w-none md:w-2/5 lg:w-[600px]'>
                    <img src={HiddenFees} alt='image' />
                </div>
                <div className='md:w-3/5 xl:w-[480px]'>
                    <h3>
                        We giving every borrower the{' '}
                        <span className='blue-text'>respect and help</span> they deserve
                    </h3>
                    <p className='my-8'>
                        We understand that life is not easy. Sometimes, we find ourselves needing
                        money at short notice for reasons beyond our control.
                    </p>
                    <p>
                        So we try our best to offer friendly, knowledgeable and helpful advice, and
                        be open and transparent about the costs we charge. CreditMaster does not
                        charge any hidden fees.
                    </p>
                </div>
            </div>
            <div className='flex flex-col items-center pt-[73px] lg:flex-row lg:space-y-0 lg:space-x-10 lg:pt-[77px] xl:items-end xl:space-x-[120px]'>
                <div className='order-2 mt-10 lg:w-1/2 lg:order-1 xl:w-[480px] lg:mt-0'>
                    <h3>
                        Our countless <span className='blue-text'>five-star reviews</span> attest to
                        our outstanding service
                    </h3>
                    <p className='text-lg text-lightFont my-8'>
                        Over the years, we are proud to have served thousands of borrowers who have
                        trusted us to help them. We can help you too
                    </p>
                    <p className='text-lg text-lightFont mb-2'>
                        We have been in the moneylending business for many years, so we know exactly
                        what you need.
                    </p>
                    <ViewAllButton text='View All Reviews' onClick={viewAllHandler} />
                </div>
                <div className='order-1 lg:w-1/2 lg:order-2 xl:w-[540px]'>
                    <img src={ReviewImg} alt='Review Image' />
                </div>
            </div>
        </div>
    );
};

export default Borrower;
