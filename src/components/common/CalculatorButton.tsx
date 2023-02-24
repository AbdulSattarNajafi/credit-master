import React from 'react';

const CalculatorButton: React.FC<{ onClick: () => void; icon: string }> = ({ onClick, icon }) => {
    return (
        <button
            type='button'
            onClick={onClick}
            className='flex justify-center items-center w-[30px] h-[30px] border-2 border-darkFont rounded-full'
        >
            <img src={icon} alt='icon' />
        </button>
    );
};

export default CalculatorButton;
