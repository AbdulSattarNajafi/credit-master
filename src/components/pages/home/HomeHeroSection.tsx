import PrimaryButton from '../../common/PrimaryButton';
import BootomOverlay from '../../common/BootomOverlay';
import Loan1 from '../../../assets/images/loan-1.png';
import Loan2 from '../../../assets/images/loan-2.png';
import Loan3 from '../../../assets/images/loan-3.png';
import Loan4 from '../../../assets/images/loan-4.png';

const HomeHeroSection = () => {
    function enquiryHadler() {}

    return (
        <section className='relative bg-homeHero pt-[140px] pb-[100px] h-[800px] sm:pt-[180px]'>
            <div className='relative container flex flex-col space-y-5 z-[6] sm:flex-row sm:items-end sm:space-y-0'>
                <div className='w-full sm:w-3/5 xl:w-1/2'>
                    <h1>Customised Loan Solutions</h1>
                    <h6 className='max-w-[480px] text-lightFont mb-8 mt-4'>
                        Your needs always come first. Our friendly loan advisors are on hand to
                        help.
                    </h6>
                    <PrimaryButton onClick={enquiryHadler} text='Enquire Now' />
                </div>
                <div className='flex flex-col items-end w-full sm:w-2/5 xl:w-1/2'>
                    <h3>13,200+</h3>
                    <h6 className='text-darkFont mb-3'>Loans Approved</h6>
                    <div className='flex items-center'>
                        <div className='w-[70px] h-[70px] rounded-full translate-x-[45px]'>
                            <img src={Loan1} alt='image' />
                        </div>
                        <div className='w-[70px] h-[70px] rounded-full translate-x-[30px]'>
                            <img src={Loan2} alt='image' />
                        </div>
                        <div className='w-[70px] h-[70px] rounded-full translate-x-[15px]'>
                            <img src={Loan3} alt='image' />
                        </div>
                        <div className='w-[70px] h-[70px] rounded-full translate-x-[0px]'>
                            <img src={Loan4} alt='image' />
                        </div>
                    </div>
                </div>
            </div>
            <BootomOverlay />
        </section>
    );
};

export default HomeHeroSection;
