import React, { ReactNode } from 'react';
import { map } from 'ramda';
import './Skill.scss';

interface SkillProps {
	title: string | ReactNode;
	percentage: number;
	skillSet?: Array<string>;
}

export const Skill: React.FC<SkillProps> = ({ title, percentage, skillSet }) => (
	<div className="skill">
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
						skill => <span>{`${skill}, `}</span>,
						skillSet,
					)
				}
			</div>
		</div>
	</div>
);
