import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Contact, Error404, Home } from '../../pages';

export const Router: FC = ({ children }) => (
	<BrowserRouter>
		{ children }
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/contact" exact component={Contact} />
			<Route component={Error404} />
		</Switch>
	</BrowserRouter>
);
