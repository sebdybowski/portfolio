import React from 'react';
import './FullScreenMenu.scss';
import { Button } from '../../buttons/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faCodepen, faTwitter, faArtstation, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { ToggleMenu } from './fullScreenMenuTypes';

interface FullScreenMenuProps {
	isOpen: boolean;
	toggleMenu: ToggleMenu;
}

export const FullScreenMenu: React.FC<FullScreenMenuProps> = ({ isOpen, toggleMenu }) => (
	<nav className="full-screen-menu">
		<div className="container">
			<div className="row main-row align-content-center">
				<div className="col">
					<ul className="nav flex-column align-content-start">
						<li className="nav-item">
							<Button onClick={(): void => {}} flavour="btn-link" className="full-screen-menu-btn main float-left active">// Home</Button>
						</li>
						<li className="nav-item">
							<Button onClick={(): void => {}} flavour="btn-link" className="full-screen-menu-btn main float-left">Portfolio</Button>
						</li>
						<li className="nav-item">
							<Button onClick={(): void => {}} flavour="btn-link" className="full-screen-menu-btn main float-left">Contact</Button>
						</li>
					</ul>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<nav className="nav">
						<Button onClick={(): void => {}} flavour="btn-link" className="full-screen-menu-btn">
							<FontAwesomeIcon icon={faGithub}/>
						</Button>
						<Button onClick={(): void => {}} flavour="btn-link" className="full-screen-menu-btn">
							<FontAwesomeIcon icon={faCodepen}/>
						</Button>
						<Button onClick={(): void => {}} flavour="btn-link" className="full-screen-menu-btn">
							<FontAwesomeIcon icon={faTwitter}/>
						</Button>
						<Button onClick={(): void => {}} flavour="btn-link" className="full-screen-menu-btn">
							<FontAwesomeIcon icon={faArtstation}/>
						</Button>
						<Button onClick={(): void => {}} flavour="btn-link" className="full-screen-menu-btn">
							<FontAwesomeIcon icon={faLinkedin}/>
						</Button>
					</nav>
				</div>
			</div>
		</div>
	</nav>
);
