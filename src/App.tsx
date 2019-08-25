import React from 'react';
import './App.scss';
import './shared/styles/core.scss';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { Button } from './components/buttons/Button';
import { Navbar } from './components/navbar/Navbar';
import { FullScreenMenu } from './components/menus/fullScreenMenu/FullScreenMenu';
import { isFullScreenMenuOpenSelector } from './redux/selectors/fullScreenMenuSelectors';
import { toggleFullScreenMenuAction } from './redux/actions/fullScreenMenuActions';
import { ToggleMenu } from './components/menus/fullScreenMenu/fullScreenMenuTypes';
import { Skills } from './pages/home/sections/Skills/Skills';

interface AppProps {
	isMenuOpen: boolean;
	toggleMenu: ToggleMenu;
}

const AppComponent: React.FC<AppProps> = ({ isMenuOpen, toggleMenu }) => (
	<div className="app h-100">
		{ isMenuOpen && <FullScreenMenu /> }
		<Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen}/>
		<div className="container h-100">
			<div className="row align-content-center justify-content-center h-100">
				<div className="col-8">
					<div className="jumbotron bg-transparent align-items-start">
						<h1 className="display-4">Hello, world!</h1>
						<p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra
							attention to featured content or information.</p>
						<hr className="my-4"/>
						<p>It uses utility classes for typography and spacing to space content out within the larger
							container.</p>
						<Button flavour="btn-primary" onClick={(): void => toggleMenu(isMenuOpen)} className="btn-lg text-capitalize mr-3">Portfolio</Button>
						<Button flavour="btn-secondary" onClick={(): void => toggleMenu(isMenuOpen)} className="btn-lg text-capitalize">Contact me</Button>
					</div>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-8">
					<Skills title={'My Skills'} />
				</div>
			</div>
		</div>
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

