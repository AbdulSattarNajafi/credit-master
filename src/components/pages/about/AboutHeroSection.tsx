import AvatarImage from './../../../assets/images/avatar.png';
import HousingImage from './../../../assets/images/housing-loan.png';
import { ReactComponent as Facebook } from './../../../assets/icons/facebook.svg';
import { ReactComponent as Twitter } from './../../../assets/icons/twitter.svg';
import { ReactComponent as Linkedin } from './../../../assets/icons/linkedin.svg';
import { ReactComponent as Whatsapp } from './../../../assets/icons/whatsapp.svg';
import { ReactComponent as Telegram } from './../../../assets/icons/telegram.svg';
import { ReactComponent as Linked } from './../../../assets/icons/link.svg';

const AboutHeroSection = () => {
    return (
        <section className='pt-[140px] sm:pt-[160px]'>
            <div className='max-w-[820px] mx-auto px-5'>
                <div className='flex flex-col items-center mb-5'>
                    <h3 className='text-center'>How Much Housing Loan Can I Take?</h3>
                    <div className='flex items-center space-x-[10px] mt-[30px] sm:mt-[50px]'>
                        <div className='w-10 h-10 rounded-full overflow-hidden'>
                            <img
                                src={AvatarImage}
                                alt='image'
                                className='w-full h-full object-cover rounded-full'
                            />
                        </div>
                        <p>
                            <span>by Jonathan Tan</span>
                            <span className='text-disabled'> Oct 12, 2022</span>
                        </p>
                    </div>
                </div>

                <div className='relative'>
                    <img src={HousingImage} alt='image' />

                    <p className='text-lg text-lightFont font-medium leading-[1.6] mt-10'>
                        Are you planning to purchase a new home but do not have funds ready?
                    </p>
                    <p className='text-lg text-lightFont font-medium leading-[1.6] mt-5'>
                        If so, consider taking a loan from HDB or a bank. These lenders offer loan
                        amounts up to 85% loan-to-value (LTV) ratio of the property’s value.
                    </p>
                    <p className='text-lg text-lightFont font-medium leading-[1.6] mt-5'>
                        Such a loan can get you settled in your new home and allow you to use your
                        current resources for other related costs.
                    </p>
                    <div className='flex items-center justify-center space-x-8 bg-white rounded-lg p-7 shadow-dropdown-shadow mt-10 lg:absolute lg:top-0 lg:-left-[100px] lg:flex-col lg:space-y-[25px] lg:space-x-0 lg:mt-0 lg:px-4 lg:py-6 xl:-left-[120px]'>
                        <a href='#'>
                            <Facebook />
                        </a>
                        <a href='#'>
                            <Twitter />
                        </a>
                        <a href='#'>
                            <Linkedin />
                        </a>
                        <a href='#'>
                            <Whatsapp />
                        </a>
                        <a href='#'>
                            <Telegram />
                        </a>
                        <button>
                            <Linked />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHeroSection;
