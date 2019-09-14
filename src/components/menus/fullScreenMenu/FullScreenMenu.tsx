import React, { FC } from 'react';
import './FullScreenMenu.scss';
import { SocialMediaBar } from '../..';

export const FullScreenMenu: FC = () => (
	<nav className="full-screen-menu">
		<div className="container">
			<div className="row main-row align-content-center">
				<div className="col">
					<ul className="nav flex-column align-content-start">
						<li className="nav-item">
							<a href="/" className="full-screen-menu-btn">home</a>
						</li>
						<li className="nav-item">
							<a href="/contact" className="full-screen-menu-btn">contact</a>
						</li>
						<li className="nav-item">
							<a href="/portfolio" className="full-screen-menu-btn">portfolio</a>
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
