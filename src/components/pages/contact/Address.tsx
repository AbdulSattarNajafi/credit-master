import React from 'react';

import GetStarted from '../../common/GetStarted';
import AddressItem from '../../common/AddressItem';
import LocationIcon from './../../../assets/icons/location.svg';
import PhoneIcon from './../../../assets/icons/phone.svg';
import EnvelopeIcon from './../../../assets/icons/envelope.svg';
import ClockIcon from './../../../assets/icons/clock.svg';
import TrainIcon from './../../../assets/icons/train.svg';

const Address = () => {
    return (
        <div className='relative'>
            <div className='relative container z-[5]'>
                <div className='max-w-[480px]'>
                    <h3>Get In Touch</h3>
                    <p className='text-xl text-lightFont leading-normal mt-8'>
                        You are always welcome to contact us at anytime. We’ll get back to you as
                        soon as we can!
                    </p>
                </div>

                <div className='mt-[30px] mb-10 lg:relative xl:mt-[50px]'>
                    <div className='relative -mb-[70px] h-[314px] px-[30px] z-[2] lg:absolute lg:right-10 lg:bottom-10 lg:w-[430px] lg:h-[700px] lg:mb-0 lg:p-0 xl:right-[60px] xl:bottom-14 xl:w-[580px] xl:h-[720px]'>
                        <div className='h-full border-2 border-white rounded-[10px] overflow-hidden'>
                            <iframe
                                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8157609674417!2d103.84384865144241!3d1.2844736990585568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da190b46a3f531%3A0x9f7f70fb0a2d631b!2sYan%20Palace!5e0!3m2!1sen!2sid!4v1677129441446!5m2!1sen!2sid'
                                width='100%'
                                height='100%'
                                loading='lazy'
                            ></iframe>
                        </div>
                    </div>
                    <div className='bg-white rounded-[20px] px-[30px] pt-[100px] pb-10 lg:p-10 xl:p-[50px]'>
                        <div className='flex flex-col space-y-[23px] lg:max-w-[460px] xl:max-w-[490px] xl:pr-[50px]'>
                            <AddressItem
                                icon={LocationIcon}
                                title='Location'
                                text='531 Upper Cross Street#01-04 Hong Lim Complex Singapore 050531'
                            />
                            <AddressItem icon={PhoneIcon} title='Contact Number' text='6748 1338' />
                            <AddressItem
                                icon={EnvelopeIcon}
                                title='Email'
                                text='enquiry@creditmaster.sg (For administrative matters, please
                                    email to: feedback@creditmaster.sg)'
                            />
                            <AddressItem
                                icon={ClockIcon}
                                title='Opening Hours'
                                text='Monday - Saturday: 11am - 8pm Closed on Sunday and Public
                                    Holidays'
                            />
                            <AddressItem
                                icon={TrainIcon}
                                title='Nearest MRT Station'
                                text='Nearest MRT Station</p>
                                <p>Chinatown MRT Station (NEL North East Line)'
                            />
                        </div>
                    </div>
                </div>

                <GetStarted
                    title='Get Started'
                    backgroundColor='bg-white'
                    text='Apply now to get the money you need. It takes only 5 minutes!'
                />
            </div>
            <div className='absolute bottom-0 w-full h-[800px] bg-customised-laon-bg'>
                <div className='absolute top-0 bg-bottom-bg h-[400px] w-full z-[3]'></div>
            </div>
        </div>
    );
};

export default Address;
