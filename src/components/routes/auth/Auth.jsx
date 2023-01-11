import { SignUpForm } from '../../sign-up-form/SignUpForm';
import { SignInForm } from '../../sign-in-form/SignInForm';
import './auth.scss';

export function Auth() {
    return (
        <div className='auth-container'>
            <SignInForm />
            <SignUpForm />
        </div>
    );
}
