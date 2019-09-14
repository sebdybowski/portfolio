import React, {FC, ReactNode} from 'react';
import classNames from 'classnames';
import { ErrorMessage, Field } from 'formik';
import './Textarea.scss';

interface TextareaProps {
	name: string;
	placeholder: string;
	label?: string | ReactNode;
	rows?: number;
}

export const Textarea: FC<TextareaProps> = ({ name, placeholder, label, rows = 3 }) => (
	<Field name={name}>
		{
			// eslint-disable-next-line
			// @ts-ignore
			({ field, form, ...props }) => (
				<div className="form-group pb-4 mb-2 textarea">
					{ label && <label htmlFor={`${name}--input`}>{label}</label> }
					<textarea
						className={classNames(
							'form-control',
							{
								['is-invalid']: form.touched[name] && form.errors[name],
								['is-valid']: form.touched[name] && !form.errors[name],
							}
						)}
						placeholder={placeholder}
						rows={rows}
						id={`${name}--input`}
						{...field}
						{...props}
					/>
					<div className="d-inline invalid-feedback textarea--error-message">
						<ErrorMessage name={name} />
					</div>
				</div>
			)
		}
	</Field>
);
