import React, { FC } from 'react';
import { MaterialIcon } from '../../components/icons/MaterialIcon';

export const Error404: FC = () => (
	<div className="container-fluid vh-100 d-flex justify-content-center">
		<div className="jumbotron bg-transparent align-self-center text-center">
			<h1 className="display-4">
				404
			</h1>
			<p className="lead">
				<MaterialIcon icon="error" />
				Page not found...
			</p>
		</div>
	</div>
);
