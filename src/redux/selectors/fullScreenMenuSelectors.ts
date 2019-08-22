import { Selector } from 'react-redux';
import { path } from 'ramda';

export const isFullScreenMenuOpenSelector: Selector<object, object | undefined> = state =>
	path([ 'fullScreenMenu', 'isOpen' ], state);
