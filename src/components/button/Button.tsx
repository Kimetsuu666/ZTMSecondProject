import { BaseButton, ButtonSpinner, GoogleSignInButton, InvertedButton } from './ButtonStyles';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export enum BUTTON_TYPES {
	default = 'base',
	google = 'google-sign-in',
	inverted = 'inverted',
}

const getButton = (buttonType = BUTTON_TYPES.default): typeof BaseButton =>
	({
		[BUTTON_TYPES.default]: BaseButton,
		[BUTTON_TYPES.google]: GoogleSignInButton,
		[BUTTON_TYPES.inverted]: InvertedButton,
    }[buttonType])

export type ButtonProps = {
	children: ReactNode,
	buttonType?: BUTTON_TYPES,
	isLoading?: boolean,
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, buttonType, isLoading, ...otherProps }: ButtonProps) {
	const Button = getButton(buttonType);

	return (
		<Button disabled={isLoading} {...otherProps}>
			{isLoading ? <ButtonSpinner /> : children}
		</Button>
	);
}
