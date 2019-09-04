import React, { FC } from 'react';
import { map, path } from 'ramda';
import { Link } from '../../../../components';
import { isLastElementInArray } from '../../../../shared/utils/arrayUtils';
import { SimpleArrayType } from '../../../../shared/types/arrayTypes';

interface LibrariesProps {
	libraries: SimpleArrayType;
}

export const Libraries: FC<LibrariesProps> = ({ libraries }) => (
	<div className="footer--libraries">
		{
			map(
				library => (
					<span className="text-primary" key={path([ 'LABEL' ], library)}>
						<Link
							url={path([ 'URL' ], library)}
							target="_blank"
						>
							{path([ 'LABEL' ], library)}
						</Link>
						{
							isLastElementInArray(library, libraries) ?
								<span>{', '}</span> : <span>{'. '}</span>
						}
					</span>
				),
				libraries,
			)
		}
	</div>
);
