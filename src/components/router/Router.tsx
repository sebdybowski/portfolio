import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Error404, Home } from '../../pages';

export const Router: FC = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={Home} />
			<Route component={Error404} />
		</Switch>
	</BrowserRouter>
);
