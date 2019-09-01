import React, { FC } from 'react';
import { Button } from '../../../../components/buttons/Button';
import { ToggleMenu } from '../../../../components/menus/fullScreenMenu/fullScreenMenuTypes';

interface HeroProps {
	isMenuOpen: boolean;
	toggleMenu: ToggleMenu;
}

export const Hero: FC<HeroProps> = ({ toggleMenu, isMenuOpen }) => (
	<div className="jumbotron bg-transparent align-items-start">
		<h1 className="display-4">Hello, world!</h1>
		<p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra
			attention to featured content or information.</p>
		<hr className="my-4"/>
		<p>It uses utility classes for typography and spacing to space content out within the larger
			container.</p>
		<Button flavour="btn-primary" onClick={(): void => toggleMenu(isMenuOpen)} className="btn-lg text-capitalize mr-3">Portfolio</Button>
		<Button flavour="btn-secondary" onClick={(): void => toggleMenu(isMenuOpen)} className="btn-lg text-capitalize">Contact me</Button>
	</div>
);
