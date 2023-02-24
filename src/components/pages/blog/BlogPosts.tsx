import React from 'react';

import { BlogPostsFirstData, BlogPostsSecondData } from '../../../constant.ts';
import GetStarted from '../../common/GetStarted';
import ResourceCard from '../../common/ResourceCard';
import SecondaryButton from '../../common/SecondaryButton';
import SignPassButton from '../../common/SignPassButton';

const BlogPosts = () => {
    return (
        <section className='relative -mt-[465px] z-[7] sm:-mt-[390px] md:-mt-[380px] lg:-mt-[370px]'>
            <div className='container px-[5px] sm:px-[10px] xl:px-0'>
                <div className='flex flex-col sm:flex-row sm:flex-wrap'>
                    {BlogPostsFirstData.map((post, i) => {
                        return (
                            <div
                                key={i}
                                className='w-full p-[15px] sm:w-1/2 sm:px-[10px] lg:w-1/3 xl:p-5'
                            >
                                <ResourceCard
                                    image={post.image}
                                    title={post.title}
                                    description={post.descriptio}
                                    onLearnMore={() => {}}
                                />
                            </div>
                        );
                    })}
                    <div className='w-full p-[15px] sm:w-1/2 sm:px-[10px] lg:w-1/3 xl:p-5'>
                        <div className='flex flex-col items-center justify-center text-center bg-blog-card bg-no-repeat bg-right-bottom min-h-[360px] h-full px-[30px] pb-[10px] rounded-[15px]'>
                            <h6 className='font-bold mb-3'>
                                CreditMaster has streamlined the loan process with
                                <span className='text-redFont'> MyInfo</span>
                            </h6>
                            <p className='text-lightFont mb-8'>
                                Apply now to get the money you need. It’s now faster and easier
                                which takes only 5 minutes!
                            </p>
                            <SignPassButton />
                        </div>
                    </div>
                    {BlogPostsSecondData.map((post, i) => {
                        return (
                            <div
                                key={i}
                                className='w-full p-[15px] sm:w-1/2 sm:px-[10px] lg:w-1/3 xl:p-5'
                            >
                                <ResourceCard
                                    image={post.image}
                                    title={post.title}
                                    description={post.descriptio}
                                    onLearnMore={() => {}}
                                />
                            </div>
                        );
                    })}
                </div>
                <div className='flex justify-center mt-[45px] mb-10 xl:mt-[30px]'>
                    <SecondaryButton text='Load More' onClick={() => {}} />
                </div>
                <div className='px-[15px] sm:px-[10px] xl:px-5'>
                    <GetStarted
                        backgroundColor='bg-blog-getstarted'
                        title='It’s your turn now!'
                        text='Over 13,200 people have received the money they need and get their financial problem solved. You can too.'
                        titleClass='md:text-5xl lg:text-5xl'
                    />
                </div>
            </div>
        </section>
    );
};

export default BlogPosts;
