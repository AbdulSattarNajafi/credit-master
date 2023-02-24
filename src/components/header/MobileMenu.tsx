import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import { loanMenu, aboutMenu } from '../../constant.ts';
import ChevronDown from './../../assets/icons/chevron-down.svg';

const MobileMenu = () => {
    const { pathname } = useLocation();
    const [showLoans, setShowLoans] = useState(false);
    const [showAbout, setShowAbout] = useState(false);

    function loanDropdownHandler() {
        setShowLoans((prevState) => !prevState);
    }
    function aboutDropdownHandler() {
        setShowAbout((prevState) => !prevState);
    }

    return (
        <nav className='py-4 px-5'>
            <ul className='flex flex-col space-y-2 '>
                <li className=''>
                    <NavLink to='/' className='nav-link inline-block font-semibold text-menuText'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <button
                        className={`nav-link flex items-center justify-between w-full font-semibold text-menuText ${
                            pathname == '/loan' ? 'active' : ''
                        }`}
                        onClick={loanDropdownHandler}
                    >
                        <span>Loans</span>
                        <img
                            src={ChevronDown}
                            alt='icon'
                            className={`transition-all duration-300 ${
                                showLoans ? 'rotate-180' : ''
                            }`}
                        />
                    </button>
                    <div className={`${showLoans ? 'h-auto' : 'h-0'} overflow-hidden`}>
                        <ul className='flex flex-col space-y-2 py-2 pl-5 '>
                            {loanMenu.map((item, i) => {
                                return (
                                    <li key={i}>
                                        <Link
                                            to={item.linkTo}
                                            className='text-sm text-lightFont font-medium leading-tight'
                                        >
                                            {item.text}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </li>
                <li>
                    <button
                        className={`nav-link flex items-center justify-between w-full font-semibold text-menuText ${
                            pathname == '/about' ? 'active' : ''
                        }`}
                        onClick={aboutDropdownHandler}
                    >
                        <p>about</p>
                        <img
                            src={ChevronDown}
                            alt='icon'
                            className={`transition-all duration-300 ${
                                showAbout ? 'rotate-180' : ''
                            }`}
                        />
                    </button>
                    <div className={`${showAbout ? 'h-auto' : 'h-0'} overflow-hidden`}>
                        <ul className='flex flex-col space-y-2 py-2 pl-5'>
                            {aboutMenu.map((item, i) => {
                                return (
                                    <li key={i}>
                                        <Link
                                            to={item.linkTo}
                                            className='text-sm text-lightFont font-medium leading-tight'
                                        >
                                            {item.text}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </li>
                <li>
                    <NavLink
                        to='blog'
                        className='nav-link inline-block font-semibold text-menuText'
                    >
                        Blog
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='contact'
                        className='nav-link inline-block font-semibold text-menuText'
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default MobileMenu;
