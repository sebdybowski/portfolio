import React, { FC } from 'react';
import './SocialMediaBar.scss';
import { map } from 'ramda';
import { Link } from '../';
import { SOCIAL_MEDIA_ITEMS } from './constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SocialMediaBar: FC = () => (
	<section className="social-media-bar social-media-bar__primary text-center w-100 p-3">
		<div className="row justify-content-center">
			{
				map(
					item => <div className="col col-auto social-media-bar--item" key={item.VALUE}>
						<Link url={item.URL} target="_blank">
							<FontAwesomeIcon icon={item.ICON} />
						</Link>
					</div>,
					SOCIAL_MEDIA_ITEMS,
				)
			}
		</div>
	</section>
);
