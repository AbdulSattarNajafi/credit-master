import React from 'react';

import BootomOverlay from '../../common/BootomOverlay';
const BlogHeroSection = () => {
    return (
        <section className='relative bg-blogHero pt-[140px] pb-[100px] h-[800px] sm:pt-[197px]'>
            <div className='relative container flex justify-center z-[6]'>
                <div className='flex flex-col items-center max-w-[580px]'>
                    <h1>Blog</h1>
                    <p className='text-xl text-lightFont text-center leading-normal mt-[18px] lg:mt-4'>
                        Resources and lending tips to help you managing personal finance.
                    </p>
                </div>
            </div>
            <BootomOverlay />
        </section>
    );
};

export default BlogHeroSection;
