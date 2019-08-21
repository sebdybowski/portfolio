module.exports = {
	parser: '@typescript-eslint/parser',
	'env': {
		'browser': true,
		'es6': true
	},
	'extends': [
		'eslint:recommended',
    "plugin:react/recommended",
		'plugin:@typescript-eslint/recommended'
	],
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 2018,
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'@typescript-eslint'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
    "object-curly-spacing": [
      1,
      "always"
    ],
    "array-bracket-spacing": [
      "error",
      "always"
    ],
    "react/prop-types": [0],
	},
};
