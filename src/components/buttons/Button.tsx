import React from 'react';
// @ts-ignore-line
import noop from 'lodash.noop';
import { getClassName } from './utils';

type BootstrapButtonFlavours =
    'btn-primary' | 'btn-secondary' | 'btn-success' | 'btn-danger' |
    'btn-warning' | 'btn-info' | 'btn-light' | 'btn-dark' | 'btn-link' |
    'btn-outline-primary' | 'btn-outline-secondary' | 'btn-outline-success' |
    'btn-outline-danger' | 'btn-outline-warning' | 'btn-outline-info' |
    'btn-outline-light' | 'btn-outline-dark';

type onClickType = (event: React.MouseEvent<HTMLElement>) => any;

interface ButtonProps {
    inner: string | object,
    type?: 'button' | 'submit',
    size?: 'btn-sm' | 'btn-lg',
    flavour?: BootstrapButtonFlavours,
    block?: boolean,
    active?: boolean,
    disabled?: boolean,
    customClassName?: string,
    onClick: onClickType,
}

export const Button = ({ inner, type = 'button', size, flavour, block, active, disabled, customClassName, onClick } :ButtonProps) =>
    <button
        className={
            'btn'
            + getClassName(size)
            + getClassName(flavour)
            + getClassName(block, 'btn-block')
            + getClassName(active, 'active')
            + getClassName(disabled, 'disabled')
            + getClassName(customClassName)
        }
        type={type}
        onClick={disabled ? noop : onClick}
    >
        {inner}
    </button>;
