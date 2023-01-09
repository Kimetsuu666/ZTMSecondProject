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
                    <Link to='/sign-in' className='nav-link'>
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    );
}
