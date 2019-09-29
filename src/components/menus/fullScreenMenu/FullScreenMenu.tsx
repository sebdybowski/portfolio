import React, { FC } from 'react';
import './FullScreenMenu.scss';
import { SocialMediaBar } from '../..';
import { Link } from 'react-router-dom';
import { ToggleMenu } from './fullScreenMenuTypes';
import { map } from 'ramda';
import { ROUTES } from '../../router/constants';

interface FullScreenMenuProps {
	isMenuOpen: boolean;
	toggleMenu: ToggleMenu;
}

export const FullScreenMenu: FC<FullScreenMenuProps> = ({ toggleMenu, isMenuOpen }) => {
	const closeMenu = () => toggleMenu(isMenuOpen);
	return (
		<nav className="full-screen-menu">
			<div className="container">
				<div className="row main-row align-content-center">
					<div className="col">
						<ul className="nav flex-column align-content-start text-center">
							{ map(
								route => <li className="nav-item pt-2 pb-2">
									<Link
										to={route.PATH}
										className="full-screen-menu-btn"
										onClick={closeMenu}
									>
										{route.LABEL}
									</Link>
								</li>,
								ROUTES,
							) }
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
};
