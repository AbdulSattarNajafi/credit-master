import React from 'react';

interface ApplyCardProps {
    image: string;
    title: string;
    description: string;
    background: string;
}

const ApplyCard: React.FC<ApplyCardProps> = ({ image, title, description, background }) => {
    return (
        <div className='relative flex flex-col justify-between w-full h-[620px] md:flex-row md:items-center md:justify-start md:h-[500px] md:space-x-5 lg:h-[620px]'>
            <div
                className={`absolute top-0 left-5 w-[500px] h-[500px] rounded-[50%] ${background} bg-center bg-cover z-[2] lg:left-20 lg:w-[620px] lg:h-[620px]`}
            ></div>
            <div className='relative flex items-ceneter max-w-[430px] w-full h-[440px] z-10 lg:max-w-[620px] lg:h-[620px]'>
                <div className='w-[90px] lg:w-[120px]'></div>
                <div className='flex-1 flex items-center jusify-center'>
                    <img src={image} alt='image' />
                </div>
            </div>

            <div className='relative self-end text-right max-w-[300px] z-10 md:self-center  md:text-left lg:max-w-[380px]'>
                <h2>{title}</h2>
                <p className='text-lg text-lightFont mt-5'>{description}</p>
            </div>
        </div>
    );
};

export default ApplyCard;
