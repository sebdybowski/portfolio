import React, { ReactNode, FC } from 'react';
import './Logo.scss';

interface LogoProps {
	main?: string | ReactNode;
	caption?: string | ReactNode;
	className?: string;
}

export const Logo: FC<LogoProps> = ({ main, caption, className }) =>
	<header className={`logo ${className}`}>
		<span className="main">{main}</span>
		<span className="caption">{caption}</span>
	</header>;
