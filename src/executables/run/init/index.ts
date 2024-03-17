import { RunConfig } from '../index.config';
import { join } from 'path';
import { globSync } from 'fast-glob';

function findPaths(config: RunConfig, subPaths: string[]) {
	const { root } = config.search;

	const paths = subPaths.map((subPath) => {
		const pattern = join(root, subPath);

		// console.log(process.cwd(), pattern);

		return globSync(pattern);
	});

	return paths.flat(2);
}

export async function init(config: RunConfig) {
	const {
		root,

		entities = ['entities/*/index.ts'],
		entityEnum = ['enums.ts', 'enums/index.ts', 'index.enums.ts', 'index.enums/index.ts'],
		entityMeta = ['meta.ts', 'meta/index.ts', 'index.meta.ts', 'index.meta/index.ts'],
		entitySeed = ['seed.ts', 'seed/index.ts', 'index.seed.ts', 'index.seed/index.ts'],

		globalEnums = ['enums/index.ts'],
		globalMixins = ['mixins/index.ts'],
		globalSeeds = ['seeds/index.ts'],
	} = config.search;

	const entityPaths = findPaths(config, entities);

	console.log(entityPaths);

	for (const entityPath of entityPaths) {
		const entity = await import(`${root}/${entityPath}`);
	}
}
