import React from 'react';
import { ReactComponent as ChevronRight } from './../../assets/icons/chevron-right.svg';

interface ViewAllButtonType {
    onClick: () => void;
    text: string;
}

const ViewAllButton: React.FC<ViewAllButtonType> = ({ onClick, text }) => {
    return (
        <button
            onClick={onClick}
            className='flex items-center space-x-2 text-brandTurquoise font-semibold'
        >
            <span>{text}</span>
            <ChevronRight />
        </button>
    );
};

export default ViewAllButton;
