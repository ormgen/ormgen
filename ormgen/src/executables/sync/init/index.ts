import { store } from '~/internals';
import { SyncConfig } from '../index.config';

import { createEntity } from './createEntity';
import { findPaths } from '../../../helpers/findPaths';
import { initEntityInput } from './initEntityInput';

export async function init(config: SyncConfig) {
	const { cwd = process.cwd() } = config;

	const {
		root,

		entities = ['entities/*'],
		entityEnum = ['enums.ts', 'enums/index.ts', 'index.enums.ts', 'index.enums/index.ts'],
		// entitySeed = ['seed.ts', 'seed/index.ts', 'index.seed.ts', 'index.seed/index.ts'], // TODO: Move to seed config?

		globalEnums = ['enums/index.ts'],
		// globalMixins = ['mixins/index.ts'],
		// globalSeeds = ['seeds/index.ts'],
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
		await initEntityInput(entityFolderPath);

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

	const entityInputs = store.getEntityInputs();

	for (const entityInput of entityInputs) {
		await createEntity(config, entityInput, entityFolderPaths);
	}
}
