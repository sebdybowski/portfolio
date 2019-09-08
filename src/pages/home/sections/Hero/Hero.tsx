import React, { FC } from 'react';
import './Hero.scss';
import { Button } from '../../../../components/buttons/Button';

export const Hero: FC = () => (
	<section className="hero d-flex vh-100 align-items-center justify-content-center">
		<div className="col col-12 col-md-8 m-auto">
			<div className="jumbotron bg-transparent m-auto p-0">
				<h1 className="display-4">Hello, world!</h1>
				<p className="lead">
					Welcome on my Page!
				</p>
				<hr className="my-4"/>
				<p>It uses utility classes for typography and spacing to space content out within the larger
					container.</p>
				<Button flavour="btn-primary" onClick={(): void => console.log('click')} className="text-capitalize mr-3 mb-3" size="btn-lg">Portfolio</Button>
				<Button flavour="btn-secondary" onClick={(): void => console.log('click')} className="text-capitalize mb-3" size="btn-lg">Contact me</Button>
			</div>
		</div>
	</section>
);
