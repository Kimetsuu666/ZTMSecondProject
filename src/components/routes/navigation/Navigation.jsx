import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../../assets/crown.svg';
import './navigation.scss'

export function Navigation() {
    return (
        <>
            <div className='navigation'>
                <Link to='/' className='logo-container'>
                    <CrownLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link to='/shop' className='nav-link'>
                        SHOP
                    </Link>
                    <Link to='/auth' className='nav-link'>
                        AUTHENTICATION
                    </Link>
                </div>
            </div>
            {/* Special component that takes element by url and set instead of itself */}
            <Outlet />
        </>
    );
}
