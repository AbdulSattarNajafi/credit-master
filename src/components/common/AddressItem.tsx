import React from 'react';

interface AddressItemType {
    icon: string;
    title: string;
    text: string;
}

const AddressItem: React.FC<AddressItemType> = ({ icon, title, text }) => {
    return (
        <div className='flex items-start space-x-[15px]'>
            <div className='flex justify-center w-6 pt-[3px]'>
                <img src={icon} alt='icon' />
            </div>
            <div className='flex-1 text-lg text-lightFont leading-normal'>
                <p className='font-bold text-darkFont'>{title}</p>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default AddressItem;
