import React, { FC } from 'react';
import './Navbar.scss';
import { Logo } from '../logo/Logo';
import { MenuButton } from './MenuButton/MenuButton';
import { NAVBAR_LABELS } from './constants';
import { LogoMain } from './LogoMain/LogoMain';

interface NavbarProps {
	isMenuOpen: boolean;
	toggleMenu: (isOpen: boolean) => void;
}

export const Navbar: FC<NavbarProps> = ({ isMenuOpen, toggleMenu }) => (
	<nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-transparent">
		<div className="container">
			<span className="navbar-brand">
				<Logo
					main={<LogoMain isMenuOpen={isMenuOpen} />}
					caption={NAVBAR_LABELS.LOGO.CAPTION}
				/>
			</span>
			<div className="navbar-nav ml-auto">
				<MenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
			</div>
		</div>
	</nav>
);
