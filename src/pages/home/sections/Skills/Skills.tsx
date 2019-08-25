import React, { ReactNode } from 'react';
import { map, values } from 'ramda';
import { SKILLS_DETAILS } from './constants';
import { Skill } from './Skill/Skill';

interface SkillsProps {
	title: string | ReactNode;
	caption?: string | ReactNode;
	skills?: object;
}

export const Skills: React.FC<SkillsProps> = ({ title, caption }) => (
	<section>
		<h1>{title}</h1>
		{ caption && <p>{caption}</p> }
		{
			map(
				skill => <Skill title={skill.LABEL} percentage={skill.PERCENTAGE} skillSet={skill.SKILL_SET} />,
				values(SKILLS_DETAILS),
			)
		}
	</section>
);
