import { join } from 'path';
import { globSync, Options as GlobOptions } from 'fast-glob';
import { RunConfig } from '../../index.config';

interface Config {
	prefixes: string[];
	patterns: string[];

	options?: GlobOptions;
}

export function findPaths({ prefixes, patterns, options = {} }: Config) {
	const paths = patterns.map((subPath) => {
		const pattern = join(...prefixes, subPath);

		return globSync(pattern, { absolute: true, ...options });
	});

	return paths.flat(2);
}
