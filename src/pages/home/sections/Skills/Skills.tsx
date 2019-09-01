import React, { ReactNode, FC } from 'react';
import { map, values } from 'ramda';
import { SKILLS_DETAILS } from './constants';
import { Skill } from './Skill/Skill';

interface SkillsProps {
	title: string | ReactNode;
	caption?: string | ReactNode;
	skills?: object;
}

export const Skills: FC<SkillsProps> = ({ title, caption }) => (
	<section className="text-left">
		<h1>{title}</h1>
		{ caption && <p>{caption}</p> }
		{ map(
			skill => <Skill title={skill.LABEL} percentage={skill.PERCENTAGE} skillSet={skill.SKILL_SET} key={skill.LABEL} />,
			values(SKILLS_DETAILS),
		) }
	</section>
);
