import React from 'react';
import { Hero, Skills, About } from './sections';

export const SECTIONS = [
	{ ORDER: 0, VALUE: 'HERO', COMPONENT: <Hero />, CLASS_NAME: 'hero--section', FLUID: true },
	{ ORDER: 1, VALUE: 'ABOUT', COMPONENT: <About />, CLASS_NAME: 'about--section vh-50', FLUID: false },
	{ ORDER: 2, VALUE: 'SKILLS', COMPONENT: <Skills />, CLASS_NAME: 'skills--section', FLUID: false },
];
