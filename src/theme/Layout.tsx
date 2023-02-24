import { Outlet } from 'react-router-dom';

import Notice from './Notice';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = () => {
    return (
        <>
            <Notice />
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
