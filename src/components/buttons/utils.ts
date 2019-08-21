type stringFunction = (condition?: string | boolean, className?: string ) => string;

export const getClassName: stringFunction = (condition, className) =>
	(condition ? ` ${className || condition}` : '');
