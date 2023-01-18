import { BaseButton, GoogleSignInButton, InvertedButton } from './ButtonStyles';

export const BUTTON_TYPES = {
	default: 'base',
	google: 'google-sign-in',
	inverted: 'inverted',
}

const getButton = (buttonType = BUTTON_TYPES.default) =>
	({
		[BUTTON_TYPES.default]: BaseButton,
		[BUTTON_TYPES.google]: GoogleSignInButton,
		[BUTTON_TYPES.inverted]: InvertedButton,
    }[buttonType])

export function Button({ children, buttonType, ...otherProps }) {
	const Button = getButton(buttonType);

	return (
		<Button {...otherProps}>{children}</Button>
	);
}
