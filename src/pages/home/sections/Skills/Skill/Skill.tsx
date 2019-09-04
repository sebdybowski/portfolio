import React, { ReactNode, FC, useState } from 'react';
import { map } from 'ramda';
import './Skill.scss';

interface SkillProps {
	title: string | ReactNode;
	percentage: number;
	skillSet?: Array<string>;
}

export const Skill: FC<SkillProps> = ({ title, percentage, skillSet }) => {
	const [ areDetailsExpanded, toggleDetails ] = useState(false);
	return (
		<div className="skill mb-5">
			<div className="mb-1">
				<h3 className="d-inline">{title} <strong className="text-primary">{percentage}%</strong></h3>
				<strong className="skill--toggler float-right" onClick={(): void => toggleDetails(!areDetailsExpanded)}>
					{ areDetailsExpanded ? '- less' : '+ more' }
				</strong>
			</div>
			<div className="progress mb-2">
				<div
					className="progress-bar progress-bar-striped progress-bar-animated"
					role="progressbar"
					style={{ width: `${percentage}%` }}
				/>
			</div>
			<div className={`card skill--card${areDetailsExpanded ? ' skill--card__expanded' : ''}`}>
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
};
