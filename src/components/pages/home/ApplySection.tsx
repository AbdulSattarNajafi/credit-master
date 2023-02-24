import { useState } from 'react';
import { applyData } from '../../../constant.ts';
import ApplyButton from '../../common/ApplyButton';
import ApplyCard from '../../common/ApplyCard';

import { ReactComponent as EasyIcon } from '../../../assets/icons/easy-icon.svg';
import { ReactComponent as QuickIcon } from '../../../assets/icons/quick-icon.svg';
import { ReactComponent as HonsetIcon } from '../../../assets/icons/honest-icon.svg';
import { ReactComponent as FlexibleIcon } from '../../../assets/icons/flexible-icon.svg';

const ApplySection = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className='relative container pr-0'>
            <div className='absolute left-5 flex flex-col space-y-4 z-[4] py-5 lg:top-5 lg:space-y-5'>
                <ApplyButton
                    activeClass={activeTab === 0 ? 'bg-easyBg' : ''}
                    onClick={() => setActiveTab(0)}
                >
                    <EasyIcon />
                    <span className='mt-[5px]'>Easy</span>
                </ApplyButton>

                <ApplyButton
                    activeClass={activeTab === 1 ? 'bg-easyBg' : ''}
                    onClick={() => setActiveTab(1)}
                >
                    <QuickIcon />
                    <span className='mt-[5px]'>Quick</span>
                </ApplyButton>
                <ApplyButton
                    activeClass={activeTab === 2 ? 'bg-easyBg' : ''}
                    onClick={() => setActiveTab(2)}
                >
                    <HonsetIcon />
                    <span className='mt-[5px]'>Honest</span>
                </ApplyButton>
                <ApplyButton
                    activeClass={activeTab === 3 ? 'bg-easyBg' : ''}
                    onClick={() => setActiveTab(3)}
                >
                    <FlexibleIcon />
                    <span className='mt-[5px]'>Flexible</span>
                </ApplyButton>
            </div>
            <div className='flex flex-col w-full max-h-[620px] pr-5 overflow-hidden md:max-h-[500px] lg:max-h-[620px]'>
                {applyData.map((item, i) => {
                    return (
                        <div key={i} style={{ transform: `translateY(-${activeTab * 100}%)` }}>
                            <ApplyCard
                                image={item.image}
                                title={item.title}
                                description={item.description}
                                background={item.background}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ApplySection;
