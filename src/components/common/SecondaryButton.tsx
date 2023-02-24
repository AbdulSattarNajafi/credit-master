import React from 'react';
import { ReactComponent as Icon } from './../../assets/icons/chevron-right.svg';

interface SecondaryButtonType {
    text: string;
    onClick: () => void;
}

const SecondaryButton: React.FC<SecondaryButtonType> = ({ text, onClick }) => {
    return (
        <button
            className='flex items-center space-x-2 bg-easyBg rounded-[50px] font-bold text-white py-2 px-5 transition-all duration-200 hover:scale-[1.1]'
            onClick={onClick}
        >
            <span>{text}</span>
            <Icon />
        </button>
    );
};

export default SecondaryButton;
