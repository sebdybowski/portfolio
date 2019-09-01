import React, { FC } from 'react';
import './MenuButton.scss';
import { MENU_BUTTON_STATES } from './constants';
import { Button } from '../../buttons/Button';
import { MaterialIcon } from '../../icons/MaterialIcon';

const { CLOSE, OPEN } = MENU_BUTTON_STATES;

interface MenuButtonProps {
	isMenuOpen: boolean;
	toggleMenu: (isOpen: boolean) => void;
}

export const MenuButton: FC<MenuButtonProps> = ({ isMenuOpen, toggleMenu }) => (
	<Button
		onClick={(): void => toggleMenu(isMenuOpen)}
		className={`menu-button${isMenuOpen ? ' open' : ' closed'}`}
		flavour="btn-link"
		size={'btn-lg'}
	>
		{ isMenuOpen ?
			<span>{`${CLOSE.LABEL} `}<MaterialIcon icon={CLOSE.ICON} /></span> :
			<span>{`${OPEN.LABEL} `}<MaterialIcon icon={OPEN.ICON} /></span>
		}
	</Button>
);
