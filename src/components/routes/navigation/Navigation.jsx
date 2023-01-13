import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../../assets/crown.svg';
import './navigation.scss'
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { signOutUser } from '../../../utils/firebase/firebase';

export function Navigation() {
    const { currentUser } = useContext(UserContext);

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
                    {currentUser
                        ? (<span className='nav-link' onClick={signOutUser}>SIGN OUT</span>)
                        : (
                        <Link to='/auth' className='nav-link'>
                            SIGN IN
                        </Link>)
                    }
                </div>
            </div>
            {/* Special component that takes element by url and set instead of itself */}
            <Outlet />
        </>
    );
}
