import { findUp } from '@amono/find-up';

export function getNodeModulesPath() {
	return findUp({
		targets: ['node_modules'],
		type: 'directory',
	});
}
