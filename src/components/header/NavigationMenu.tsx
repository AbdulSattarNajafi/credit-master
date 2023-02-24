import { NavLink, useLocation } from 'react-router-dom';

import LoansDropdown from './LoansDropdown';
import AboutDropdown from './AboutDropdown';
import { ReactComponent as ChevronDown } from './../../assets/icons/chevron-down.svg';

const NavigationMenu = () => {
    const { pathname } = useLocation();

    return (
        <nav>
            <ul className='flex items-center space-x-4'>
                <li>
                    <NavLink
                        to='/'
                        className='nav-link inline-block px-[10px] font-semibold text-menuText transition-all duration-200 hover:text-brandTurquoise'
                    >
                        Home
                    </NavLink>
                </li>
                <li
                    className={`group relative nav-link flex items-center space-x-2 px-[10px] font-semibold text-menuText cursor-pointer transition-all duration-200 hover:text-brandTurquoise ${
                        pathname == '/loan' ? 'active' : ''
                    }`}
                >
                    <p>Loans</p>
                    <LoansDropdown />
                    <span className='transition-all duration-200 group-hover:rotate-180'>
                        <ChevronDown />
                    </span>
                </li>
                <li
                    className={`group relative nav-link flex items-center space-x-2 px-[10px] font-semibold text-menuText cursor-pointer transition-all duration-200 hover:text-brandTurquoise ${
                        pathname == '/about' ? 'active' : ''
                    }`}
                >
                    <p>about</p>
                    <AboutDropdown />
                    <span className='transition-all duration-200 group-hover:rotate-180'>
                        <ChevronDown />
                    </span>
                </li>
                <li>
                    <NavLink
                        to='blog'
                        className='nav-link inline-block px-[10px] font-semibold text-menuText transition-all duration-200 hover:text-brandTurquoise'
                    >
                        Blog
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='contact'
                        className='nav-link inline-block px-[10px] font-semibold text-menuText transition-all duration-200 hover:text-brandTurquoise'
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationMenu;
