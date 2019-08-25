import React from 'react';
import './LogoMain.scss';

interface LogoMainProps {
	isMenuOpen: boolean;
	className?: string;
}

export const LogoMain: React.FC<LogoMainProps> = ({ isMenuOpen, className = '' }) =>
	<span className={`logo__main ${className}${ isMenuOpen ? 'logo__main--open' : 'logo__main--closed'}`}>
		<span className="logo__main--primary">seb</span>
		<span className="logo__main--secondary">dybowski</span>
	</span>;
