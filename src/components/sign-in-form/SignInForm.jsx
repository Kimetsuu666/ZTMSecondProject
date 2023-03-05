import { useState } from 'react';
import { FormInput } from '../form-input/FormInput';
import { Button, BUTTON_TYPES } from '../button/Button';
import { useDispatch } from 'react-redux';
import { emailSignInStart, googleSignInStart } from '../../store/user/userActions';
import { ButtonContainer, SignInContainer } from './SignInStyles';

const defaultFormFields = {
	email: '',
	password: ''
};

export function SignInForm() {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;
	const dispatch = useDispatch();

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
    };

	const signInWithGoogle = async () => {
		dispatch(googleSignInStart())
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			 dispatch(emailSignInStart(email, password));
			resetFormFields();
		} catch (error) {
			switch (error.code) {
				case 'auth/wrong-password':
					alert('incorrect password for email');
					break;
				case 'auth/user-not-found':
					alert('No user associated with this email');
					break;
				default:
					console.log(error);
			}
		}
	}

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
    };

	return (
		<SignInContainer>
			<h2>Already have an account?</h2>
			<span>Sign in with your email and password</span>
			<form autoSave={true.toString()} onSubmit={handleSubmit}>

				<FormInput
					label='Email'
					type='email'
					required
					onChange={handleChange}
					name='email'
					value={email}
				/>

				<FormInput
					label='Password'
					type='password'
					required
					onChange={handleChange}
					name='password'
					value={password}
				/>
				<ButtonContainer>
					<Button type='submit'>Sign in</Button>
					<Button
						type='button'
						buttonType={BUTTON_TYPES.google}
						onClick={signInWithGoogle}>Google sign in</Button>
				</ButtonContainer>
			</form>
		</SignInContainer>
	);
}
