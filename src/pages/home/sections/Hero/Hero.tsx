import React, { FC } from 'react';
import './Hero.scss';
import { Button } from '../../../../components/buttons/Button';

export const Hero: FC = () => (
	<section className="hero">
		<div className="container-fluid d-flex align-items-center p-0 vh-100 w-100">
			<div className="row justify-content-center">
				<div className="col col-10 col-md-8">
					<div className="jumbotron bg-transparent">
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
				</div>
			</div>
		</div>
	</section>
);
