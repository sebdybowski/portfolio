import React, { FC } from 'react';
import { ContactForm } from './ContactForm';

export const Contact: FC = () => (
	<div className="contact min-vh-100 d-flex align-items-center justify-content-center">
		<div className="container">
			<div className="row d-flex justify-content-center">
				<div className="col col-12 col-md-8 col-lg-6 text-center">
					<h1 className="display-4">{ 'Let\'s stay in touch' }</h1>
					<p className="lead">
						If you want to contact me, drop me an e-mail on <strong>dybowski@int.pl</strong> or just start with typing your name below...
					</p>
					<hr className="my-4" />
				</div>
			</div>
			<div className="row d-flex justify-content-center">
				<div className="col col-12 col-md-6 col-lg-5 text-center">
					<ContactForm />
				</div>
			</div>
		</div>
	</div>
);
