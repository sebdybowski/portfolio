import { toString } from 'ramda';

export const getCurrentYear = (): string  => toString(new Date().getFullYear());
