import React, { ReactNode, FC, useState } from 'react';
import { map } from 'ramda';
import './Skill.scss';
import { ProgressBar } from '../../../../../components';

interface SkillProps {
	title: string | ReactNode;
	percentage: number;
	skillSet?: Array<string>;
}

export const Skill: FC<SkillProps> = ({ title, percentage, skillSet }) => {
	const [ areDetailsExpanded, toggleDetails ] = useState(false);
	return (
		<div className="skill mb-5">
			<div className="row mb-1">
				<div className="col">
					<h3 className="d-inline">{title} <strong className="text-primary">{percentage}%</strong></h3>
				</div>
				<div className="col col-auto">
					<strong className="skill--toggler float-right" onClick={(): void => toggleDetails(!areDetailsExpanded)}>
						{ areDetailsExpanded ? '- less' : '+ more' }
					</strong>
				</div>
			</div>
			<div className="row mb-2">
				<div className="col">
					<ProgressBar percentage={percentage} animated striped />
				</div>
			</div>
			<div className="row mb-2">
				<div className="col">
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
			</div>
		</div>
	);
};
