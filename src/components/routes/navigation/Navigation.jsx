import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../../assets/crown.svg';
import './navigation.scss'
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { signOutUser } from '../../../utils/firebase/firebase';
import { CartIcon } from '../../cart-icon/CartIcon';
import { CartDropDown } from '../../cart-dropdown/CartDropDown';
import { CartContext } from '../../../contexts/CartContext';

export function Navigation() {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

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
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropDown/>}
            </div>
            {/* Special component that takes element by url and set instead of itself */}
            <Outlet />
        </>
    );
}
