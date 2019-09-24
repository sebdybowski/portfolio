import React, { FC } from 'react';
import classNames from 'classnames';
import './ProgressBar.scss';

interface ProgressBarProps {
	percentage: number | string;
	striped?: boolean;
	animated?: boolean;
	className?: string;
}

export const ProgressBar: FC<ProgressBarProps> = ({ percentage, striped = false, animated = false, className = '' }) => (
	<div className={`progress ${className}`}>
		<div
			className={classNames(
				'progress-bar progress-bar__glow',
				{
					['progress-bar-striped']: striped,
					['progress-bar-animated']: animated,
				},
			)}
			role="progressbar"
			style={{ width: `${percentage}%` }}
		/>
	</div>
);
