import React from 'react';
import logo from './logo.svg';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { Button } from './components/buttons/Button';
import { Navbar } from './components/navbar/Navbar';
import { FullScreenMenu } from './components/menus/fullScreenMenu/FullScreenMenu';
import { isFullScreenMenuOpenSelector } from './redux/selectors/fullScreenMenuSelectors';
import { toggleFullScreenMenuAction } from './redux/actions/fullScreenMenuActions';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';

interface AppProps {
	isFullScreenMenuOpen: boolean;
	toggleFullScreenMenu: (isOpen: boolean) => void;
}

const AppComponent: React.FC<AppProps> = ({ isFullScreenMenuOpen, toggleFullScreenMenu }) => (
	<div className="App">
		{ isFullScreenMenuOpen && <FullScreenMenu isOpen={isFullScreenMenuOpen} toggleMenu={toggleFullScreenMenu}/> }
		<Navbar/>
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p>
				Edit <code>src/App.tsx</code> and save to reload.
			</p>
			<div className="row">
				<div className="col">
					<Button flavour="btn-primary" onClick={(): void => toggleFullScreenMenu(isFullScreenMenuOpen)}>Open menu</Button>
				</div>
			</div>
		</header>
	</div>
);

const mapStateToProps: MapStateToProps<object, object, object> = state => ({
	isFullScreenMenuOpen: isFullScreenMenuOpenSelector(state),
});

interface MapDispatch {
	toggleFullScreenMenu?: (isOpen: boolean) => void;
}

const mapDispatchToProps: MapDispatchToProps<MapDispatch, object> = dispatch => ({
	toggleFullScreenMenu: (isOpen): void => toggleFullScreenMenuAction(isOpen, dispatch),
});

// eslint-disable-next-line
// @ts-ignore
const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

export default App;

