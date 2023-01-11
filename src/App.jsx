import Home from './components/routes/home/Home';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/routes/navigation/Navigation';
import { Auth } from './components/routes/auth/Auth';


export default function App() {
    return (
        <Routes>
            <Route path='/' element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path='auth' element={<Auth />} />
            </Route>
        </Routes>
    );
};
