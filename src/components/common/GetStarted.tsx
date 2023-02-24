import React from 'react';
import PrimaryButton from './PrimaryButton';

interface GetStartedType {
    backgroundColor: string;
    title: string;
    text: string;
    titleClass?: string;
}

const GetStarted: React.FC<GetStartedType> = ({ backgroundColor, title, text, titleClass }) => {
    return (
        <div className='max-w-[980px] mx-auto pt-[10px] translate-y-[50px]'>
            <div
                className={`flex flex-col items-center text-center ${backgroundColor} bg-getstarted-bg bg-no-repeat bg-right-bottom rounded-[30px] py-[60px] px-4 shadow-install-card-shadow overflow-hidden`}
            >
                <h1
                    className={`text-5xl leading-[1.2] ${
                        titleClass ? titleClass : 'md:text-6xl lg:text-7xl'
                    }`}
                >
                    {title}
                </h1>
                <p className='max-w-[580px] text-xl leading-normal text-lightFont mt-2 mb-8'>
                    {text}
                </p>
                <PrimaryButton onClick={() => {}} text='Enquire Now' />
            </div>
        </div>
    );
};

export default GetStarted;
