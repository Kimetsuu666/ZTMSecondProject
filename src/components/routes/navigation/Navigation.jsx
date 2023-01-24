import { Outlet } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../../assets/crown.svg';
import { signOutUser } from '../../../utils/firebase/firebase';
import { CartIcon } from '../../cart-icon/CartIcon';
import { CartDropDown } from '../../cart-dropdown/CartDropDown';
import { LogoContainer, NavigationContainer, NavLink, NavLinks } from './NavigationStyles';
import { useSelector } from 'react-redux';
import { userSelector } from '../../../store/user/userSelector';
import { selectIsCartOpen } from '../../../store/cart/cartSelector';

export function Navigation() {
    const { currentUser } = useSelector(userSelector);
    const isCartOpen = useSelector(selectIsCartOpen)

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
