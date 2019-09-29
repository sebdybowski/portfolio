import { Contact, FAQ, Home, Portfolio } from '../../pages';

export const ROUTE_NAME = {
	HOME: 'HOME',
	CONTACT: 'CONTACT',
	PORTFOLIO: 'HOME',
	FAQ: 'HOME',
};

export const ROUTES = [
	{ VALUE: 'HOME', LABEL: 'home', PATH: '/', EXACT: true, COMPONENT: Home },
	{ VALUE: 'CONTACT', LABEL: 'contact', PATH: '/contact', EXACT: true, COMPONENT: Contact },
	// TODO: Uncomment when ready
	// { VALUE: 'PORTFOLIO', LABEL: 'portfolio', PATH: '/portfolio', EXACT: true, COMPONENT: Portfolio },
	// { VALUE: 'FAQ', LABEL: 'FAQ', PATH: '/faq', EXACT: true, COMPONENT: FAQ },
];
