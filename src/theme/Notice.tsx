import { useState } from 'react';

import SpeakerIcon from './../assets/icons/speaker-icon.svg';
import TimesIcon from './../assets/icons/times-icon.svg';

const Notice = () => {
    const [isShow, setIsShow] = useState(true);

    function noticeHideHandler() {
        setIsShow(false);
    }

    return (
        <div
            className={`fixed top-0 left-0 w-full bg-darkFont text-white py-5 z-[60] transition-all duration-300 ${
                isShow ? '' : '-translate-y-full'
            }`}
        >
            <div className='container flex items-start justify-between space-x-4'>
                <div className='max-w-[980px]'>
                    <h6 className='flex items-center space-x-2 text-sm leading-normal font-bold'>
                        <img src={SpeakerIcon} alt='icon' />
                        <span> NOTICE: Scammers impersonating CreditMaster</span>
                    </h6>
                    <p className='text-sm leading-normal'>
                        We are aware that unlicensed perpetrators have sought to impersonate
                        CreditMaster by replicating out URL and website, as well as using our name
                        to deceive the public. Please contact us at 6748 1338 before proceeding with
                        any transactions.
                    </p>
                </div>
                <button onClick={noticeHideHandler}>
                    <img src={TimesIcon} alt='icon' />
                </button>
            </div>
        </div>
    );
};

export default Notice;
