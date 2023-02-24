import React from 'react';
import ApprovedIcon from './../../assets/icons/approved-icon.svg';

interface SliderCardProps {
    image: string;
    loanDate: string;
    totalLoan: string;
    insallmnet: string;
    loanApprove: string;
}

const SliderCard: React.FC<SliderCardProps> = ({
    image,
    loanDate,
    totalLoan,
    insallmnet,
    loanApprove,
}) => {
    return (
        <div className='relative flex justify-center w-full h-full px-3 sm:px-5'>
            <div className='absolute right-0 top-5 bg-white p-[5px] rounded-md  shadow-label-shadow sm:top-6 sm:p-[10px] sm:rounded-[10px] md:top-[30px]'>
                <h6 className='text-[8px] font-bold text-lightFont sm:text-xs'>Loan Amount</h6>
                <p className='text-[6px] text-lightFont leading-tight mb-1 sm:text-[8px] sm:mb-2'>
                    {loanDate}
                </p>
                <div className='bg-background rounded-[5px] py-1 px-2'>
                    <h6 className='text-[8px] font-bold text-lightFont sm:text-xs'>
                        {totalLoan}.<sup>00</sup>
                    </h6>
                    <p className='text-[4px] text-lightFont leading-tight sm:text-[6px]'>Total</p>
                </div>
                <div className='bg-background rounded-[5px] py-1 px-2 mt-1 sm:mt-[5px]'>
                    <h6 className='text-[8px] font-bold text-lightFont sm:text-xs'>
                        {insallmnet}.<sup>00</sup>
                    </h6>
                    <p className='text-[4px] text-lightFont leading-tight sm:text-[6px]'>
                        Installment/ month
                    </p>
                </div>
            </div>
            <img src={image} alt='image' className='w-full h-full rounded-[20px]' />

            <div className='absolute left-0 bottom-5 flex items-center space-x-1 bg-white rounded-md p-[5px] shadow-label-shadow sm:bottom-6 sm:space-x-2  sm:rounded-[10px] sm:p-[10px] md:bottom-[49px]'>
                <div className='flex items-center justify-center w-5 h-5 p-1 sm:w-7 sm:h-7 bg-lightFont rounded-md'>
                    <img src={ApprovedIcon} alt='icon' />
                </div>
                <div>
                    <h6 className='text-[8px] font-bold text-lightFont sm:text-xs'>
                        {loanApprove}
                    </h6>
                    <p className='text-[6px] text-lightFont leading-tight'>on {loanDate}</p>
                </div>
            </div>
        </div>
    );
};

export default SliderCard;
