import { NavLink, Link } from 'react-router-dom';

import FooterLogo from './../assets/images/footer-logo.svg';
import { footerMenu } from '../constant.ts';

const Footer = () => {
    return (
        <div className='bg-darkFont pt-[110px] pb-5'>
            <div className='container'>
                <nav className='flex flex-col border-b border-stroke pb-6 xl:flex-row xl:justify-between xl:items-center xl:pb-[30px]'>
                    <Link to='/'>
                        <img src={FooterLogo} alt='Logo' />
                    </Link>
                    <ul className='flex flex-wrap pt-5 lg:flex-nowrap lg:space-x-10 xl:pt-0'>
                        {footerMenu.map((menu) => {
                            return (
                                <li
                                    key={menu.text}
                                    className='w-1/2 mb-[10px] sm:w-1/3 lg:w-auto lg:mb-0'
                                >
                                    <NavLink className='text-stroke font-semibold' to={menu.linkTo}>
                                        {menu.text}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div className='mt-5'>
                    <p className='text-sm text-background mb-6'>
                        <b>CreditMaster Pte Ltd</b> (License No. 32/2022) 531 Upper Cross Street
                        #01-04 Hong Lim Complex Singapore 050531
                    </p>

                    <p className='text-sm text-disabled mb-6'>
                        CreditMaster is a company incorporated under the laws of Singapore.
                        Customers are advised to read the Privacy Policy carefully. If you have any
                        concerns or enquiries, feel free to contact us at enquiry@creditmaster.sg.
                        For administrative matters, please email to feedback@creditmaster.sg. Our
                        officer will attend to you shortly.
                    </p>

                    <p className='text-sm text-disabled'>
                        Copyright &copy; {new Date().getFullYear()} CreditMaster Pte Ltd. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
