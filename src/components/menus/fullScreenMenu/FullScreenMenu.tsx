import React, { FC } from 'react';
import './FullScreenMenu.scss';
import { SocialMediaBar } from '../..';
import { Link } from 'react-router-dom';
import { ToggleMenu } from './fullScreenMenuTypes';

interface FullScreenMenuProps {
	isMenuOpen: boolean;
	toggleMenu: ToggleMenu;
}

export const FullScreenMenu: FC<FullScreenMenuProps> = ({ toggleMenu, isMenuOpen }) => (
	<nav className="full-screen-menu">
		<div className="container">
			<div className="row main-row align-content-center">
				<div className="col">
					<ul className="nav flex-column align-content-start">
						<li className="nav-item">
							<Link to="/" className="full-screen-menu-btn" onClick={() => toggleMenu(isMenuOpen)}>home</Link>
						</li>
						<li className="nav-item">
							<Link to="/contact" className="full-screen-menu-btn" onClick={() => toggleMenu(isMenuOpen)}>contact</Link>
						</li>
						<li className="nav-item">
							<Link to="/portfolio" className="full-screen-menu-btn" onClick={() => toggleMenu(isMenuOpen)}>portfolio</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<nav className="nav">
						<SocialMediaBar className="social-media-bar__transparent"/>
					</nav>
				</div>
			</div>
		</div>
	</nav>
);
