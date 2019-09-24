import { Contact, FAQ, Home, Portfolio } from '../../pages';

export const ROUTES = [
	{ VALUE: 'HOME', LABEL: 'home', PATH: '/', EXACT: true, COMPONENT: Home },
	{ VALUE: 'CONTACT', LABEL: 'contact', PATH: '/contact', EXACT: true, COMPONENT: Contact },
	{ VALUE: 'PORTFOLIO', LABEL: 'portfolio', PATH: '/portfolio', EXACT: true, COMPONENT: Portfolio },
	{ VALUE: 'FAQ', LABEL: 'FAQ', PATH: '/faq', EXACT: true, COMPONENT: FAQ },
];
