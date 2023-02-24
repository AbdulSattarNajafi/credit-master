import React from 'react';

import Signpass from './../../assets/icons/signpass.svg';
import ChevronRight from './../../assets/icons/chevron-right.svg';

const SignPassButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    return (
        <button
            type='button'
            className='flex items-center space-x-3 bg-white rounded-[50px] py-1 px-4 shadow-header-btn-shadow transition-all duration-200 hover:scale-[1.1] lg:py-2 lg:px-5'
            onClick={onClick}
        >
            <span className='flex flex-col items-start'>
                <span className='text-xs font-semibold mb-[1px]'>Apply with</span>
                <img src={Signpass} alt='sign pass' className='w-[70px] lg:w-auto' />
            </span>
            <span>
                <img src={ChevronRight} alt='arrow' />
            </span>
        </button>
    );
};

export default SignPassButton;
