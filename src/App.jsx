import Home from './components/routes/home/Home';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/routes/navigation/Navigation';
import { Auth } from './components/routes/auth/Auth';
import { Shop } from './components/routes/shop/Shop';
import { Checkout } from './components/routes/checkout/Checkout';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from './utils/firebase/firebase';
import { useEffect } from 'react';
import { setCurrentUser } from './store/user/userActions';
import { useDispatch } from 'react-redux';


export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener(async (user) => {
            if (user) {
                await createUserDocumentFromAuth(user);
            }
            dispatch(setCurrentUser(user));
        });

        return unsubscribe;
    }, []);

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
