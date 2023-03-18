import { FormInputLabel, Group, Input } from './FormInputStyles';
import { InputHTMLAttributes } from 'react';

type FormInputProps = {
	label: string
} & InputHTMLAttributes<HTMLInputElement>

export function FormInput({ label, ...otherProps }: FormInputProps) {
	return (
		<Group>
			<Input {...otherProps} />
			{label &&
				<FormInputLabel shrink={Boolean(otherProps.value && typeof otherProps.value === 'string' && otherProps.value.length)}>
					{label}
				</FormInputLabel>
			}
		</Group>
	);
}
