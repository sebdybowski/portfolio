import React from 'react';
import './FullScreenMenu.scss';
import { Button } from '../../buttons/Button';
import { Logo } from '../../logo/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faCodepen, faTwitter, faArtstation, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const FullScreenMenu: React.FC = () => (
	<nav className="full-screen-menu">
		<div className="container">
			<div className="row">
				<div className="col">
					<Logo />
				</div>
				<div className="col col-auto float-right">
					<Button onClick={(): void => {}} flavour="btn-link" customClassName="full-screen-menu-btn">
						Close <FontAwesomeIcon icon={faTimes}/>
					</Button>
				</div>
			</div>
			<div className="row main-row">
				<div className="col">
					<ul className="nav flex-column align-content-start">
						<li className="nav-item">
							<Button onClick={(): void => {}} flavour="btn-link" customClassName="full-screen-menu-btn lg main active">// Home</Button>
						</li>
						<li className="nav-item">
							<Button onClick={(): void => {}} flavour="btn-link" customClassName="full-screen-menu-btn lg main">Portfolio</Button>
						</li>
						<li className="nav-item">
							<Button onClick={(): void => {}} flavour="btn-link" customClassName="full-screen-menu-btn lg main">Contact</Button>
						</li>
					</ul>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<nav className="nav">
						<Button onClick={(): void => {}} flavour="btn-link" customClassName="full-screen-menu-btn">
							<FontAwesomeIcon icon={faGithub}/>
						</Button>
						<Button onClick={(): void => {}} flavour="btn-link" customClassName="full-screen-menu-btn">
							<FontAwesomeIcon icon={faCodepen}/>
						</Button>
						<Button onClick={(): void => {}} flavour="btn-link" customClassName="full-screen-menu-btn">
							<FontAwesomeIcon icon={faTwitter}/>
						</Button>
						<Button onClick={(): void => {}} flavour="btn-link" customClassName="full-screen-menu-btn">
							<FontAwesomeIcon icon={faArtstation}/>
						</Button>
						<Button onClick={(): void => {}} flavour="btn-link" customClassName="full-screen-menu-btn">
							<FontAwesomeIcon icon={faLinkedin}/>
						</Button>
					</nav>
				</div>
			</div>
		</div>
	</nav>
);
