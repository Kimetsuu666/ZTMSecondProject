import {
    createUserDocumentFromAuth,
    signInWithGooglePopup,
} from '../../../utils/firebase/firebase';
import { SignUpForm } from '../../sign-up-form/SignUpForm';

export function SignIn() {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        await createUserDocumentFromAuth(response.user);
    };

    return (
        <div>
            <h1>sign in</h1>
            <button onClick={logGoogleUser}>sign in with google</button>
            <SignUpForm />
        </div>
    );
}
