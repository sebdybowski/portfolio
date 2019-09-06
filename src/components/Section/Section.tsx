import React, { FC, ReactNode } from 'react';
import './Section.scss';

interface SectionProps {
	children: ReactNode;
	className: string;
	fluid: boolean;
}

export const Section: FC<SectionProps> = ({ children, className, fluid }) => (
	<section className={`${fluid ? 'container-fluid' : 'container'} section ${className}`}>
		<div className="row justify-content-center">
			<div className="col col-10 col-md-8">
				{children}
			</div>
		</div>
	</section>
);

