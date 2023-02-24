import React from 'react';

import ContactImage from './../../assets/images/contact-form-image.png';
import ContactImageDesktop from './../../assets/images/contact-form-desktop.png';
import Logo from './../../assets/images/header-logo.svg';
import PrivacyIcon from './../../assets/icons/privacy-checked.svg';
import Input from './Input';
import Textarea from './Textarea';
import PrimaryButton from './PrimaryButton';

const ContactForm = () => {
    function submitHandler(e: SubmitEvent) {
        e.preventDefault();
    }

    return (
        <div className='w-full'>
            <div className='relative md:flex md:justify-end'>
                <div className='flex justify-center px-5 translate-y-[70px] z-[3] sm:px-[30px] md:absolute md:left-0 md:h-full md:translate-y-0 md:p-0 md:py-[30px] md:max-w-[269px]'>
                    <div className='relative rounded-[20px] shadow-install-card-shadow md:h-full'>
                        <img src={ContactImage} alt='image' className='rounded-[20px] md:hidden' />
                        <img
                            src={ContactImageDesktop}
                            alt='image'
                            className='hidden w-full h-full object-cover rounded-[20px] md:block'
                        />
                        <div className='absolute inset-0 text-left p-7 text-white sm:p-[30px]'>
                            <h3 className=''>Still have query?</h3>
                            <p className='leading-normal mt-5 sm:text-lg'>
                                Drop us a message and we will get back to you shortly.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-full bg-input-border rounded-[20px] p-px shadow-install-card-shadow md:max-w-[73.6%] lg:max-w-[580px]'>
                    <div className='bg-white rounded-[20px] p-5 pt-[100px] sm:p-[30px] sm:pt-[100px] md:pt-[30px] md:pl-[100px]'>
                        <form className='w-full' onSubmit={(e: any) => submitHandler(e)}>
                            {/* ======= Row 1 ====== */}
                            <div className='flex flex-col space-y-[10px] sm:flex-row sm:space-y-0 sm:space-x-[10px]'>
                                <div className='w-full sm:w-1/2'>
                                    <Input type='text' placeholder='Name*' onChange={() => {}} />
                                </div>
                                <div className='w-full sm:w-1/2'>
                                    <Input
                                        type='text'
                                        placeholder='Contact Number*'
                                        onChange={() => {}}
                                    />
                                </div>
                            </div>
                            <div className='my-[10px]'>
                                <Input
                                    type='text'
                                    placeholder='Email Address*'
                                    onChange={() => {}}
                                />
                            </div>
                            <div className='flex flex-col space-y-[10px] sm:flex-row sm:space-y-0 sm:space-x-[10px]'>
                                <div className='w-full sm:w-1/2'>
                                    <Input
                                        type='number'
                                        placeholder='Loan Amount*'
                                        onChange={() => {}}
                                    />
                                </div>
                                <div className='w-full sm:w-1/2'>
                                    <Input
                                        type='number'
                                        placeholder='Monthly Income*'
                                        onChange={() => {}}
                                    />
                                </div>
                            </div>
                            <div className='my-[10px]'>
                                <Input
                                    type='text'
                                    placeholder='Type of Loan*'
                                    onChange={() => {}}
                                />
                            </div>
                            <div>
                                <Textarea
                                    name='message'
                                    id='message'
                                    placeholder='Messages'
                                    onChange={() => {}}
                                />
                            </div>
                            <div className='flex justify-between items-center pt-[30px]'>
                                <img src={Logo} alt='Logo' className='max-w-[118px] h-auto' />
                                <PrimaryButton text='Enquire Now' onClick={() => {}} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='pt-[30px] text-center text-lightFont'>
                <div className='flex items-center justify-center space-x-1 mb-1'>
                    <img src={PrivacyIcon} alt='icon' />
                    <p className='text-sm font-bold'>Your Privacy and Security, Protected.</p>
                </div>
                <p className='text-sm'>
                    We take full measures to protect your identity. By submitting this form, you
                    agree to be contacted with the information stated above. Your application is
                    100% confidential.
                </p>
            </div>
        </div>
    );
};

export default ContactForm;
