import React, { FC } from 'react';
import Portrait from './portrait.jpg';
import './About.scss';

export const About: FC = () => (
	<section className="card" id="about">
		<div className="row no-gutters">
			<div className="col-md-5 justify-content-center align-items-center" style={{ display: 'flex' }}>
				<img src={Portrait} className="card-img rounded-circle" alt="portrait" />
			</div>
			<div className="col-md-7">
				<div className="card-body">
					<h5 className="card-title">seb dybowski</h5>
					<p className="card-text">
						Hello! 😉

						I am full of energy and positive attitude.
						I am not afraid of challenging projects – especially interested in those,
						which are creating new opportunities and involving new range of knowledge.
						Products I dream of have a creativity in their foundations.
						My greatest ambition is to deliver a mature,
						beautiful and spectacular design solutions to users and customers.
					</p>
					<p className="card-text">
						<small className="text-muted">happy to see you here!</small>
					</p>
				</div>
			</div>
		</div>
	</section>
);