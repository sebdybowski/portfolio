import React, { FC } from 'react';
import { Formik } from 'formik';
import { Input, MaterialIcon, Textarea } from '../../components';
import { Button } from '../../components/buttons/Button';
import { CONTACT_FORM_INITIAL_VALUES, CONTACT_FORM_VALIDATION_SCHEMA } from './constants';

export const ContactForm: FC = () => (
	<Formik
		onSubmit={data => console.log(data)}
		initialValues={CONTACT_FORM_INITIAL_VALUES}
		validationSchema={CONTACT_FORM_VALIDATION_SCHEMA}
	>
		{
			({ isValid, handleSubmit, values, errors }) => (
				<form onSubmit={handleSubmit} className="w-100">
					<Input
						name="name"
						placeholder="your name"
						type="text"
						label={<span>please, introduce <strong className="text-primary">yourself</strong></span>}
					/>
					{ ((values.name && !errors.name) || values.email) &&
						<Input
							name="email"
							placeholder="your email address"
							type="email"
							label={<span><span className="text-success">great job!</span> now, enter your <strong className="text-primary">e-mail address</strong></span>}
						/>
					}
					{ ((values.email && !errors.email) || values.message) &&
						<>
							<Textarea
								name="message"
								placeholder="your message"
								label={<span><span className="text-success">splendid!</span> so, can you tell me what you <strong className="text-primary">need</strong>?</span>}
								rows={4}
							/>
							<Button flavour="btn-primary" size="btn-lg" type="submit" disabled={!isValid}>
								<MaterialIcon icon="mail" /> Send this message
							</Button>
						</>
					}
				</form>
			)
		}
	</Formik>
);
