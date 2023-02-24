import Loan from '../screens/Loan';
import About from '../screens/About';
import Blog from '../screens/Blog';
import Contact from '../screens/Contact';

const routes = [
    {
        path: 'loan',
        name: 'Loan',
        component: Loan,
    },
    {
        path: 'about',
        name: 'About',
        component: About,
    },
    {
        path: 'blog',
        name: 'Blog',
        component: Blog,
    },
    {
        path: 'contact',
        name: 'Contact',
        component: Contact,
    },
];

export default routes;
