import React from 'react';
import './Logo.scss';

interface LogoProps {
	main?: string | any;
	caption?: string | any;
}

export const Logo: React.FC<LogoProps> = ({ main, caption }) => <header className="logo">
	<span className="main">{main}</span>
	<span className="caption">{caption}</span>
</header>;
