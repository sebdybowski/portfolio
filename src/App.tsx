import React from 'react';
import logo from './logo.svg';
import { connect, MapStateToProps } from 'react-redux';
import { Button } from './components/buttons/Button';
import { Navbar } from './components/navbar/Navbar';
import { isFullScreenMenuOpenSelector } from './redux/selectors/fullScreenMenuSelectors';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

interface AppProps {
	isFullScreenMenuOpen: string;
}

const AppComponent: React.FC<AppProps> = ({ isFullScreenMenuOpen }) => {
	console.log(isFullScreenMenuOpen);
	return (
		<div className="App">
			<Navbar/>
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
				Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<div className="row">
					<div className="col">
						<Button inner="Portfolio" flavour="btn-primary" onClick={(): void => console.log('ddd')} />
					</div>
					<div className="col">
						<Button inner="Contact Me" flavour="btn-outline-secondary" onClick={(): void => console.log('ddd')} />
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
