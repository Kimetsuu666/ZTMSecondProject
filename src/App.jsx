import Home from './components/routes/home/Home';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/routes/navigation/Navigation';
import { SignIn } from './components/routes/sign-in/SignIn';

export default function App() {
    return (
        <Routes>
            <Route path='/' element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path='sign-in' element={<SignIn />} />
            </Route>
        </Routes>
    );
};
