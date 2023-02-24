import React from 'react';
import CheveronRight from './../../assets/icons/chevron-right.svg';

interface PrimaryButtonType {
    onClick: () => void;
    text: string;
}

const PrimaryButton: React.FC<PrimaryButtonType> = ({ onClick, text }) => {
    return (
        <button
            onClick={onClick}
            className='flex items-center space-x-2 bg-yellowGradient py-2 px-4 rounded-[50px] font-semibold transition-all duration-200 hover:scale-[1.1]'
        >
            <span>{text}</span>
            <img src={CheveronRight} alt='icon' />
        </button>
    );
};

export default PrimaryButton;
