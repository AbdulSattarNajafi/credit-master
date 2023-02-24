import SignPassButton from '../common/SignPassButton';

const HeaderButtons = () => {
    return (
        <div className='flex items-center space-x-2'>
            <button className='text-sm rounded-[50px] py-1 px-5 transition-all duration-200 hover:scale-[1.07] lg:text-base'>
                ENG / 中文
            </button>
            <SignPassButton onClick={() => {}} />
        </div>
    );
};

export default HeaderButtons;
