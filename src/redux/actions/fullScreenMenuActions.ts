import { TOGGLE_FULL_SCREEN_MENU } from '../reducers/fullScreenMenuReducer';

interface TogglePayload {
	isOpen?: boolean;
}

interface Action {
	type: string;
	payload: TogglePayload;
}

type Dispatch = (action: Action) => void;

type ToggleType = (isOpen: boolean | undefined, dispatch: Dispatch) => void;

export const toggleFullScreenMenuAction: ToggleType = (isOpen, dispatch) =>
	dispatch({ type: TOGGLE_FULL_SCREEN_MENU, payload: { isOpen: !isOpen } });
