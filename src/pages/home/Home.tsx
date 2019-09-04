import React, { FC } from 'react';
import { Hero, About, Skills, Footer } from './sections';

export const Home: FC = () => (
	<div className="home">
		<Hero />
		<div className="container">
			<div className="row justify-content-center pt-4 pb-4">
				<div className="col-8">
					<About />
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-8">
					<Skills title={'My Skills'} />
				</div>
			</div>
		</div>
		<div className="container-fluid p-0">
			<Footer />
		</div>
	</div>
);
