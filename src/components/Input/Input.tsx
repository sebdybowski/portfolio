import React, {FC, ReactNode} from 'react';
import classNames from 'classnames';
import { ErrorMessage, Field } from 'formik';
import './Input.scss';

interface InputProps {
	name: string;
	type: string;
	placeholder: string;
	label?: string | ReactNode;
}

export const Input: FC<InputProps> = ({ name, type, placeholder, label }) => (
	<Field name={name}>
		{
			// eslint-disable-next-line
			// @ts-ignore
			({ field, form, ...props }) => (
				<div className="form-group pb-4 mb-2 input ">
					{ label && <label htmlFor={`${name}--input`}>{label}</label> }
					<input
						className={classNames(
							'form-control',
							{
								['is-invalid']: form.touched[name] && form.errors[name],
								['is-valid']: form.touched[name] && !form.errors[name],
							}
						)}
						placeholder={placeholder}
						type={type}
						id={`${name}--input`}
						{...field}
						{...props}
					/>
					<div className="d-inline invalid-feedback input--error-message">
						<ErrorMessage name={name} />
					</div>
				</div>
			)
		}
	</Field>
);
