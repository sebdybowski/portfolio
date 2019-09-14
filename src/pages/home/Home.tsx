import React, { FC, ReactNode } from 'react';
import { map, sort } from 'ramda';
import { Footer, Section, SocialMediaBar } from '../../components';
import { SECTIONS } from './constants';

interface SectionInterface {
	ORDER: number;
	VALUE: string;
	CLASS_NAME: string;
	COMPONENT: ReactNode | FC;
	FLUID: boolean;
}

export const Home: FC = () => (
	<div className="home">
		{
			map(
				(section: SectionInterface): ReactNode => {
					return (
						<Section className={section.CLASS_NAME} fluid={section.FLUID} key={section.VALUE}>
							{ section.COMPONENT }
						</Section>
					);
				},
				sort((section1, section2) => section1.ORDER - section2.ORDER, SECTIONS),
			)
		}
		<div className="container-fluid p-0">
			<SocialMediaBar className="social-media-bar__primary"/>
			<Footer />
		</div>
	</div>
);
