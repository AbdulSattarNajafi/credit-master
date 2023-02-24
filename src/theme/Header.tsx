import HeaderMenu from '../components/header/HeaderMenu';

const Header = () => {
    return (
        <header className='absolute left-0 top-0 w-full bg-white z-50 h-20 lg:bg-transparent'>
            <HeaderMenu />
        </header>
    );
};

export default Header;
