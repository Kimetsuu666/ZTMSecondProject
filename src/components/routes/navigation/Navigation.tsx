import { Outlet } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../../assets/crown.svg';
import { CartIcon } from '../../cart-icon/CartIcon';
import { CartDropDown } from '../../cart-dropdown/CartDropDown';
import { LogoContainer, NavigationContainer, NavLink, NavLinks } from './NavigationStyles';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from '../../../store/user/userSelector';
import { selectIsCartOpen } from '../../../store/cart/cartSelector';
import { signOutStart } from '../../../store/user/userActions';

export default function Navigation() {
    const { currentUser } = useSelector(userSelector);
    const isCartOpen = useSelector(selectIsCartOpen)
    const dispatch = useDispatch();

    const signOut = () => dispatch(signOutStart());

    return (
        <>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrownLogo className='logo' />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>SHOP</NavLink>
                    {currentUser
                        ? (<NavLink as='span' onClick={signOut}>SIGN OUT</NavLink>)
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
