import React, { ReactNode, FC } from 'react';
import { noop } from 'lodash';
import { getClassName } from './utils';

type BootstrapButtonFlavours =
    'btn-primary' | 'btn-secondary' | 'btn-success' | 'btn-danger' |
    'btn-warning' | 'btn-info' | 'btn-light' | 'btn-dark' | 'btn-link' |
    'btn-outline-primary' | 'btn-outline-secondary' | 'btn-outline-success' |
    'btn-outline-danger' | 'btn-outline-warning' | 'btn-outline-info' |
    'btn-outline-light' | 'btn-outline-dark'    ;

type onClickType = (event: React.MouseEvent<HTMLElement>) => void;

interface ButtonProps {
    children: string | ReactNode;
    type?: 'button' | 'submit';
    size?: 'btn-sm' | 'btn-lg';
    flavour?: BootstrapButtonFlavours;
    block?: boolean;
    active?: boolean;
    disabled?: boolean;
    className?: string;
    onClick: onClickType;
}

export const Button: FC<ButtonProps> = ({ children, type = 'button', size, flavour, block, active, disabled, className = '', onClick }) =>
	<button
		className={
			`btn${getClassName(size)}
			${getClassName(flavour)}
			${getClassName(block, 'btn-block')}
			${getClassName(active, 'active')}
			${getClassName(disabled, 'disabled')}
			${getClassName(className)}`
		}
		type={type}
		onClick={disabled ? noop : onClick}
	>
		{/*TODO: Replace with children*/}
		{children}
	</button>;
