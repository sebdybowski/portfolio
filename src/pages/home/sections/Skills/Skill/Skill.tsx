import React, { ReactNode, FC } from 'react';
import { map } from 'ramda';
import './Skill.scss';

interface SkillProps {
	title: string | ReactNode;
	percentage: number;
	skillSet?: Array<string>;
}

export const Skill: FC<SkillProps> = ({ title, percentage, skillSet }) => (
	<div className="skill mb-4">
		<h3>{title}{` ${percentage}%`}</h3>
		<div className="progress">
			<div
				className="progress-bar progress-bar-striped progress-bar-animated"
				role="progressbar"
				style={{ width: `${percentage}%` }}
			/>
		</div>
		<div className="card">
			<div className="card-body">
				{
					skillSet && map(
						skill => <span key={skill}>{`${skill}, `}</span>,
						skillSet,
					)
				}
			</div>
		</div>
	</div>
);
