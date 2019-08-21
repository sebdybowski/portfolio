import React from 'react';

interface LogoProps {
    main?: string | HTMLElement;
    caption?: string | HTMLElement;
}

export const Logo: React.FC<LogoProps> = ({ main, caption }) => <header>
	<span>{main}</span>
	<span>{caption}</span>
</header>;
