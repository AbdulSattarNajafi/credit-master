import { Routes, Route } from 'react-router-dom';

import Layout from './theme/Layout';
import Home from './screens/Home';
import routes from './routes/routes';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                {routes.map((route) => {
                    return (
                        <Route key={route.name} path={route.path} element={<route.component />} />
                    );
                })}
            </Route>
        </Routes>
    );
}

export default App;
