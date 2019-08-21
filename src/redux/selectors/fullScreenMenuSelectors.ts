import { Selector } from 'react-redux';
import { path } from 'ramda';

export const isFullScreenMenuOpenSelector: Selector<object, any> = state =>
	path([ 'fullScreenMenu', 'isOpen' ], state);
