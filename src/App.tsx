import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { checkUserSession } from './store/user/userActions';
import { useDispatch } from 'react-redux';
import { Spinner } from './spinner/Spinner';
import { GlobalStyles } from './GlobalStyles';


const Home = lazy(() => import('./components/routes/home/Home'));
const Auth = lazy(() => import('./components/routes/auth/Auth'));
const Shop = lazy(() => import('./components/routes/shop/Shop'));
const Checkout = lazy(() => import('./components/routes/checkout/Checkout'));
const Navigation = lazy(() => import('./components/routes/navigation/Navigation'))

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkUserSession())
    }, []);

    return (
       <Suspense fallback={<Spinner />}>
           <GlobalStyles />
           <Routes>
               <Route path='/' element={<Navigation />}>
                   <Route index element={<Home />} />
                   <Route path='shop/*' element={<Shop />} />
                   <Route path='auth' element={<Auth />} />
                   <Route path='checkout' element={<Checkout />} />
               </Route>
           </Routes>
       </Suspense>
    );
};
