import React from 'react';
import './Navbar.scss';
import { Logo } from '../logo/Logo';
import { Button } from '../buttons/Button';

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
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"/>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<div className="navbar-nav ml-auto">
					<li className="nav-item">
						<Button onClick={(): void => toggleMenu(isMenuOpen)}>more +</Button>
					</li>
				</div>
			</div>
		</div>
	</nav>
);
