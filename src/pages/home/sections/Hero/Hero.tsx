import React, { FC } from 'react';
import './Hero.scss';
import { Button } from '../../../../components/buttons/Button';
import { Link } from 'react-router-dom';

export const Hero: FC = () => (
	<section className="hero d-flex align-items-center justify-content-center">
		<div className="col col-12 col-md-8 m-auto">
			<div className="jumbotron bg-transparent m-auto p-0">
				<h1 className="display-4">Hello, world!</h1>
				<p className="lead">
					Welcome on my Page!
				</p>
				<hr className="my-4"/>
				<p>It uses utility classes for typography and spacing to space content out within the larger
					container.</p>
				<Link to="/portfolio">
					<Button flavour="btn-primary" className="text-capitalize mr-3 mb-3" size="btn-lg">Portfolio</Button>
				</Link>
				<Link to="/contact">
					<Button flavour="btn-secondary" className="text-capitalize mb-3" size="btn-lg">Contact me</Button>
				</Link>
			</div>
		</div>
	</section>
);
