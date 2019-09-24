import { Action } from './actionTypes';
import { TOGGLE_FULL_SCREEN_MENU } from '../reducers/fullScreenMenuReducer';

type Dispatch = (action: Action) => void;

type ToggleType = (isOpen: boolean | undefined, dispatch: Dispatch) => void;

export const toggleFullScreenMenuAction: ToggleType = (isOpen, dispatch) => {
	// TODO: Convert to more elegant, class-toggling solution
	const htmlElement = document.getElementsByTagName('html');
	if (!isOpen) {
		htmlElement[0].style.overflowY = 'hidden';
	} else {
		htmlElement[0].style.overflowY = 'scroll';
	}
	dispatch({ type: TOGGLE_FULL_SCREEN_MENU, payload: { isOpen: !isOpen } });
};
