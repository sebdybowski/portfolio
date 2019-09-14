import React, { ReactNode, FC } from 'react';
import classNames from 'classnames';
import { noop } from 'lodash';

type BootstrapButtonFlavours =
    'btn-primary' | 'btn-secondary' | 'btn-success' | 'btn-danger' |
    'btn-warning' | 'btn-info' | 'btn-light' | 'btn-dark' | 'btn-link' |
    'btn-outline-primary' | 'btn-outline-secondary' | 'btn-outline-success' |
    'btn-outline-danger' | 'btn-outline-warning' | 'btn-outline-info' |
    'btn-outline-light' | 'btn-outline-dark';

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
    onClick?: onClickType;
}

export const Button: FC<ButtonProps> = ({ children, type = 'button', size = '', flavour = '', block, active, disabled = false, className = '', onClick = noop }) =>
	<button
		className={classNames(
			'btn',
			{
				[size]: size,
				[flavour]: flavour,
				['btn-block']: block,
				['active']: active,
				['disabled']: disabled,
				[className]: className,
			}
		)}
		type={type}
		onClick={disabled ? noop : onClick}
		disabled={disabled}
	>
		{/*TODO: Replace with children*/}
		{children}
	</button>;
