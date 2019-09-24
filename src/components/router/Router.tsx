import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Error404 } from '../../pages';
import { map } from 'ramda';
import { ROUTES } from './constants';

export const Router: FC = ({ children }) => (
	<BrowserRouter>
		{ children }
		<Switch>
			{ map(
				route => <Route
					key={route.VALUE}
					path={route.PATH}
					exact={route.EXACT}
					component={route.COMPONENT}
				/>,
				ROUTES,
			) }
			<Route component={Error404} />
		</Switch>
	</BrowserRouter>
);
