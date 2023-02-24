import { useReducer } from 'react';
import SecondaryButton from '../../common/SecondaryButton';
import SliderCard from '../../common/SliderCard';
import { SliderCardsData } from '../../../constant.ts';
import PrevIcon from '../../../assets/icons/slider-prev.svg';
import NextIcon from '../../../assets/icons/slider-next.svg';

enum CountActionKind {
    NEXT = 'NEXT_SLIDE',
    PREV = 'PREV_SLIDE',
}

// An interface for our actions
interface CountAction {
    type: CountActionKind;
}

// An interface for our state
interface CountState {
    slide: number;
    isNextActive: Boolean;
    isPrevActive: Boolean;
}

const initailState = { slide: 0, isNextActive: true, isPrevActive: false };

function sliderReducer(state: CountState, action: CountAction): CountState {
    const { type } = action;

    switch (type) {
        case 'NEXT_SLIDE':
            if (state.slide < SliderCardsData.length - 1) {
                return {
                    slide: state.slide + 1,
                    isNextActive: state.slide < SliderCardsData.length - 2,
                    isPrevActive: true,
                };
            }
            return { slide: state.slide, isNextActive: false, isPrevActive: true };

        case 'PREV_SLIDE':
            if (state.slide <= SliderCardsData.length - 1 && state.slide > 0) {
                return {
                    slide: state.slide - 1,
                    isNextActive: true,
                    isPrevActive: state.slide >= 2,
                };
            }
            return { slide: state.slide, isNextActive: true, isPrevActive: false };

        default:
            return state;
    }
}

const Slider = () => {
    const [state, dispatch] = useReducer(sliderReducer, initailState);

    const nextSlideHandler = () => {
        dispatch({ type: CountActionKind.NEXT });
    };

    const prevSLideHandler = () => {
        dispatch({ type: CountActionKind.PREV });
    };

    return (
        <div className='relative container py-[100px]'>
            <div className='absolute top-44 left-5 right-0 flex flex-col items-end md:relative md:top-0 md:left-0 md:right-0 md:flex-row md:items-start md:space-x-14 md:-mb-[147px] lg:space-x-[240px]'>
                {/* ============= Slider Buttons ============ */}
                <div className='flex items-center space-x-3 pr-10 pb-[50px] sm:pb-8 md:space-x-5 md:pr-0 md:pb-0 md:pt-[60px]'>
                    <button
                        className={`group flex items-center justify-center w-10 h-10 p-1 sm:w-[60px] sm:h-[60px] ${
                            state.isNextActive ? 'bg-easyBg' : 'bg-stroke'
                        } rounded-full`}
                        disabled={state.isNextActive ? false : true}
                        onClick={nextSlideHandler}
                    >
                        <img
                            src={PrevIcon}
                            alt='icon'
                            className={`transition-transform duration-300 scale-[0.9]  ${
                                state.isNextActive ? 'group-hover:scale-100' : ''
                            }`}
                        />
                    </button>
                    <button
                        className={`group flex items-center justify-center w-10 h-10 p-1 sm:w-[60px] sm:h-[60px] ${
                            state.isPrevActive ? 'bg-easyBg' : 'bg-stroke'
                        } rounded-full`}
                        disabled={state.isPrevActive ? false : true}
                        onClick={prevSLideHandler}
                    >
                        <img
                            src={NextIcon}
                            alt='icon'
                            className={`transition-transform duration-300 scale-[0.9]  ${
                                state.isPrevActive ? 'group-hover:scale-100' : ''
                            }`}
                        />
                    </button>
                </div>

                {/* ============= Slider Cards ============ */}
                <div className='flex items-center h-[186px] w-full overflow-hidden sm:h-[240px] md:h-[318px]'>
                    {SliderCardsData.map((item, i) => {
                        return (
                            <div
                                key={i}
                                className='min-w-[300px] h-full px-1 transition-transform ease-out duration-500 sm:min-w-[400px] md:min-w-[500px] sm:px-2'
                                style={{ transform: `translateX(-${state.slide * 100}%)` }}
                            >
                                <SliderCard
                                    image={item.image}
                                    loanDate={item.loanDate}
                                    totalLoan={item.totalLoan}
                                    insallmnet={item.insallmnet}
                                    loanApprove={item.loanApprove}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* ============= Popular Loan Card ============ */}
            <div className='flex flex-col space-y-[236px] max-w-[1080px] bg-white bg-getstarted-bg bg-no-repeat bg-right-bottom rounded-[30px] p-[30px] pb-10 overflow-hidden sm:space-y-[280px] md:flex-row md:justify-start md:space-y-0 md:h-[420px] md:px-10  md:py-[60px] lg:space-x-32 lg:px-[100px]'>
                <h3 className='max-w-[180px] md:leading-[1.2]'>
                    Our <span className='blue-text'>Popular</span> Loans
                </h3>

                <div className='max-w-[460px] md:self-end md:pl-2 lg:pl-0'>
                    <h4>Personal Loan</h4>
                    <p className='text-lg text-lightFont leading-normal mt-3 mb-6'>
                        Address an emergency, get that long-awaited holiday or pay that overdue bill
                        with a personal loan.
                    </p>
                    <SecondaryButton text='Learn More' onClick={() => {}} />
                </div>
            </div>
        </div>
    );
};

export default Slider;
