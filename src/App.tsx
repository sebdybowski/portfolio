import React from 'react';
import logo from './logo.svg';
import { connect, MapStateToProps } from 'react-redux';
import { Button } from './components/buttons/Button';
import { Navbar } from './components/navbar/Navbar';
import { FullScreenMenu } from './components/menus/fullScreenMenu/FullScreenMenu';
import { isFullScreenMenuOpenSelector } from './redux/selectors/fullScreenMenuSelectors';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';

interface AppProps {
	isFullScreenMenuOpen: string;
}

const AppComponent: React.FC<AppProps> = ({ isFullScreenMenuOpen }) => {
	console.log(isFullScreenMenuOpen);
	return (
		<div className="App">
			{ true && <FullScreenMenu /> }
			<Navbar/>
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
				Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<div className="row">
					<div className="col">
						<Button flavour="btn-primary" onClick={(): void => console.log('ddd')}>Portfolio</Button>
					</div>
					<div className="col">
						<Button flavour="btn-outline-secondary" onClick={(): void => console.log('ddd')}>Contact Me</Button>
					</div>
				</div>
			</header>
		</div>
	);
};

const mapStateToProps: MapStateToProps<AppProps, object, object> = state => ({
	isFullScreenMenuOpen: isFullScreenMenuOpenSelector(state),
});

const App = connect(mapStateToProps)(AppComponent);

export default App;
