import { Directory } from '../../directory/Directory';
import { Outlet } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <Directory />
            <Outlet />
        </div>
    );
};
