import React from 'react';
import './MaterialIcon.scss';

interface MaterialIconProps {
	icon: string;
	className?: string;
}

export const MaterialIcon: React.FC<MaterialIconProps> = ({ icon, className = '' }) =>
	<i className={`material-icon material-icons ${className}`}>{icon}</i>;
