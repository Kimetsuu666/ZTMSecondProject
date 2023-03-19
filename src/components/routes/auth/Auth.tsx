import { SignUpForm } from '../../sign-up-form/SignUpForm';
import { SignInForm } from '../../sign-in-form/SignInForm';
import { AuthContainer } from './AuthStyles';

function Auth() {
    return (
        <AuthContainer>
            <SignInForm />
            <SignUpForm />
        </AuthContainer>
    );
}

export default Auth
