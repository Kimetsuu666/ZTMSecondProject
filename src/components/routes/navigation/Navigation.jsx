import { Outlet } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../../assets/crown.svg';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { signOutUser } from '../../../utils/firebase/firebase';
import { CartIcon } from '../../cart-icon/CartIcon';
import { CartDropDown } from '../../cart-dropdown/CartDropDown';
import { CartContext } from '../../../contexts/CartContext';
import { LogoContainer, NavigationContainer, NavLink, NavLinks } from './NavigationStyles';

export function Navigation() {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
        <>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrownLogo className='logo' />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>SHOP</NavLink>
                    {currentUser
                        ? (<NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>)
                        : (<NavLink to='/auth'>SIGN IN</NavLink>)
                    }
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropDown/>}
            </NavigationContainer>
            {/* Special component that takes element by url and set instead of itself */}
            <Outlet />
        </>
    );
}
