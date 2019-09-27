import React, { FC } from 'react';
import './Navbar.scss';
import { Logo } from '../logo/Logo';
import { MenuButton } from './MenuButton/MenuButton';
import { NAVBAR_LABELS } from './constants';
import { LogoMain } from './LogoMain/LogoMain';
import classNames from 'classnames';

interface NavbarProps {
	isMenuOpen: boolean;
	toggleMenu: (isOpen: boolean) => void;
}

export const Navbar: FC<NavbarProps> = ({ isMenuOpen, toggleMenu }) => (
	<nav
		className={classNames(
			'navbar navbar-expand-lg sticky-top navbar-dark',
			{
				['navbar__is-open']: isMenuOpen,
			}
		)}
	>
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
