import React from 'react';

import BootomOverlay from '../../common/BootomOverlay';

const ContactHeroSection = () => {
    return (
        <div className='relative bg-aboutHero pt-[140px] pb-[100px] h-[800px] sm:pt-[180px]'>
            <div className='relative container z-[6]'>
                <div className='sm:w-3/5 md:w-1/2'>
                    <h1 className='max-w-[340px] md:max-w-none'>Career at CreditMaster</h1>
                    <p className='max-w-[420px] text-xl text-lightFont leading-normal mt-[18px] sm:max-w-none'>
                        Looking for energetic, dynamic and passionate team players who have a
                        friendly disposition and drive for excellence.
                    </p>
                </div>
            </div>
            <BootomOverlay />
        </div>
    );
};

export default ContactHeroSection;
