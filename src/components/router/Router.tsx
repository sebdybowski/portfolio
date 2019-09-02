import React, { FC } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from '../../pages';

export const Router: FC = () => (
	<BrowserRouter>
		<Route path="/" exact component={Home} />
	</BrowserRouter>
);
