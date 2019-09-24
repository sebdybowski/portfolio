import React, { FC } from 'react';
import './App.scss';
import './shared/styles/core.scss';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { Navbar } from './components/navbar/Navbar';
import { FullScreenMenu } from './components/menus/fullScreenMenu/FullScreenMenu';
import { isFullScreenMenuOpenSelector } from './redux/selectors/fullScreenMenuSelectors';
import { toggleFullScreenMenuAction } from './redux/actions/fullScreenMenuActions';
import { ToggleMenu } from './components/menus/fullScreenMenu/fullScreenMenuTypes';
import { Router } from './components/router/Router';

interface AppProps {
	isMenuOpen: boolean;
	toggleMenu: ToggleMenu;
}

const AppComponent: FC<AppProps> = ({ ...props }) => (
	<div className="app">
		<Navbar {...props} />
		<Router>
			<div>{ props.isMenuOpen && <FullScreenMenu {...props} /> }</div>
		</Router>
	</div>
);

interface MappedProps {
	isMenuOpen?: object;
}

const mapStateToProps: MapStateToProps<MappedProps, object, object> = state => ({
	isMenuOpen: isFullScreenMenuOpenSelector(state),
});

interface DispatchedProps {
	toggleMenu?: ToggleMenu;
}

const mapDispatchToProps: MapDispatchToProps<DispatchedProps, object> = dispatch => ({
	toggleMenu: (isMenuOpen): void => toggleFullScreenMenuAction(isMenuOpen, dispatch),
});

// eslint-disable-next-line
// @ts-ignore
const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

export default App;

