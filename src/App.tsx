import React from 'react';
import './App.scss';
import './shared/styles/core.scss';
import logo from './logo.svg';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { Button } from './components/buttons/Button';
import { Navbar } from './components/navbar/Navbar';
import { FullScreenMenu } from './components/menus/fullScreenMenu/FullScreenMenu';
import { isFullScreenMenuOpenSelector } from './redux/selectors/fullScreenMenuSelectors';
import { toggleFullScreenMenuAction } from './redux/actions/fullScreenMenuActions';
import { ToggleMenu } from './components/menus/fullScreenMenu/fullScreenMenuTypes';

interface AppProps {
	isMenuOpen: boolean;
	toggleMenu: ToggleMenu;
}

const AppComponent: React.FC<AppProps> = ({ isMenuOpen, toggleMenu }) => (
	<div className="App">
		{ isMenuOpen && <FullScreenMenu isOpen={isMenuOpen} toggleMenu={toggleMenu}/> }
		<Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen}/>
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p>
				Edit <code>src/App.tsx</code> and save to reload.
			</p>
			<div className="row">
				<div className="col">
					<Button flavour="btn-primary" onClick={(): void => toggleMenu(isMenuOpen)}>Open menu</Button>
				</div>
			</div>
		</header>
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

