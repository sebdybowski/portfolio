import { Reducer } from 'redux';

const CORE_PATH = 'fullScreenMenu';
const INITIAL_STATE = { isOpen: false };

export const TOGGLE_FULL_SCREEN_MENU = `${CORE_PATH}/TOGGLE_FULL_SCREEN_MENU`;

interface State { isOpen: boolean }
interface Action { type: string; payload: State }

const fullScreenMenu: Reducer<State, Action> = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;
	switch (type) {
	case TOGGLE_FULL_SCREEN_MENU:
		return { ...state, ...payload };
	default: return state;
	}
};

export default fullScreenMenu;
