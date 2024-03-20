import { store } from '~/internals';

import { createEntity } from './createEntity';
import { findPaths } from '../../helpers/findPaths';
import { initEntityInput } from './initEntityInput';
import { InitConfig } from './index.config';
import { createSeed } from './createSeed';
import { initEntitySeed } from './initEntitySeed';

export async function init(config: InitConfig) {
	const { cwd, search } = config;
	const { root, entities, entityEnum, entitySeed, globalEnums } = search;

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

	for (const entityFolderPath of entityFolderPaths) {
		await initEntityInput(entityFolderPath);

		const entityEnumPaths = findPaths({
			prefixes: [entityFolderPath],
			patterns: entityEnum,
			options: { onlyFiles: true },
		});

		const entitySeedPaths = findPaths({
			prefixes: [entityFolderPath],
			patterns: entitySeed,
			options: { onlyFiles: true },
		});

		for (const entityEnumPath of entityEnumPaths) {
			await import(entityEnumPath);
		}

		for (const entitySeedPath of entitySeedPaths) {
			await initEntitySeed(entityFolderPath, entitySeedPath);
		}
	}

	for (const enumPath of globalEnumPaths) {
		await import(enumPath);
	}

	for (const entityInput of store.getEntityInputs()) {
		await createEntity(entityInput, entityFolderPaths);
	}

	for (const seedInput of store.getSeedInputs()) {
		await createSeed(config, seedInput);
	}
}
