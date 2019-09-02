import React, { FC } from 'react';
import { Button } from '../../../../components/buttons/Button';

export const Hero: FC = () => (
	<div className="jumbotron bg-transparent align-items-start">
		<h1 className="display-4">Hello, world!</h1>
		<p className="lead">
			Welcome on my Page!
		</p>
		<hr className="my-4"/>
		<p>It uses utility classes for typography and spacing to space content out within the larger
			container.</p>
		<Button flavour="btn-primary" onClick={(): void => console.log('click')} className="btn-lg text-capitalize mr-3">Portfolio</Button>
		<Button flavour="btn-secondary" onClick={(): void => console.log('click')} className="btn-lg text-capitalize">Contact me</Button>
	</div>
);
