import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../../utils/firebase/firebase';

export function SignIn() {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(response.user);
    }

    return (
        <div>
            <h1>sign in</h1>
            <button onClick={logGoogleUser}>
                sign in with google
            </button>
        </div>
    );
}
