import React from 'react';
import { ReactComponent as ChevronRight } from './../../assets/icons/chevron-right.svg';

interface ResourceCardProps {
    image: string;
    title: string;
    description: string;
    onLearnMore: () => void;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ image, title, description, onLearnMore }) => {
    return (
        <div className='flex flex-col w-full h-full transition-all duration-300 hover:-translate-y-2'>
            <div className='relative px-[30px] z-10'>
                <img src={image} alt='image' className='w-full h-auto rounded-[15px]' />
            </div>
            <div className='flex-1 relative bg-white rounded-[15px] -mt-[30px] pt-[58px] px-[30px] pb-[62px]'>
                <h6 className='font-bold mb-3'>{title}</h6>
                <p className='text-lightFont'>{description}</p>

                <button
                    className='flex items-center space-x-2 font-semibold text-brandTurquoise absolute bottom-6 right-4 transition-all duration-300 hover:scale-[1.1]'
                    onClick={onLearnMore}
                >
                    <span>Learn More</span>
                    <ChevronRight />
                </button>
            </div>
        </div>
    );
};

export default ResourceCard;
