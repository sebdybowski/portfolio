import * as Yup from 'yup';

export const CONTACT_FORM_INITIAL_VALUES = {
	name: '',
	email: '',
	message: '',
};

export const CONTACT_FORM_VALIDATION_SCHEMA = Yup.object().shape({
	name: Yup
		.string()
		.min(2, 'Too Short!')
		.max(100, 'Too Long!')
		.required('Required'),
	email: Yup
		.string()
		.min(5, 'Too Short!')
		.max(100, 'Too Long!')
		.email('Invalid email')
		.required('Required'),
	message: Yup
		.string()
		.min(1, 'Too Short!')
		.required('Required'),
});
