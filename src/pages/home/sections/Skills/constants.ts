export const SKILLS_VALUES = {
	FRONTEND: 'FRONTEND',
	BACKEND: 'BACKEND',
	DATABASE: 'DATABASE',
	FINE_ARTS: 'FINE_ARTS',
	UI_UX: 'UI_UX',
	SOFT_SKILLS: 'SOFT_SKILLS',
};

const { FRONTEND, BACKEND, DATABASE, FINE_ARTS, UI_UX, SOFT_SKILLS } = SKILLS_VALUES;

export const SKILLS_DETAILS = {
	[FRONTEND]: {
		LABEL: 'Frontend',
		PERCENTAGE: 90,
		SKILL_SET: [ 'JavaScript', 'React', 'Vue.js', 'CSS', 'HTML', 'ES6', 'Webpack', 'Typescript', 'Unit tests' ],
	},
	[BACKEND]: {
		LABEL: 'Backend',
		PERCENTAGE: 40,
		SKILL_SET: [ 'Node.js', 'PHP', 'Symfony', 'Java' ],
	},
	[DATABASE]: {
		LABEL: 'Database',
		PERCENTAGE: 70,
		SKILL_SET: [ 'MySQL', 'SQLite', 'Postgres' ],
	},
	[FINE_ARTS]: {
		LABEL: 'Fine arts',
		PERCENTAGE: 95,
		SKILL_SET: [ 'Digital painting', 'Sketching', 'Street art', 'Photography' ],
	},
	[UI_UX]: {
		LABEL: 'UX/UI',
		PERCENTAGE: 99,
		SKILL_SET: [ 'BDD', 'Sketch', 'Figma', 'Mobile first', 'Typography', 'Measurements', 'Mock-up\'s' ],
	},
	[SOFT_SKILLS]: {
		LABEL: 'Soft skills',
		PERCENTAGE: 90,
		SKILL_SET: [ 'Leading', 'Negotiating', 'Solving problems', 'Cross-level communication', 'Proactivity', 'Positivity', 'Goal-oriented', 'Open for everybody' ],
	},
};
