import * as client_hooks from '../../../src/hooks.client.ts';

export { matchers } from './matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11')];

export const server_loads = [];

export const dictionary = {
	"/": [2],
	"/chatrooms/[chatroomId]": [3],
	"/driver-dashboard": [4],
	"/error-test": [5],
	"/privacy-policy": [6],
	"/profile/my-reservations": [7],
	"/redirect": [8],
	"/search": [9],
	"/sentry-example": [10],
	"/terms-conditions": [11]
};

export const hooks = {
	handleError: client_hooks.handleError || (({ error }) => { console.error(error) }),
};