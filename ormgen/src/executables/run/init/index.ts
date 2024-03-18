import { store } from '~/internals';
import { RunConfig } from '../index.config';

import { createEntity$ } from './createEntity$';
import { findPaths } from './findPaths';
import { initEntity } from './initEntity';

export async function init(config: RunConfig) {
	const { cwd = process.cwd() } = config;

	const {
		root,

		entities = ['entities/*'],
		entityEnum = ['enums.ts', 'enums/index.ts', 'index.enums.ts', 'index.enums/index.ts'],
		entityMeta = ['meta.ts', 'meta/index.ts', 'index.meta.ts', 'index.meta/index.ts'],
		entitySeed = ['seed.ts', 'seed/index.ts', 'index.seed.ts', 'index.seed/index.ts'], // TODO: Move to seed config?

		globalEnums = ['enums/index.ts'],
		globalMixins = ['mixins/index.ts'],
		globalSeeds = ['seeds/index.ts'],
	} = config.search;

	const entityFolderPaths = findPaths({
		prefixes: [cwd, root],
		patterns: entities,
		options: { onlyDirectories: true },
	});

	const globalEnumPaths = findPaths({
		prefixes: [cwd, root],
		patterns: globalEnums,
		options: { onlyFiles: true },
	});
	// const globalMixinPaths = findPaths(config, globalMixins);
	// const globalSeedPaths = findPaths(config, globalSeeds);

	for (const entityFolderPath of entityFolderPaths) {
		await initEntity(entityFolderPath);

		const entityEnumPaths = findPaths({
			prefixes: [entityFolderPath],
			patterns: entityEnum,
			options: { onlyFiles: true },
		});

		for (const entityEnumPath of entityEnumPaths) {
			await import(entityEnumPath);
		}
	}

	for (const enumPath of globalEnumPaths) {
		await import(enumPath);
	}

	const allEntities = store.getEntities();

	for (const entity of allEntities) {
		await createEntity$(entity, allEntities);
	}
}
