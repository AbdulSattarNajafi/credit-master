import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import HeaderLogo from './../../assets/images/header-logo.svg';
import HeaderButtons from './HeaderButtons';
import NavigationMenu from './NavigationMenu';
import MobileMenu from './MobileMenu';
import { useWindowDimensions } from '../../hooks';

const Header = () => {
    const { width } = useWindowDimensions();
    const { pathname } = useLocation();
    const [toggleMenu, setToggleMenu] = useState(false);

    useEffect(() => {
        if (toggleMenu) {
            document.body.className = 'overflow-hidden';
        } else {
            document.body.className = '';
        }
    }, [toggleMenu]);

    useEffect(() => {
        if (width > 1023) {
            setToggleMenu(false);
        }
    }, [width]);

    useEffect(() => {
        setToggleMenu(false);
    }, [pathname]);

    function menuToggleHandler() {
        setToggleMenu((prevState) => !prevState);
    }

    return (
        <>
            <div className='container flex items-center justify-between h-20'>
                <div className='flex items-center'>
                    <Link to='/'>
                        <img src={HeaderLogo} className='w-[177px] lg:w-[187px]' alt='Logo' />
                    </Link>

                    <div className='hidden ml-5 lg:block'>
                        <NavigationMenu />
                    </div>
                </div>

                <div className='hidden lg:block'>
                    <HeaderButtons />
                </div>

                {/* =============== Mobile Menu ============= */}

                <div
                    className={`custom-scrollbar fixed top-20 bottom-0 left-0 flex flex-col justify-between max-w-xs space-y-4 bg-white border-t border-disabled shadow-dropdown-shadow overflow-y-auto transition-all duration-500 ${
                        toggleMenu ? 'translate-x-0' : '-translate-x-full'
                    } z-50`}
                >
                    <MobileMenu />
                    <div className='flex justify-center py-4 border-t border-disabled'>
                        <HeaderButtons />
                    </div>
                </div>
                {toggleMenu && (
                    <div
                        className='fixed top-20 bottom-0 left-0 w-full bg-overlay z-40'
                        onClick={menuToggleHandler}
                    ></div>
                )}

                {/* =========== Mobile Menu Toggler ========== */}
                <button
                    type='button'
                    className={`menu-toggler flex flex-col justify-between lg:hidden ${
                        toggleMenu ? 'menu-open' : ''
                    }`}
                    onClick={menuToggleHandler}
                >
                    <span className='menu-toggler-top'></span>
                    <span className='menu-toggler-middle'></span>
                    <span className='menu-toggler-bottom'></span>
                </button>
            </div>
        </>
    );
};

export default Header;
