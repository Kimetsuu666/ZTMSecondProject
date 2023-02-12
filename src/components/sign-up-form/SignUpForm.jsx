import { useState } from 'react';
import { FormInput } from '../form-input/FormInput';
import './sign-up-form.scss';
import { Button } from '../button/Button';
import { useDispatch } from 'react-redux';
import { signUpStart } from '../../store/user/userActions';

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	passwordConfirm: '',
};

export function SignUpForm() {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, passwordConfirm } = formFields;
	const dispatch = useDispatch();

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
    };

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (defaultFormFields.password !== defaultFormFields.passwordConfirm) {
			alert('password dont match');
			return;
		}

		try {
			dispatch(signUpStart(email, password, displayName))
			resetFormFields();
		} catch (error) {
			if (error.code === 'auth/email-already-in-use') {
				alert('email already in use');
			}
			console.log(error);
		}
	}

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
    };

	return (
		<div className='sign-up-container'>
			<h2>Don't have an account?</h2>
			<span>Sign up with your email and password</span>
			<form autoSave={true.toString()} onSubmit={handleSubmit}>
				<FormInput
					label='Display name'
					type='text'
					required
					onChange={handleChange}
					name='displayName'
					value={displayName}
				/>

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

				<FormInput
					label='Confirm Password'
					type='password'
					required
					onChange={handleChange}
					name='passwordConfirm'
					value={passwordConfirm}
				/>
				<Button type='submit'>Sign up</Button>
			</form>
		</div>
	);
}
