import React, { FC, ReactNode } from 'react';

interface LinkProps {
	url?: string;
	children: string | ReactNode;
	target?: '_blank';
}

export const Link: FC<LinkProps> = ({ url = '/', children, target = '_self', }) =>
	<a href={url} target={target}>{children}</a>;
