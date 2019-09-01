import React, { FC } from 'react';
import { Hero } from './sections/Hero/Hero';
import { About } from './sections/About/About';
import { Skills } from './sections/Skills/Skills';
import { ToggleMenu } from '../../components/menus/fullScreenMenu/fullScreenMenuTypes';

interface HomeProps {
	isMenuOpen: boolean;
	toggleMenu: ToggleMenu;
}

export const Home: FC<HomeProps> = ({ isMenuOpen, toggleMenu }) => (
	<div className="container h-100">
		<div className="row align-content-center justify-content-center h-100 mb-4">
			<div className="col-8">
				<Hero isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
			</div>
		</div>
		<div className="row justify-content-center mb-4">
			<div className="col-7">
				<About />
			</div>
		</div>
		<div className="row justify-content-center">
			<div className="col-7">
				<Skills title={'My Skills'} />
			</div>
		</div>
	</div>
);
