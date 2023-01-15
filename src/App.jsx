import Home from './components/routes/home/Home';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/routes/navigation/Navigation';
import { Auth } from './components/routes/auth/Auth';
import { Shop } from './components/routes/shop/Shop';
import { Checkout } from './components/routes/checkout/Checkout';


export default function App() {
    return (
        <Routes>
            <Route path='/' element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path='shop/*' element={<Shop />} />
                <Route path='auth' element={<Auth />} />
                <Route path='checkout' element={<Checkout />} />
            </Route>
        </Routes>
    );
};
