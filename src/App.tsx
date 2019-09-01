import React, { FC } from 'react';
import './App.scss';
import './shared/styles/core.scss';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { FullScreenMenu } from './components/menus/fullScreenMenu/FullScreenMenu';
import { isFullScreenMenuOpenSelector } from './redux/selectors/fullScreenMenuSelectors';
import { toggleFullScreenMenuAction } from './redux/actions/fullScreenMenuActions';
import { ToggleMenu } from './components/menus/fullScreenMenu/fullScreenMenuTypes';
import { Home } from './pages/';

interface AppProps {
	isMenuOpen: boolean;
	toggleMenu: ToggleMenu;
}

const AppComponent: FC<AppProps> = ({ isMenuOpen, toggleMenu }) => (
	<div className="app h-100">
		{ isMenuOpen && <FullScreenMenu /> }
		<Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen}/>
		<Router>
			<Route path="/" exact component={Home} />
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

