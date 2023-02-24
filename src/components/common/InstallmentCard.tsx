import React from 'react';

import Signpass from './../../assets/icons/signpass.svg';
import ChevronRight from './../../assets/icons/chevron-right.svg';

interface InstallmentCardProps {
    background: string;
    totalPrice: string;
    monthlyPrice: number;
    description: string;
    onApply: () => void;
    color?: boolean;
    border?: string;
    label?: string;
    labelBackground?: string;
    labelColor?: string;
}

const InstallmentCard: React.FC<InstallmentCardProps> = ({
    background,
    totalPrice,
    monthlyPrice,
    description,
    onApply,
    color,
    border,
    label,
    labelBackground,
    labelColor,
}) => {
    return (
        <div
            className={`min-w-[260px] max-w-[260px] h-[380px] transition-all duration-300 hover:-translate-y-2 rounded-[20px] shadow-install-card-shadow ${
                border ? 'p-[1px]' : ''
            } ${border} sm:min-w-[280px] sm:max-w-[280px]`}
        >
            <div
                className={`relative flex flex-col justify-end items-start w-full h-full ${background} rounded-[19px] p-[30px] ${
                    color ? 'text-white' : ''
                }`}
            >
                {label && (
                    <div
                        className={`${labelBackground} ${labelColor} text-sm font-bold leading-normal rounded-[10px] py-1 px-4 mb-5`}
                    >
                        {label}
                    </div>
                )}
                <h5 className='mb-1'>LOAN AMOUNT</h5>
                <h3>{totalPrice}</h3>
                <p className='text-lg leading-normal mb-3'>${monthlyPrice}/month</p>
                <p
                    className={`text-sm leading-normal ${
                        color ? 'text-background' : 'text-darkFont'
                    } mb-[26px]`}
                >
                    {description}
                </p>

                <button
                    className='self-end flex items-center space-x-3 bg-white rounded-tl-[50px] rounded-bl-[50px] py-2 px-5 shadow-header-btn-shadow translate-x-[30px] text-darkFont transition-all duration-300 hover:scale-[1.1] hover:translate-x-[22px]'
                    onClick={onApply}
                >
                    <span className='flex flex-col items-start'>
                        <span className='text-xs font-semibold mb-[1px]'>Apply with</span>
                        <img src={Signpass} alt='Singpass icon' />
                    </span>
                    <img src={ChevronRight} alt='icon' />
                </button>
            </div>
        </div>
    );
};

export default InstallmentCard;
