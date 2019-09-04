import React, { FC } from 'react';
import './Footer.scss';
import { getCurrentYear } from '../../../../shared/utils/dateUtils';
import { BUILD_STACK, TECH_STACK } from './constants';
import { Libraries } from './Libraries';
import { Link, MaterialIcon } from '../../../../components';
import { REPOSITORY_URL } from '../../../../shared/constants/url';

export const Footer: FC = () => (
	<footer className="footer text-center vh-50 p-5">
		<h1>seb<strong className="text-primary">dybowski</strong>.com</h1>
		<h5>This page is open-source, click <Link url={REPOSITORY_URL} target="_blank">
			<strong>here</strong>
		</Link> to view repository! <MaterialIcon icon="mood" /></h5>
		<div className="mb-2">
			<span>Proudly <strong>developed</strong> with: </span>
			<Libraries libraries={TECH_STACK} />
		</div>
		<div className="mb-2">
			<span>& <strong>maintained</strong> with: </span>
			<Libraries libraries={BUILD_STACK} />
		</div>
		<span className="text-primary">{getCurrentYear()}</span>
	</footer>
);
