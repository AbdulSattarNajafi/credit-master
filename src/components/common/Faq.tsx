import React, { useState } from 'react';

import SecondaryButton from './SecondaryButton.js';
import FaqIcon from './../../assets/icons/faq-icon.svg';

interface FaqDataType {
    question: string;
    answers: string[];
    points?: string[];
}

interface FaqType {
    faqData: FaqDataType[];
}

const Faq: React.FC<FaqType> = ({ faqData }) => {
    const [index, setIndex] = useState(-1);

    function showHandler(i: number) {
        if (index === i) {
            setIndex(-1);
            return;
        }
        setIndex(i);
    }

    return (
        <>
            <div className='max-w-[780px] mx-auto'>
                {faqData.map((faq, i) => {
                    return (
                        <div
                            className={`border-b ${
                                index === i ? 'border-brandTurquoise' : 'border-stroke'
                            } py-5`}
                            key={i}
                        >
                            <div className='flex items-start space-x-5'>
                                <h6 className='flex-1 font-medium'>{faq.question}</h6>
                                <button onClick={showHandler.bind(null, i)} className='mt-[8px]'>
                                    <img
                                        src={FaqIcon}
                                        alt='icon'
                                        className={`transition-all duration-200 ${
                                            index === i ? 'rotate-[135deg]' : 'rotate-0'
                                        }`}
                                    />
                                </button>
                            </div>
                            <div className={`${index === i ? 'h-auto' : 'h-0'} overflow-hidden`}>
                                {faq.answers.map((item, i) => {
                                    return (
                                        <p key={i} className='text-lg text-lightFont mt-[22px]'>
                                            {item}
                                        </p>
                                    );
                                })}
                                {faq.points && (
                                    <ul className='list-disc text-lg text-lightFont mt-[22px] pl-2 ml-4'>
                                        {faq.points?.map((point, i) => {
                                            return <li key={i}>{point}</li>;
                                        })}
                                    </ul>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className='flex justify-center py-10'>
                <SecondaryButton text='View All FAQs' onClick={() => {}} />
            </div>
        </>
    );
};

export default Faq;
