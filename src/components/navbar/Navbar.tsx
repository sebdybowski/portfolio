import React from 'react';
import './Navbar.scss';
import { Logo } from '../logo/Logo';
import { MenuButton } from './MenuButton/MenuButton';

interface NavbarProps {
	isMenuOpen: boolean;
	toggleMenu: (isOpen: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, toggleMenu }) => (
	<nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-transparent" id="navbar">
		<div className="container">
			<span className="navbar-brand">
				<Logo
					main={<span><span className="text-primary">seb</span><span>dybowski</span></span>}
					caption={'artist & software developer'}
				/>
			</span>
			<div className="navbar-nav ml-auto">
				<MenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
			</div>
		</div>
	</nav>
);
