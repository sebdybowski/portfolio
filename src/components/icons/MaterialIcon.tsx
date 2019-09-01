import React, { FC } from 'react';
import './MaterialIcon.scss';

interface MaterialIconProps {
	icon: string;
	className?: string;
}

export const MaterialIcon: FC<MaterialIconProps> = ({ icon, className = '' }) =>
	<i className={`material-icon material-icons ${className}`}>{icon}</i>;
